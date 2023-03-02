import * as React from 'react'
import type { Scale } from '@fit-screen/shared'
import { FitScreenEnum, useFitScale, useFullScale, useScrollXScale, useScrollYScale } from '@fit-screen/shared'

interface UseFitScreen {
  width: number
  height: number
  mode: 'fit' | 'scrollX' | 'scrollY' | 'full'
  onScaleChange?: (scale: Scale) => void
}

export const useFitScreen = (options: UseFitScreen) => {
  const entityRef = React.useRef<HTMLDivElement>(null)
  const previewRef = React.useRef<HTMLDivElement>(null)

  const { width, height, mode, onScaleChange } = options

  // 屏幕适配
  const initFitScreenByMode = () => {
    let fn: typeof useFitScale
    const options: Parameters<typeof useFitScale>[number] = {
      width,
      height,
      el: previewRef.current!,
      beforeCalculate(scale) {
        const dom = entityRef.current!
        dom.style.width = `${width * scale.widthRatio}px`
        dom.style.height = `${height * scale.heightRatio}px`
      },
      afterCalculate(scale) {
        onScaleChange && onScaleChange(scale)
      },
    }
    switch (mode) {
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

  React.useEffect(() => {
    const { calcRate, resize, unResize } = initFitScreenByMode()
    calcRate()
    resize()

    return () => unResize()
  }, [width, height, mode])

  return {
    entityRef,
    previewRef,
  }
}
