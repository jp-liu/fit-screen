// import { unlinkSync } from 'fs'
import { resolve } from 'path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import dts from 'vite-plugin-dts'
import css from 'vite-plugin-css-injected-by-js'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [
      vue(),
      mode !== 'analyze' ? dts({ copyDtsFiles: false }) : undefined,
      css(),
    ],
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
            }) as any
            : undefined,
        ],
        external: ['vue', 'vue-demi'],
        output: {
          esModule: true,
          generatedCode: {
            reservedNamesAsProps: false,
          },
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
