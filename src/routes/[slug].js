import { contentBySlug } from '$lib/content'

export const get = ({ params }) => {
  const slug = params.slug

  const post = contentBySlug(slug)
  return {
    body: {
      post,
    },
  }
}
