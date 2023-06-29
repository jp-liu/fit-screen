// import { unlinkSync } from 'fs'
import { resolve } from 'path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import css from 'vite-plugin-css-injected-by-js'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const minify = mode === 'minify'

  const config: UserConfig = {
    plugins: [
      !minify && dts({ copyDtsFiles: false }),
      css(),
    ],
    build: {
      emptyOutDir: false,
      cssCodeSplit: false,
      lib: {
        entry: pathResolve('./src/index.ts'),
        name: 'FitScreen',
        formats: ['umd', 'es'],
        fileName: (format) => {
          const suffix = minify ? '.min' : ''
          switch (format) {
            case 'umd':
              return `fitscreen${suffix}.js`
            case 'es':
              return `index.es${suffix}.js`
            default:
              return `index${suffix}.js`
          }
        },
      },
      rollupOptions: {
        output: {
          esModule: false,
          generatedCode: {
            reservedNamesAsProps: false,
          },
          systemNullSetters: false,
          exports: 'named',
        },
      },
      // Minify option
      target: 'es2015',
      minify,
    },
  }

  return config
})
