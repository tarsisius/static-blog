import fs from 'fs'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypePrism from 'rehype-prism'
import rehypeStringify from 'rehype-stringify'
import yaml from 'js-yaml'
import dayjs from 'dayjs'

import 'prismjs/components/prism-rust.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-yaml.js'
import 'prismjs/components/prism-toml.js'

const parser = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkFrontmatter, ['yaml'])

const runner = unified().use(remarkRehype).use(rehypePrism).use(rehypeStringify)

export function markdownToHtml(markdown) {
  const tree = parser.parse(markdown)
  const root = runner.runSync(tree)
  return runner.stringify(root)
}

function getMetadata(tree) {
  const top = tree.children.at(0)
  if (top?.type === 'yaml') {
    const metadata = yaml.load(top.value)
    metadata.date = dayjs(metadata.date).format('YYYY-MM-DD')
    return metadata
  }
}

function markdownToPost(markdown) {
  const tree = parser.parse(markdown)
  const metadata = getMetadata(tree)
  if (metadata) {
    tree.children = tree.children.slice(1)
    const root = runner.runSync(tree)
    const html = runner.stringify(root)
    return { metadata, html }
  }
}

export function getPost(slug) {
  const markdown = fs.readFileSync(`content/${slug}.md`)
  if (markdown) {
    return markdownToPost(markdown)
  }
}

function getPostMetadata(slug) {
  const markdown = fs.readFileSync(`content/${slug}.md`)
  if (markdown) {
    const metadata = getMetadata(parser.parse(markdown))
    if (metadata) {
      return { slug, metadata }
    }
  }
}

export function getPostMetadatas() {
  const posts = fs
    .readdirSync('content')
    .map((f) => f.match(/(.*)\.md/)?.[1])
    .filter((f) => f !== undefined)
    .map((slug) => getPostMetadata(slug))
    .filter((post) => post !== undefined)

  posts.sort((a, b) =>
    dayjs(a.metadata.date, 'YYYY-MM-DD').isAfter(
      dayjs(b.metadata.date, 'YYYY-MM-DD')
    )
      ? -1
      : 1
  )
  return posts
}
