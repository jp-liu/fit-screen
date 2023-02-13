import * as React from 'react'
import { FitScreenEnum } from '@fit-screen/shared'
import { useFitScreen } from '../hook/useFitScreen.hook'
import styles from './FitScreen.module.scss'

export interface FitScreenProps {
  width: number
  height: number
  mode: 'fit' | 'scrollX' | 'scrollY' | 'full'
  className?: string
  children: React.ReactNode
  previewStyle?: Record<string, string> | Record<string, string>[]
}

const InnerFitScreen = React.forwardRef((props: FitScreenProps, ref: React.Ref<HTMLDivElement>) => {
  const { width, height, mode, previewStyle, className, children } = props

  const showEntity = mode === FitScreenEnum.SCROLL_Y || mode === FitScreenEnum.SCROLL_X

  const { previewRef, entityRef } = useFitScreen(props)

  const previewRefStyle = [
    {
      position: 'relative' as const,
      width: width ? `${width}px` : '100%',
      height: height ? `${height}px` : '100%',
    },
    ...(Array.isArray(previewStyle) ? previewStyle : [previewStyle]),

  ].reduce((style, refStyle) => ({ ...style, ...refStyle }), {})

  const scaleDom = (
    <div ref={previewRef} className={`fit-screen-scale ${styles['fit-screen-scale']}`}>
      {/* 展示层 */}
      <div style={previewRefStyle}>
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
