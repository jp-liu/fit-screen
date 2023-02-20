import React from 'react'

import { CapsuleChart } from '@jiaminghi/data-view-react'

import './RightChart1.scss'

const config = {
  data: [
    {
      name: '收费系统',
      value: 25,
    },
    {
      name: '通信系统',
      value: 66,
    },
    {
      name: '监控系统',
      value: 123,
    },
    {
      name: '供配电系统',
      value: 72,
    },
    {
      name: '其他',
      value: 99,
    },
  ],
  unit: '件',
}

export default function RightChart1() {
  return (
    <div className="right-chart-1">
      <div className="rc1-header">赵六收费站</div>

      <div className="rc1-chart-container">
        <div className="left">
          <div className="number">262</div>
          <div>设备运行总数</div>
        </div>

        <CapsuleChart className="right" config={config} />
      </div>
    </div>
  )
}
