import { copyFileSync } from 'fs'
import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

const rootPath = resolve(__dirname)

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  hooks: {
    'mkdist:done': function () {
      copyFileSync(resolve(rootPath, './src/style.css'), resolve(rootPath, './dist/style.css'))
    },
  },
})
