export enum FitScreenEnum {
  FIT = 'fit',
  SCROLL_Y = 'scrollY',
  SCROLL_X = 'scrollX',
  FULL = 'full',
}

export interface FitScreenOptions {
  /**
   * Adaptive container
   */
  el: HTMLElement | null
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
   * Represents the execution mode for calculating scaling ratio.
   * - throttle: Uses a throttling mechanism to limit the execution frequency.
   * - debounce: Uses a debouncing mechanism to delay execution until a certain period of inactivity.
   * - none: Executes the function without any throttling or debouncing.
   * @default 'throttle'
   */
  executeMode?: 'throttle' | 'debounce' | 'none'
  /**
   * Represents the execution rate for debounce and throttle (unit: ms).
   * @default 200
   */
  waitTime?: number
  /**
   * Triggered before calculating correction, which can be calculated by return false to cancel
   * Provide the current wide high percentage
   */
  beforeCalculate?: (scale: Scale) => boolean | void
  /**
   * After the calculation of correction
   * Provide the current wide high percentage
   */
  afterCalculate?: (scale: Scale) => void
}

export interface Scale {
  /**
   * Width ratio
   */
  widthRatio: number
  /**
   * Height ratio
   */
  heightRatio: number
}
