import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const get = async () => {
  const dir = path.join(process.cwd(), 'content')
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
  
  return {
    body: {
      posts,
    },
  }
}
