import { contents } from '$lib/content'

export const get = () => {
  return {
    body: {
      posts: contents(),
    },
  }
}
