import {sveltekit} from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },

  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
  }
}

export default config
