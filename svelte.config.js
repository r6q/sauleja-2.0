import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const environment = 'prod'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(
        {
          pages: 'build',
          assets: 'build',
        },
    ),

    paths: {
      base: environment === 'prod' ? '/sauleja-2.0' : '',
    },

    prerender: {
      default: true,
      entries: [
          '/books/bibele',
      ]
    },
  },
}

export default config
