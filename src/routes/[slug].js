import path from 'path'
import fs from 'fs'
import hljs from 'highlight.js'
import { marked } from 'marked'
import matter from 'gray-matter'

export const get = ({ params }) => {
  const dir = path.join(process.cwd(), 'content')
  const slug = params.slug
  const file = path.join(dir, `${slug}.md`)

  const exists = (path) => {
    try {
      fs.accessSync(path)
      return true
    } catch {
      return false
    }
  }
  const check = exists(file)
  if (!check) {
    return {
      body: {
        status: 404,
      },
    }
  }

  const read = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(read)

  marked.setOptions({
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  })

  const html = marked(content)
  const post = { slug, html, ...data }

  return {
    body: {
      post,
    },
  }
}
