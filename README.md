<p align="center">
  <a href="https://github.com/jp-liu/fit-screen"><img src="https://raw.githubusercontent.com/jp-liu/fit-screen/main/packages/public/logo-vertical.png" alt="FitScreen - Scale-based large-screen adaptive solution" width="300"></a>
  <br>
  <br>
  Scale-based large-screen adaptive solution
  Everything is based on the design draft's px size, and the adaptation is done by scale, everything is so simple
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
  <a href="https://github.com/jp-liu/fit-screen/blob/main/README.zh_CN.md" target="__blank">简体中文</a>
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

If you're not familiar with using Vue components, you can see a more detailed example here.

[Click to go](https://github.com/jp-liu/fit-screen/blob/main/packages/vue/README.md#-useage)

### React

```bash
npm install @fit-screen/react
# or
yarn add @fit-screen/react
# or
pnpm install @fit-screen/react
```

If you're not familiar with using React components, you can see a more detailed example here.

[Click to go](https://github.com/jp-liu/fit-screen/blob/main/packages/react/README.md#-useage)

### No Framework

```html
<html lang="en">
<head>xxx</head>
<body>
  <!-- In the contents of the screen will be presented -->
  <div class="screen">
    <div class="test-left">xxx</div>
    <div class="test-center">xxx</div>
    <div class="test-right">xxx</div>
  </div>

  <!-- <script src="https://unpkg.com/fitscreen.js/dist/fitscreen.min.js"></script> -->
  <script src="https://unpkg.com/fitscreen.js/dist/fitscreen.js"></script>
  <script>
    FitScreen({
      el: document.querySelector('.test'),
      width:1920,
      height:1080,
      mode:'fit',
      executeMode:'debounce',
      waitTime:300,
      beforeCalculate(scale) {},
      afterCalculate(scale) {},
    })
  </script>
</body>
</html>
```

[Parameters Detail](https://github.com/jp-liu/fit-screen/blob/main/packages/fitscreen/README.md)

## 🚨 Note

You may encounter the following problems:

1. When components such as `modal` and `message` in the `UI` component library are used in the project, these `modal` and `message` will directly create a new `dom`, which will not be affected by `scale`. Causes its size not to change according to `scale`.

   solution: You can listen to the `scaleChange` event sent by the component, or get the current scale in the `afterafterCalculate` callback function, and then dynamically set `css`

   ```js
   // example for ElementUI MessageBox
   const ins = this.$message('test')
   // tanslateX is needed for elementUI positioning and centering, and needs to be reserved to avoid overwriting the transform attribute. Development depends on the actual situation
   ins.$el.style.transform: = scale( 动态比例 ) translateX(-50%);
   // // It needs to be set as the zoom-in/zoom-out point, because the positioning is based on the left border left of the element, so here is left, you can change it according to the actual situation
   ins.$el.style.transformOrigin = 'left center';

   // or
   const msg = document.querySelectorAll('.el-message')
   const els = Array.from(msg)
   els.forEach((el) => {
     el.style.transform: = scale(0.8) translateX(-50%);
     el.style.transformOrigin = left center;
   })
   ```

2. When encountering some map-like (map) large screens, because the canvas canvas is involved, the global scale method may cause map offsets, map interaction confusion, etc..

   Reason: Because the map is drawn on canvas, after the scale is set, the orientation corresponding to the click and other events is different from when it was just drawn, just like the retina screen of the Apple mobile phone. Under the 2x and 3x screens, a point corresponds to 2 and 3 pixels, and when drawing is 1 point to 1 point, so the solution is also simple.。

   Solution: Redraw the map by listening to the `scaleChange` event emitted by the component, or in the `afterafterCalculate` callback function.

3. Chart event hotspot offset, in most cases, will not be involved, if you encounter it, please try the following solutions

   1. Not sure if it works, because I haven't found this problem yet, answers from netizens in the comment area

      ```js
      // There is a solution to echarts hot zone offset, add this style to the div that renders echarts
      const style = `
        width:${(1 / scale) * 100}%;
        height: Design element height;
        zoom:${1 / scale};
        transform:scale(${scale});
        transform-origin:0% 0%`
      ```

> I don't know if it can solve your problem. If not, you can discuss it in `issues`. If you have a problem and solve it, you are welcome to raise a `PR` to help others.
> If this project helps you, please give me a star thank you.😎

## 💻 Extends

Of course, if you're not using `vue` or `react`, but another framework, you can extend your own adaptive components with a plugin public method, such as using `Svelte`

[You can click to see exactly how to use](https://github.com/jp-liu/fit-screen/blob/main/packages/shared/README.md#-useage)

### 🌰 Example

#### **[Vue2.6 or below](https://vercel.com/jp-liu/fit-screen-example-vue2)**

#### **[Vue2.7 or 3.0+](https://vercel.com/jp-liu/fit-screen-example-vue3)**

#### **[React](https://vercel.com/jp-liu/fit-screen-example-react)**

#### Svelte example

[Svelte](https://codesandbox.io/s/fit-screen-shared-svelte-yx5syh)
[Stackblitz](https://stackblitz.com/edit/vitejs-vite-ucymtl?file=README.md)

## License

[MIT](./LICENSE) License © 2022 [jp-liu](https://github.com/jp-liu)
