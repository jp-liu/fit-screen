import type { PropType } from 'vue-demi'
import { computed, defineComponent, h, toRefs } from 'vue-demi'
import { FitScreenEnum } from '@fit-screen/shared'
import { useFitScreen } from '../hook/useFitScreen.hook'
import './fit-screen.css'

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

    const { previewRef, entityRef } = useFitScreen({ width, height, mode })

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
    const previewNode = h(
      'div',
      { ref: 'previewRef', class: 'fit-screen-scale' },
      h('div', { style: this.previewRefStyle }, this.$slots.default?.()),
    )

    const entityNode = h('div', { ref: 'entityRef', class: 'fit-screen-entity' }, previewNode)
    const resultNode = this.showEntity ? entityNode : previewNode

    return h('div', { class: `fit-screen ${this.mode}` }, resultNode)
  },
})
