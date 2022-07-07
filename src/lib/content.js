import fs from 'fs'
import path from 'path'
import shiki from 'shiki'
import { marked } from 'marked'
import matter from 'gray-matter'

const dir = path.join(process.cwd(), 'content')

export async function getContentIndex() {
  const files = await fs.promises.readdir(dir)
  const paths = files
    .map((f) => f.replace(/\.md?$/, ''))
    .filter((f) => f !== undefined)

  const posts = await Promise.all(
    paths.map(async (slug) => {
      const file = path.join(dir, `${slug}.md`)
      const read = await fs.promises.readFile(file, 'utf-8')

      const { data } = matter(read)
      return {
        ...data,
        slug,
      }
    })
  )
  posts.sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}

export async function getContentBySlug(slug) {
  const file = path.join(dir, `${slug}.md`)
  // vite or sveltekit bug ? :(
  const check = fs.existsSync(file)
  if (!check) return

  const read = await fs.promises.readFile(file, 'utf-8')
  const { data, content } = matter(read)

  const html = await shiki
    .getHighlighter({ theme: 'nord' })
    .then((highlighter) => {
      marked.setOptions({
        highlight: (code, lang) => highlighter.codeToHtml(code, { lang }),
      })

      return marked(content)
    })

  return {
    slug,
    html,
    ...data,
  }
}
