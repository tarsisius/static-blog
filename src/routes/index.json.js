import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const get = () => {
  const dir = path.join(process.cwd(), 'content')
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

  return {
    body: {
      posts,
    },
  }
}
