import { getContentBySlug } from '$lib/content'

export const get = async ({ params }) => {
  const slug = params.slug

  const post = await getContentBySlug(slug)
  return {
    body: {
      post,
    },
  }
}
