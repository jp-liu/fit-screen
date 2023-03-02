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

| Props      | Type                                                | Information                                                               |
| ---------- | --------------------------------------------------- | ------------------------------------------------------------------------- |
| width      | number                                              | 设计稿宽度                                                                |
| height     | number                                              | 设计稿高度                                                                |
| mode       | 'fit' \| 'scroolX' \| 'scroolY' \| 'full'           | 自适应模式                                                                |
| scaleClass | string \| array                           \| object | 自适应 dom 的类名，完全采用 vue 官方方案，只是添加前缀对外暴露            |
| scaleStyle | string \| object \| array                           | 自适应 dom 的内联样式，完全采用 Vue 官方的 style 使用方案，只是添加了前缀 |

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
   * Adaptive container class
   */
  scaleClass?: string | object | Array<object | string>
  /**
   * Adaptive container style
   */
  scaleStyle?: string | object | Array<object>
}
```

#### Vue Events

| 事件名称    | 描述                       | 参数                                               |
| ----------- | -------------------------- | -------------------------------------------------- |
| scaleChange | 页面计算比例发生变化的回调 | scale: { widthRatio: number, heightRatio: number } |

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

| Props      | Type                                      | Information                                                            |
| ---------- | ----------------------------------------- | ---------------------------------------------------------------------- |
| width      | number                                    | 设计稿宽度                                                             |
| height     | number                                    | 设计稿高度                                                             |
| mode       | 'fit' \| 'scroolX' \| 'scroolY' \| 'full' | 自适应模式                                                             |
| scaleClass | string                                    | 自适应 dom 的类名                                                      |
| scaleStyle | string \| object \| array                 | 自适应 dom 的内联样式, 添加了数组对象的使用方式,帮你把多个对象样式展开 |

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
   * Adaptive container class
   */
  scaleClass?: string
  /**
   * Adaptive container style
   */
  scaleStyle?: Record<string, string> | Record<string, string>[]
  /**
   * Callback for change in page calculation ratio
   */
  onScaleChange?: (scale: { widthRatio: number; heightRatio: number }) => void
}
```

## 💻 扩展

当然，如果你使用的不是 `vue` `react`, 而是别的框架，你可以通过插件公共方法扩展自己的自适应组件，比如使用 `Svelte`,
你可以像这样开发自己的组件

```tsx
<script lang="ts">
  import { FitScreenEnum, useFitScreen } from '@fit-screen/shared'
  import { onMount } from 'svelte'

  type FitMode = 'fit' | 'scrollX' | 'scrollY' | 'full'

  export let width = 1920
  export let height = 1080
  export let mode: FitMode = 'fit'

  let scaleRef: HTMLDivElement
  let entityRef: HTMLDivElement
  $: showEntity = mode === FitScreenEnum.SCROLL_X || mode === FitScreenEnum.SCROLL_Y

  $: initFitScreenByMode = () => {
    const options: Parameters<typeof useFitScreen>[number] = {
      width,
      height,
      mode: mode as FitScreenEnum,
      el: scaleRef,
      beforeCalculate(scale) {
        // If you need X,Y axis scrolling, you need to calculate the entity width and height and add scrolling properties
        const dom = entityRef!
        dom.style.width = `${width * scale.widthRatio}px`
        dom.style.height = `${height * scale.heightRatio}px`
      },
    }
    if (mode === FitScreenEnum.FIT || mode === FitScreenEnum.FULL) {
      delete options.beforeCalculate
    }

    return useFitScreen(options)
  }

  let isMounted = false
  onMount(() => {
    isMounted = true
  })

  let calcRate, resize, unResize
  $: if (isMounted) {
    // First rendering, and no events registered
    // When an update is needed, the event is unregistered and re-registered
    if (unResize) unResize()
    ;({ calcRate, resize, unResize } = initFitScreenByMode())

    calcRate()
    resize()
  }
</script>

<div class={`fit-screen ${mode}`}>
  {#if showEntity}
    <!-- Entity element, since adaptive scaling is done, require entity dom control in order to calculate scrollbars -->
    <div bind:this={entityRef} class="fit-screen-entity">
      <!-- Adaptive element -->
      <div bind:this={scaleRef} class="fit-screen-scale">
        <!-- Display element -->
        <div style={`width: ${width}px; height: ${height}px`}>
          <!-- Render element -->
          <slot />
        </div>
      </div>
    </div>
  {:else}
    <!-- Adaptive element -->
    <div bind:this={scaleRef} class="fit-screen-scale">
      <!-- Display element -->
      <div style={`width: ${width}px; height: ${height}px`}>
        <!-- Render element -->
        <slot />
      </div>
    </div>
  {/if}
</div>

<style>
  @import '@fit-screen/shared/style.css';
</style>
```

使用的一些疑问和示例，可以去对应文档查看

**[@fit-screen/shared](https://github.com/jp-liu/fit-screen/blob/main/packages/shared/README.md)**

### 🌰 示例

#### Vue2.6 及以下

#### Vue2.7 及 3.0 以上

#### React 示例

#### Sevlte

## License

[MIT](./LICENSE) License © 2022 [jp-liu](https://github.com/jp-liu)
