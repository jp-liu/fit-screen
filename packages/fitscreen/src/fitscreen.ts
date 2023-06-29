import type { FitScreenOptions } from '@fit-screen/shared'
import { useFitScreen } from '@fit-screen/shared'

/**
 * Options for the FitScreen function.
 */
type Options = FitScreenOptions & { mode: 'fit' | 'scrollX' | 'scrollY' | 'full' }

export function FitScreen(options: Options) {
  const {
    el = null,
    width = 1920,
    height = 1080,
    mode = 'fit',
    executeMode = 'debounce',
    waitTime = 300,
    beforeCalculate,
    afterCalculate,
  } = options

  if (!el) {
    console.warn('FitScreen: Please provide an element as the display container.')
    return
  }

  const parentEl = el.parentElement
  const { fitScreenDiv, previewDiv, entityDiv } = generateElement(options)

  const { calcRate, resize, unResize } = useFitScreen({
    el: previewDiv,
    mode: mode as any,
    width,
    height,
    executeMode,
    waitTime,
    beforeCalculate(scale) {
      if (beforeCalculate) {
        const flag = beforeCalculate(scale)
        if (flag === false)
          return false
      }
      return true
    },
    afterCalculate(scale) {
      const dom = entityDiv
      dom.style.width = `${width * scale.widthRatio}px`
      dom.style.height = `${height * scale.heightRatio}px`

      afterCalculate && afterCalculate(scale)
    },
  })

  // Initialize screen ratio and start listening to resize events
  calcRate()
  resize()

  parentEl?.insertBefore(fitScreenDiv, el)
  el.remove()

  window.addEventListener('unload', unResize)

  return {
    calcRate,
    resize,
    unResize,
  }
}

function generateElement(options: Options) {
  const {
    el,
    width = 1920,
    height = 1080,
    mode = 'fit',
  } = options

  el!.style.width = '100%'
  el!.style.height = '100%'

  const fitScreenDiv = document.createElement('div')
  fitScreenDiv.className = `fit-screen ${mode}`

  const positionDiv = document.createElement('div')
  positionDiv.style.position = 'relative'
  positionDiv.style.width = `${width}px`
  positionDiv.style.height = `${height}px`
  positionDiv.append(el!.cloneNode(true))

  const previewDiv = document.createElement('div')
  previewDiv.className = 'fit-screen-scale'
  previewDiv.append(positionDiv)

  const entityDiv = document.createElement('div')
  entityDiv.className = 'fit-screen-entity'
  entityDiv.append(previewDiv)

  if (mode === 'scrollX' || mode === 'scrollY')
    fitScreenDiv.append(entityDiv)

  fitScreenDiv.append(previewDiv)

  return { fitScreenDiv, previewDiv, entityDiv }
}

if (window)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.FitScreen = FitScreen
