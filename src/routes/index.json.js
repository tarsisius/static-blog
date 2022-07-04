import { getPostMetadatas } from '$lib/markdown'

export const get = async () => {
  const posts = getPostMetadatas()
  const body = JSON.stringify({ posts })

  return { body }
}
