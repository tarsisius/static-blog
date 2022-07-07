import { getContentIndex } from '$lib/content'

export const get = async () => {
  return {
    body: {
      posts: await getContentIndex(),
    },
  }
}
