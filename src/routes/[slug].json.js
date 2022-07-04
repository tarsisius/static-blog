import { getPost } from '$lib/markdown'

export const get = async ({ params }) => {
  const { slug } = params
  const post = getPost(slug)
  const body = JSON.stringify({ post })

  return { body }
}
