import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const environment = 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(
        {
          scss: {
            prependData: '@use "src/variables.scss" as *;',
          },
        }),
  ],

  kit: {
    adapter: adapter(
        {
          pages: 'build',
          assets: 'build',
        }),

    // paths: {
    //   base: environment === 'prod' ? '/sauleja-2.0' : '',
    // },

    prerender: {
      default: true,
      entries: [
        '*',
        '/books/bibele',
        '/books/jauna_deriba',
        '/books/laipnibas_skola',
        '/books/tikai_sievietem',
        '/books/tikai_viriesiem',
        '/books/depresija',
      ],
    },
  },
}

export default config
