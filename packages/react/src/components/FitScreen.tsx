import * as React from 'react'
import { FitScreenEnum } from '@fit-screen/shared'
import { useFitScreen } from '../hook/useFitScreen.hook'
import styles from './FitScreen.module.scss'

export interface FitScreenProps {
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
   * The root container class name
   */
  className?: string
  /**
   * Slots
   */
  children: React.ReactNode
  /**
   * Adaptive container class
   */
  scaleClass?: string
  /**
   * Adaptive container style
   */
  scaleStyle?: Record<string, string> | Record<string, string>[]
}

const InnerFitScreen = React.forwardRef((props: FitScreenProps, ref: React.Ref<HTMLDivElement>) => {
  const { width = 1920, height = 1080, mode = 'fit', scaleClass, scaleStyle, className, children } = props

  const showEntity = mode === FitScreenEnum.SCROLL_Y || mode === FitScreenEnum.SCROLL_X

  const previewRefStyle = [
    {
      position: 'relative' as const,
      width: width ? `${width}px` : '100%',
      height: height ? `${height}px` : '100%',
    },
    ...(Array.isArray(scaleStyle) ? scaleStyle : [scaleStyle]),
  ].reduce((style, refStyle) => ({ ...style, ...refStyle }), {})

  const { previewRef, entityRef } = useFitScreen({ width, height, mode })
  const scaleDom = (
    <div ref={previewRef} className={`fit-screen-scale ${styles['fit-screen-scale']}`}>
      {/* 展示层 */}
      <div className={scaleClass} style={previewRefStyle}>
        {/* 渲染层 */}
        {children}
      </div>
    </div>
  )

  const entityDom = (
    <div ref={entityRef} className={`fit-screen-entity ${styles['fit-screen-entity']}`}>
      {scaleDom}
    </div>
  )

  return (
    <div ref={ref} className={`fit-screen ${styles['fit-screen']} ${styles[mode]} ${className || ''} `}>
      {showEntity ? entityDom : scaleDom}
    </div>
  )
})

InnerFitScreen.displayName = 'FitScreen'

export const FitScreen = React.memo(InnerFitScreen)

export default FitScreen
