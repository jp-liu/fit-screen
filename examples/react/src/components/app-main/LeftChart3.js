import React from 'react'

import { CapsuleChart } from '@jiaminghi/data-view-react'

import './LeftChart3.scss'

const config = {
  data: [
    {
      name: '收费系统',
      value: 78,
    },
    {
      name: '通信系统',
      value: 54,
    },
    {
      name: '监控系统',
      value: 123,
    },
    {
      name: '供配电系统',
      value: 167,
    },
    {
      name: '其他',
      value: 77,
    },
  ],
  colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  unit: '件',
}

export default function LeftChart3() {
  return (
    <div className="left-chart-3">
      <div className="lc3-header">王五收费站</div>
      <div className="lc3-details">
        设备运行总数<span>245</span>
      </div>
      <CapsuleChart className="lc3-chart" config={config} />
    </div>
  )
}
