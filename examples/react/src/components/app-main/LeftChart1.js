import React from 'react'

import { CapsuleChart, Decoration2 } from '@jiaminghi/data-view-react'

import './LeftChart1.scss'

const config = {
  data: [
    {
      name: '收费系统',
      value: 167,
    },
    {
      name: '通信系统',
      value: 67,
    },
    {
      name: '监控系统',
      value: 123,
    },
    {
      name: '供配电系统',
      value: 55,
    },
    {
      name: '其他',
      value: 98,
    },
  ],
  colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  unit: '件',
}

const style = { height: '10px' }

export default function LeftChart1() {
  return (
    <div className="left-chart-1">
      <div className="lc1-header">张三收费站</div>
      <div className="lc1-details">
        设备运行总数<span>430</span>
      </div>
      <CapsuleChart className="lc1-chart" config={config} />
      <Decoration2 style={style} />
    </div>
  )
}
