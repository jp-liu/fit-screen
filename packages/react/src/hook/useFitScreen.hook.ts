import * as React from 'react'
import { FitScreenEnum, useFitScale, useFullScale, useScrollXScale, useScrollYScale } from '@fit-screen/shared'

export const useFitScreen = (options: { width: number; height: number; mode: 'fit' | 'scrollX' | 'scrollY' | 'full' }) => {
  const entityRef = React.useRef<HTMLDivElement>(null)
  const previewRef = React.useRef<HTMLDivElement>(null)

  const { width, height, mode } = options

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
