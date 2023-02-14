<p align="center">
  <a href="https://github.com/jp-liu/fit-screen"><img src="https://raw.githubusercontent.com/jp-liu/fit-screen/main/packages/public/logo-vertical.png" alt="FitScreen - Scale-based large-screen adaptive solution" width="300"></a>
  <br>
  <br>
  Scale-based large-screen adaptive solution
</p>

<p align="center">
 <a href="https://www.npmjs.com/package/@fit-screen/vue" target="__blank"><img src="https://img.shields.io/npm/v/@fit-screen/vue?color=a1b858&label=" alt="NPM version"></a>
  <a href="https://www.npmjs.com/package/@fit-screen/react" target="__blank"><img src="https://img.shields.io/npm/v/@fit-screen/react?color=50a36f&label=" alt="NPM version"></a>
  <a href="https://www.npmjs.com/package/@fit-screen/shared" target="__blank"><img src="https://img.shields.io/npm/v/@fit-screen/shared?color=1e8a7a&label=" alt="NPM version"></a>
 <br>
 <a href="https://github.com/jp-liu/fit-screen" target="__blank">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/jp-liu/fit-screen?style=social">
  </a>
</p>
<p align="center">
  <a href="https://github.com/jp-liu/fit-screen/blob/main/README.md" target="__blank">English</a>
  <a href="https://github.com/jp-liu/fit-screen/blob/main/README_CN.md" target="__blank">简体中文</a>
</p>

## 🚀 特性

- 支持 `vue2`、`vue3` 以及 `react`
- 提供公共基础方法，可以适用于任何框架，只要一点点代码
- 使用 [TypeScript](https://www.typescriptlang.org/) 编写，具有完整的类型提示
- 无需编译工具，可以通过 CDN 使用

## 🦄 用法

### Vue

```bash
npm install @fit-screen/vue
# or
yarn add @fit-screen/vue
# or
pnpm install @fit-screen/vue
```

在 `Vue2.7` 以前的版本中(不包含 2.7)，你还需要下载 [@vue/composition-api](https://www.npmjs.com/package/@vue/composition-api)

```bash
npm install @fit-screen/vue @vue/composition-api
# or
yarn add @fit-screen/vue @vue/composition-api
# or
pnpm install @fit-screen/vue @vue/composition-api
```

#### 示例：全局使用

```js
//  main.[jt]s
import { createApp } from 'vue'
// 引入样式
import '@fit-screen/vue/style.css'
import FitScreen from '@fit-screen/vue'
import App from './App.vue'

const app = createApp(App)
app.use(FitScreen)
app.mount('#app')
```

接下来在任意组件中均可使用

```vue
<template>
  <FitScreen :width="1920" :height="1080" mode="fit">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </FitScreen>
</template>
```

#### 示例：单组件内使用

```vue
<script setup>
import { ref } from 'vue'
import '@fit-screen/vue/style.css'
import FitScreen from '@fit-screen/vue'
const config = ref({
  width: 1920,
  height: 1080,
  mode: 'fit'
})
</script>

<template>
  <FitScreen :width="1920" :height="1080" mode="fit">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </FitScreen>
</template>
```

#### Vue Props

| Props      | Type                                      | Information                                                  |
| ---------- | ----------------------------------------- | ------------------------------------------------------------ |
| width      | number                                    | 设计稿宽度                                                   |
| height     | number                                    | 设计稿高度                                                   |
| mode       | 'fit' \| 'scroolX' \| 'scroolY' \| 'full' | 自适应模式                                                   |
| scaleStyle | string \| object \| array                 | 自适应 dom 的内联样式，完全采用 Vu3 官方的 style 使用方案，只是添加了前缀 |

#### Vue Interface

```ts
interface FitScreenProps {
  /**
   * The design draft width
   * @default 1920
   */
  width?: number
  /**
   * The design draft height
   * @default 1080
   */
  height?: number
  /**
   * Calculation mode
   */
  mode?: 'fit' | 'scrollX' | 'scrollY' | 'full'
  /**
   * Adaptive container style
   */
  scaleStyle?: string | object | Array<object>
}
```

### React

```bash
npm install @fit-screen/react
# or
yarn add @fit-screen/react
# or
pnpm install @fit-screen/react
```

#### 示例

```react
import { useState } from 'react'
import FitScreen from '@fit-screen/react'
import '@fit-screen/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FitScreen width={1920} height={1080} mode="fit">
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            React logo
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </FitScreen>
  )
}

export default App
```

#### React Props

| Props      | Type                                      | Information                                                  |
| ---------- | ----------------------------------------- | ------------------------------------------------------------ |
| width      | number                                    | 设计稿宽度                                                   |
| height     | number                                    | 设计稿高度                                                   |
| mode       | 'fit' \| 'scroolX' \| 'scroolY' \| 'full' | 自适应模式                                                   |
| scaleStyle | string \| object \| array                 | 自适应 dom 的内联样式，完全采用 Vu3 官方的 style 使用方案，只是添加了前缀 |

#### React Interface

```ts
export interface FitScreenProps {
  /**
   * The design draft width
   * @default 1920
   */
  width?: number
  /**
   * The design draft height
   * @default 1080
   */
  height?: number
  /**
   * Calculation mode
   */
  mode?: 'fit' | 'scrollX' | 'scrollY' | 'full'
  /**
   * The root container class name
   */
  className?: string
  /**
   * Slots
   */
  children: React.ReactNode
  /**
   * Adaptive container style
   */
  scaleStyle?: Record<string, string> | Record<string, string>[]
}
```

## 💻 扩展

当然，如果你使用的不是 `vue` `react`, 而是别的框架，你可以通过插件公共方法扩展自己的自适应组件，比如使用 `Svelte`

```js
const a = 'test'
```

### 🌰 示例

#### Vue2.6 及以下

#### Vue2.7 及 3.0 以上

#### React 示例

#### Sevlte

## License

[MIT](./LICENSE) License © 2022 [jp-liu](https://github.com/jp-liu)
