import fs from 'fs'
import path from 'path'
import prism from 'prismjs'
import { marked } from 'marked'
import matter from 'gray-matter'

const dir = path.join(process.cwd(), 'content')

export const contents = () => {
  const files = fs.readdirSync(dir)
  const paths = files
    .map((f) => f.replace(/\.md?$/, ''))
    .filter((f) => f !== undefined)

  const posts = paths.map((slug) => {
    const file = path.join(dir, `${slug}.md`)
    const read = fs.readFileSync(file, 'utf-8')

    const { data } = matter(read)
    return {
      ...data,
      slug,
    }
  })

  posts.sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}

export const contentBySlug = (slug) => {
  const file = path.join(dir, `${slug}.md`)

  // vite or sveltekit bug ? :(
  const check = fs.existsSync(file)
  if (!check) return

  const read = fs.readFileSync(file, 'utf-8')

  const { data, content } = matter(read)

  marked.setOptions({
    highlight: (code, lang) => {
      return prism.languages[lang]
        ? prism.highlight(code, prism.languages[lang], lang)
        : code
    },
  })

  const html = marked(content)

  return {
    slug,
    html,
    ...data,
  }
}
