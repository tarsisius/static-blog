import path from 'path'
import fs from 'fs'
import shiki from 'shiki'
import { marked } from 'marked'
import matter from 'gray-matter'

export const get = async ({ params }) => {
  const dir = path.join(process.cwd(), 'content')
  const slug = params.slug
  const file = path.join(dir, `${slug}.md`)

  const exists = async (path) => {
    try {
      await fs.promises.access(path)
      return true
    } catch {
      return false
    }
  }
  const check = await exists(file)
  if (!check) {
    return {
      status: 404,
    }
  }

  const read = await fs.promises.readFile(file, 'utf-8')
  const { data, content } = matter(read)

  const html = await shiki
    .getHighlighter({ theme: 'light-plus' })
    .then((highlighter) => {
      return marked.setOptions({
        highlight: (code, lang) => highlighter.codeToHtml(code, { lang }),
      })(content)
    })

  const post = { slug, html, ...data }

  return {
    body: {
      post,
    },
  }
}
