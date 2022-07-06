import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
  preprocess: [
    preprocess({
      scss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
  },
}

export default config
