import { getPostMetadatas } from '$lib/markdown'

export const get = () => {
  return {
    body: {
      posts: getPostMetadatas(),
    },
  }
}
