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

## 🚀 Features

- 🕶 Seamless migration: Works for Vue 2, Vue3 and React
- 🌟 Provide public base methods that can be applied to any framework with a little code
- 🦾 Type Strong: Written in [TypeScript](https://www.typescriptlang.org/), with [TS Docs](https://github.com/microsoft/tsdoc)
- 🌎 No bundler required: Usable via CDN

## 🦄 Useage

### Vue

```bash
npm install @fit-screen/vue
# or
yarn add @fit-screen/vue
# or
pnpm install @fit-screen/vue
```

For Vue 2.6 or below, [@vue/composition-api](https://www.npmjs.com/package/@vue/composition-api) is required separately.

```bash
npm install @fit-screen/vue @vue/composition-api
# or
yarn add @fit-screen/vue @vue/composition-api
# or
pnpm install @fit-screen/vue @vue/composition-api
```

#### Example: global component

```js
//  main.[jt]s
import { createApp } from 'vue'
// import style
import '@fit-screen/vue/style.css'
import FitScreen from '@fit-screen/vue'
import App from './App.vue'

const app = createApp(App)
app.use(FitScreen)
app.mount('#app')
```

Use in any component

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

#### Example：SFC

```vue
<script setup>
import '@fit-screen/vue/style.css'
import FitScreen from '@fit-screen/vue'
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

| Props      | Type                                      | Information                                                                                                     |
| ---------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| width      | number                                    | The design draft width                                                                                          |
| height     | number                                    | The design draft height                                                                                         |
| mode       | 'fit' \| 'scroolX' \| 'scroolY' \| 'full' | Calculation mode                                                                                                |
| scaleStyle | string \| object \| array                 | Adaptive container style, The official Vu3 style usage scheme is fully adopted, with the addition of the prefix |

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

#### Example for React

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

| Props      | Type                                               | Information                                                            |
| ---------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| width      | number                                             | The design draft width                                                 |
| height     | number                                             | The design draft height                                                |
| mode       | 'fit' \| 'scroolX' \| 'scroolY' \| 'full'          | Calculation mode                                                       |
| scaleStyle | object                                    \| array | Adaptive container style, Jsx style objects or arrays of style objects |

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

## 💻 Extends

Of course, if you're not using `vue` or `react`, but another framework, you can extend your own adaptive components with a plugin public method, such as using `Svelte`

```js
const a = 'test'
```

### 🌰 Example

#### Vue2.6 or below

#### Vue2.7 or 3.0+

#### React example

#### Sevlte example

## License

[MIT](./LICENSE) License © 2022 [jp-liu](https://github.com/jp-liu)
