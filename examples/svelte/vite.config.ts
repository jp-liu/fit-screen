import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { classNamePrefix } from '@fit-screen/shared'

classNamePrefix('my-screen_prefix')

// https://vitejs.dev/config/
export default defineConfig({
  base: '.',
  plugins: [svelte()],
  build: {
    sourcemap: true,
  },
})
