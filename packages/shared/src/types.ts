export enum FitScreenEnum {
  FIT = 'fit',
  SCROLL_Y = 'scrollY',
  SCROLL_X = 'scrollX',
  FULL = 'full',
}

export interface FitScreenOptions {
  /**
   * The design draft width
   * @default 1920
   */
  width: number
  /**
   * The design draft height
   * @default 1080
   */
  height: number
  /**
   * Adaptive container
   */
  el: HTMLElement | null
  /**
   * Triggered before calculating correction, which can be calculated by return false to cancel
   * Provide the current wide high percentage
   */
  beforeCalculate?: (scale: Scale) => boolean | undefined
  /**
   * After the calculation of correction
   * Provide the current wide high percentage
   */
  afterCalculate?: (scale: Scale) => void
}

interface Scale {
  /**
   * Width ratio
   */
  widthRatio: number
  /**
   * Height ratio
   */
  heightRatio: number
}
