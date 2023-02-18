<script lang="ts">
  import { FitScreenEnum, useFitScreen,  } from '@fit-screen/shared'
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

<div class={`fit-screen my-screen_prefix ${mode}`}>
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
