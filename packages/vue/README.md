# @fit-screen/vue

Scale-based large-screen adaptive solution for Vue

## 🦄 Useage

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
### Global component

```js
// In main.[jt]s
import { createApp } from 'vue'
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

#### SFC

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

#### Props

| Props      | Type                                      | Information                                                                                                     |
| ---------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| width      | number                                    | The design draft width                                                                                          |
| height     | number                                    | The design draft height                                                                                         |
| mode       | 'fit' \| 'scroolX' \| 'scroolY' \| 'full' | Calculation mode                                                                                                |
| scaleClass | string \| object \| array                 | Adaptive container class, The official Vue class usage scheme is fully adopted, with the addition of the prefix |
| scaleStyle | string \| object \| array                 | Adaptive container style, The official Vue style usage scheme is fully adopted, with the addition of the prefix |

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
   * Function execution mode for calculating scaling ratio
   * @default 'throttle'
   */
  executeMode: 'throttle' | 'debounce' | 'none'
  /**
   * Represents the execution rate for debounce and throttle (unit: ms).
   * @default 200
   */
  waitTime: number
  /**
   * Calculation mode
   * @tips
   * 'fit': Adaptive
   * 'scrollX': When the actual width exceeds the width of the design, the x-axis appears to scroll and the y-axis adapts
   * 'scrollY': Contrary to the above
   * 'full': Stretch the page to fill the screen
   */
  mode?: 'fit' | 'scrollX' | 'scrollY' | 'full'
  /**
   * Adaptive container class
   */
  scaleClass?: string | object | Array<string | object>
  /**
   * Adaptive container style
   */
  scaleStyle?: string | object | Array<object>
}
```

#### Events

| event name  | description                                   | params                                             |
| ----------- | --------------------------------------------- | -------------------------------------------------- |
| scaleChange | Callback for change in page calculation ratio | scale: { widthRatio: number, heightRatio: number } |

### 🌰 Example

#### **[Vue2.6 or below](https://vercel.com/jp-liu/fit-screen-example-vue2)**

#### **[Vue2.7 or 3.0+](https://vercel.com/jp-liu/fit-screen-example-vue3)**

## License

[MIT](./LICENSE) License © 2022 [jp-liu](https://github.com/jp-liu)
