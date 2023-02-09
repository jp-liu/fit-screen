import { resolve } from 'path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    resolve: {
      alias: [
        {
          find: '~',
          replacement: pathResolve('src'),
        },
        {
          find: '@fit-screen/vue',
          replacement: pathResolve('src'),
        },
      ],
    },
    plugins: [vue(), mode !== 'analyze' ? dts() : undefined],
    optimizeDeps: {
      exclude: [
        'vue-demi',
      ],
    },
    build: {
      lib: {
        entry: pathResolve('./src/index.ts'),
        name: 'FitScreen',
        formats: ['umd', 'es', 'iife'],
        fileName: format => `index.${format}.js`,
      },
      rollupOptions: {
        plugins: [
          // rollup-plugin-visualizer
          // https://github.com/btd/rollup-plugin-visualizer
          mode === 'analyze'
            ? visualizer({
              open: true,
              filename: 'stats.html',
              gzipSize: false,
              brotliSize: false,
            })
            : undefined,
        ],
        external: ['vue', 'vue-demi'],
        output: {
          esModule: true,
          generatedCode: {
            reservedNamesAsProps: false,
          },
          interop: 'compat',
          systemNullSetters: false,
          exports: 'named',
          globals: {
            'vue-demi': 'VueDemi',
            'vue': 'Vue',
          },
        },
      },
      // Minify option
      target: 'esnext',
      minify: false,
    },
  }

  return config
})
