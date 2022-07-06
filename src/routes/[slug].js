import { getPost } from '$lib/markdown'

export const get = ({ params }) => {
  const slug = params.slug
  if (slug === '__vite_ping') {
    return {
      status: 404,
    }
  }
  const post = getPost(slug)
  return {
    body: {
      post,
    },
  }
}
