# fitscreen.js

A fundamental approach to scale-based large-screen adaptive solutions

Everything is based on the design draft's px size, and the adaptation is done by scale, everything is so simple

## 🦄 Useage

It is recommended that you use it without using the front-end framework. If you use the framework, please check [FitScreen](https://github.com/jp-liu/fit-screen/blob/main/README.md)

```html
<html lang="en">
<head>xxx</head>
<body>
  <!-- the content that will be displayed on the screen -->
  <div class="screen">
    <div class="test-left">xxx</div>
    <div class="test-center">xxx</div>
    <div class="test-right">xxx</div>
  </div>

  <!-- <script src="https://unpkg.com/fitscreen.js/dist/fitscreen.min.js"></script> -->
  <script src="https://unpkg.com/fitscreen.js/dist/fitscreen.js"></script>
  <script>
    const { calcRate, resize, unResize } = FitScreen({
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

Of course, you can also use package managers such as npm for engineering development

```bash
npm install fitscreen.js
# or
yarn add fitscreen.js
# or
pnpm install fitscreen.js
```

## Options

```ts
declare function FitScreen(options: Options): FitScreenResult | undefined

interface FitscreenResult {
  /**
   * The function of calculating the ratio, you can decide the timing of execution by yourself
   */
  calcRate: () => void
  /**
   * Start listening to the resize event
   */
  resize: () => void
  /**
   * End listening to the resize event
   */
  unResize: () => void
}

interface Options {
  /**
   * Template element, this element is recommended to be set to the size, width and height of the design draft
   */
  el: HTMLElement
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
   * Represents the execution mode for calculating scaling ratio.
   * - throttle: Uses a throttling mechanism to limit the execution frequency.
   * - debounce: Uses a debouncing mechanism to delay execution until a certain period of inactivity.
   * - none: Executes the function without any throttling or debouncing.
   * @default 'debounce'
   */
  executeMode?: 'throttle' | 'debounce' | 'none'
  /**
   * Represents the execution rate for debounce and throttle (unit: ms).
   * @default 300
   */
  waitTime?: number
  /**
   * Triggered before calculating correction, which can be calculated by return false to cancel
   * Provide the current wide high percentage
   */
  beforeCalculate?: (scale: Scale) => boolean | void
  /**
   * After the calculation of correction
   * Provide the current wide high percentage
   */
  afterCalculate?: (scale: Scale) => void
}
```

## 🌰 Example

[CodePen](https://codepen.io/ikyjnfrz-the-solid/pen/abQJXoW)
[CodeSandbox](https://codesandbox.io/s/fitscreen-js-h69lw3)
[Stackblitz](https://stackblitz.com/edit/js-beur94?file=index.html)
[Stackblitz](https://js-beur94.stackblitz.io)

## 🚨 Note

I don't know if it can solve your problem. If not, you can discuss it in `issues`. If you have a problem and solve it, you are welcome to raise a `PR` to help others.
If this project helps you, please give me a star thank you.😎

[Click](https://github.com/jp-liu/fit-screen/blob/main/README.md#L84)

## License

[MIT](./LICENSE) License © 2022 [jp-liu](https://github.com/jp-liu)
