import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import type { UserConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import dts from 'vite-plugin-dts'
import css from 'vite-plugin-css-injected-by-js'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [
      mode !== 'analyze' ? dts({ copyDtsFiles: false }) : undefined,
      react(),
      css(),
    ],
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
        external: ['react'],
        output: {
          esModule: true,
          generatedCode: {
            reservedNamesAsProps: false,
          },
          systemNullSetters: false,
          exports: 'named',
          globals: {
            react: 'React',
          },
        },
      },
      // Minify option
      target: 'es2015',
      minify: false,
    },
  }

  return config
})
