import type { Scale } from '@fit-screen/shared'
import { FitScreenEnum, useFitScale, useFullScale, useScrollXScale, useScrollYScale } from '@fit-screen/shared'

import type { Ref } from 'vue-demi'
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue-demi'

export type MaybeRef<T> = T | Ref<T>

export interface UseFitScreenOptions {
  width: MaybeRef<number>
  height: MaybeRef<number>
  mode: MaybeRef<'fit' | 'scrollX' | 'scrollY' | 'full'>
}

export const useFitScreen = (options: UseFitScreenOptions, emit: (event: 'scaleChange', payload: Scale) => void) => {
  const entityRef = ref<HTMLElement>()
  const previewRef = ref<HTMLElement>()

  const { width, height, mode } = toRefs(options)

  // 屏幕适配
  const initFitScreenByMode = () => {
    let fn: typeof useFitScale
    const options: Parameters<typeof useFitScale>[number] = {
      width: width.value as number,
      height: height.value as number,
      el: previewRef.value!,
      beforeCalculate(scale) {
        const dom = entityRef.value!
        dom.style.width = `${width.value as number * scale.widthRatio}px`
        dom.style.height = `${height.value as number * scale.heightRatio}px`
      },
      afterCalculate(scale) {
        emit('scaleChange', scale)
      },
    }
    switch (mode.value) {
      case FitScreenEnum.FIT:
        fn = useFitScale
        delete options.beforeCalculate
        break
      case FitScreenEnum.SCROLL_X:
        fn = useScrollXScale
        break
      case FitScreenEnum.SCROLL_Y:
        fn = useScrollYScale
        break
      case FitScreenEnum.FULL:
        fn = useFullScale
        delete options.beforeCalculate
        break
      default:
        fn = useFitScale
        delete options.beforeCalculate
    }

    return fn(options)
  }

  let calcRate: Function, resize: Function, unResize: Function

  watch([width, height, mode], () => {
    unResize?.();
    ({ calcRate, resize, unResize } = initFitScreenByMode())
    calcRate()
    resize()
  })

  onMounted(() => {
    ({ calcRate, resize, unResize } = initFitScreenByMode())
    calcRate()
    resize()
  })

  onUnmounted(() => {
    unResize()
  })

  return {
    entityRef,
    previewRef,
  }
}
