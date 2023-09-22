import { resolve } from 'path'
import { copyFileSync, existsSync, readdirSync, rmSync } from 'fs'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'custom',
  plugins: [
    dts({ copyDtsFiles: false }),
    {
      name: 'vite:build-css',
      enforce: 'post',
      apply: 'build',
      writeBundle() {
        if (existsSync(pathResolve('./dist/style.css')))
          return

        copyFileSync(pathResolve('./src/style.css'), pathResolve('./dist/style.css'))
      },
    },
    {
      name: 'vite:clean',
      enforce: 'post',
      apply: 'build',
      writeBundle() {
        const files = readdirSync(pathResolve('./dist'))
        files.forEach((item) => {
          if (item.startsWith('__vite-browser'))
            rmSync(pathResolve(`./dist/${item}`))
        })
      },
    },
  ],
  build: {
    lib: {
      entry: pathResolve('./src/index.ts'),
      name: 'FitScreenUtils',
      formats: ['cjs', 'es'],
      fileName: format => `index.${format === 'cjs' ? 'c' : 'm'}js`,
    },
    // Minify option
    target: 'es2015',
    minify: false,
  },
})
