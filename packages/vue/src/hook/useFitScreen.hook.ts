import { FitScreenEnum, useFitScale, useFullScale, useScrollXScale, useScrollYScale } from '@fit-screen/shared'

import type { Ref } from 'vue-demi'
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue-demi'

type MaybeRef<T> = T | Ref<T>

export const useFitScreen = (options: { width: MaybeRef<number>; height: MaybeRef<number>; mode: MaybeRef<'fit' | 'scrollX' | 'scrollY' | 'full'> }) => {
  const entityRef = ref<HTMLElement>()
  const previewRef = ref<HTMLElement>()

  const { width, height, mode } = toRefs(options)

  // 屏幕适配
  const initFitScreenByMode = () => {
    let fn: typeof useFitScale
    switch (mode.value) {
      case FitScreenEnum.FIT:
        fn = useFitScale
        break
      case FitScreenEnum.SCROLL_X:
        fn = useScrollXScale
        break
      case FitScreenEnum.SCROLL_Y:
        fn = useScrollYScale
        break
      case FitScreenEnum.FULL:
        fn = useFullScale
        break
      default:
        fn = useFitScale
    }

    return fn({
      width: width.value as number,
      height: height.value as number,
      el: previewRef.value!,
    })
  }

  let calcRate: Function, resize: Function, unResize: Function

  watch([width, height, mode], () => {
    unResize();
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