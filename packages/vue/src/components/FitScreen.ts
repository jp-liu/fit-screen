import type { PropType } from 'vue-demi'
import { computed, defineComponent, toRefs } from 'vue-demi'
import { FitScreenEnum } from '@fit-screen/shared'
import { useFitScreen } from '../hook/useFitScreen.hook'
import hDemi, { slot } from '../helper/h-demi'
import styles from './FitScreen.module.scss'

export default defineComponent({
  name: 'FitScreen',
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    mode: {
      type: String as PropType<'fit' | 'scrollX' | 'scrollY' | 'full'>,
      required: true,
    },
    previewStyle: {
      type: [String, Object, Array],
      default: '',
    },
  },
  setup(props) {
    const { width, height, mode, previewStyle } = toRefs(props)

    const showEntity = computed(() => {
      return mode.value === FitScreenEnum.SCROLL_Y || mode.value === FitScreenEnum.SCROLL_X
    })

    const { previewRef, entityRef } = useFitScreen(props)

    const previewRefStyle = computed(() => {
      return [
        {
          position: 'relative' as const,
          width: width.value ? `${width.value}px` : '100%',
          height: height.value ? `${height.value}px` : '100%',
        },
        ...(Array.isArray(previewStyle.value) ? previewStyle.value : [previewStyle.value]),
      ]
    })

    return { showEntity, previewRef, entityRef, previewRefStyle }
  },
  render() {
    const previewNode = hDemi(
      'div',
      { ref: 'previewRef', class: ['fit-screen-scale', styles['fit-screen-scale']] },
      [hDemi('div', { style: this.previewRefStyle }, slot(this.$slots.default))],
    )

    const entityNode = hDemi('div', { ref: 'entityRef', class: ['fit-screen-entity', styles['fit-screen-entity']] }, [previewNode])
    const resultNode = this.showEntity ? entityNode : previewNode

    return hDemi('div', { class: ['fit-screen', styles['fit-screen'], styles[this.mode]] }, [resultNode])
    // return hDemi('div', {}, [hDemi('div', {}, 'test')])
  },
})
