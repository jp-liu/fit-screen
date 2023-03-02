import type { PropType } from 'vue-demi'
import type { Scale } from '@fit-screen/shared'
import { computed, defineComponent, h, toRefs } from 'vue-demi'
import { FitScreenEnum } from '@fit-screen/shared'
import { useFitScreen } from '../hook/useFitScreen.hook'
import { realSlot } from '../helper/slot'
import styles from './FitScreen.module.scss'

export default defineComponent({
  name: 'FitScreen',
  props: {
    /**
     * The design draft width
     * @default 1920
     */
    width: {
      type: Number,
      default: 1920,
    },
    /**
     * The design draft height
     * @default 1080
     */
    height: {
      type: Number,
      default: 1080,
    },
    /**
     * Calculation mode
     */
    mode: {
      type: String as PropType<'fit' | 'scrollX' | 'scrollY' | 'full'>,
      default: 'fit',
    },
    /**
     * Adaptive container class
     */
    scaleClass: {
      type: [String, Object, Array],
      default: () => [],
    },
    /**
     * Adaptive container style
     */
    scaleStyle: {
      type: [String, Object, Array],
      default: () => [],
    },
  },
  emits: {
    scaleChange(payload: Scale) {
      const isNumber = (val: any) => typeof val === 'number'
      return isNumber(payload.widthRatio) && isNumber(payload.heightRatio)
    },
  },
  setup(props, { emit }) {
    const { width, height, mode, scaleStyle } = toRefs(props)

    const showEntity = computed(() => {
      return mode.value === FitScreenEnum.SCROLL_Y || mode.value === FitScreenEnum.SCROLL_X
    })

    const { previewRef, entityRef } = useFitScreen(props, emit)

    const previewRefStyle = computed(() => {
      return [
        {
          position: 'relative' as const,
          width: width.value ? `${width.value}px` : '100%',
          height: height.value ? `${height.value}px` : '100%',
        },
        ...(Array.isArray(scaleStyle.value) ? scaleStyle.value : [scaleStyle.value]),
      ]
    })

    return { showEntity, previewRef, entityRef, previewRefStyle }
  },
  render() {
    const previewNode = h(
      'div',
      { ref: 'previewRef', class: ['fit-screen-scale', styles['fit-screen-scale']] },
      [h('div', { class: this.scaleClass, style: this.previewRefStyle }, realSlot(this.$slots.default))],
    )

    const entityNode = h('div', { ref: 'entityRef', class: ['fit-screen-entity', styles['fit-screen-entity']] }, [previewNode])
    const resultNode = this.showEntity ? entityNode : previewNode

    return h('div', { class: ['fit-screen', styles['fit-screen'], styles[this.mode]] }, [resultNode])
  },
})
