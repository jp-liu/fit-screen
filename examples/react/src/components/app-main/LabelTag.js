/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import './LabelTag.scss'

const defaultConfig = {
  /**
   * @description Label data
   * @type {Array<String>}
   * @default data = []
   * @example data = ['label1', 'label2']
   */
  data: [],
  /**
   * @description Label color (Hex|Rgb|Rgba|color keywords)
   * @type {Array<String>}
   * @default colors = ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
   * @example colors = ['#666', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
}

export default function LabelTag({ config = {} }) {
  const mergedConfig = useMemo(() => deepMerge(deepClone(defaultConfig, true), config || {}), [
    config,
  ])

  return (
    <div className="label-tag">
      {!!mergedConfig
        && mergedConfig.data.map((label, i) => (
          <div className="label-item" key={label}>
            {label}
            <div
              style={{ backgroundColor: `${mergedConfig.colors[i % mergedConfig.colors.length]}` }}
            />
          </div>
        ))}
    </div>
  )
}
