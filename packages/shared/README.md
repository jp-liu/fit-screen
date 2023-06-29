# @fit-screen/shared

A fundamental approach to scale-based large-screen adaptive solutions

## 🌟 Tool

This toolkit provides methods related to assisted computing, as well as a style package through which you can create your own screen adaptive components in any framework.

## 🦄 Useage

First we download the toolkit

```bash
npm install @fit-screen/shared
# or
yarn add @fit-screen/shared
# or
pnpm install @fit-screen/shared
```

Use this toolkit to develop your own adaptive components.

The following is an example of a FitScreen component developed by Svelte, the component props can be extended by yourself

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

## 🚨 Note

### Question

Using css files in this way may result in global contamination that.

### Solution

1. Refer to the plugin css and write your own private class.
2. Use the custom class private prefix helper functions provided by the toolkit, and note that these helper functions need to be available in the node environment.

   After you call the classNamePrefix function, the class prefixes you introduce will all be custom, like this.

   ```ts
   // vite.config.ts
   import { defineConfig } from 'vite'
   import { svelte } from '@sveltejs/vite-plugin-svelte'
   import { classNamePrefix } from '@fit-screen/shared'

   classNamePrefix('my-screen_prefix')

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [svelte()],
   })
   ```

   You can call this method from the entry point of your project or from the build configuration.
   Then

   ```react
   import '@fit-screen/shared/style.css';
   function App() {
     return (
      { /** use you custom class prefix */ }
      <div class={`my-screen_prefix ${mode}`}>
          <div class="my-screen_prefix-entity">
            <div class="my-screen_prefix-scale">
              <div style={`width: ${width}px; height: ${height}px`}>
                <slot />
              </div>
            </div>
            </div>
          </div>
      </div>
     )
   }
   ```

## 🌰 Example

[Svelte](https://codesandbox.io/s/fit-screen-shared-svelte-yx5syh)
[Stackblitz](https://stackblitz.com/edit/vitejs-vite-ucymtl?file=README.md)

You can check out this svelte base project created by vite

```bash
git clone git@github.com:jp-liu/fit-screen.git # or
git clone https://github.com/jp-liu/fit-screen.git

# Then
cd fit-screen
pnpm install
pnpm dev:svelte
```

## License

[MIT](./LICENSE) License © 2022 [jp-liu](https://github.com/jp-liu)
