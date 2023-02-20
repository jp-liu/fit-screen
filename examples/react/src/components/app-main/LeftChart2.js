import React from 'react'

import { Charts, Decoration2 } from '@jiaminghi/data-view-react'

import './LeftChart2.scss'

const option = {
  series: [
    {
      type: 'pie',
      data: [
        { name: '收费系统', value: 93 },
        { name: '通信系统', value: 32 },
        { name: '监控系统', value: 65 },
        { name: '供配电系统', value: 44 },
        { name: '其他', value: 52 },
      ],
      radius: ['45%', '65%'],
      insideLabel: {
        show: false,
      },
      outsideLabel: {
        labelLineEndLength: 10,
        formatter: '{percent}%\n{name}',
        style: {
          fontSize: 14,
          fill: '#fff',
        },
      },
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
}

const style = { height: '10px' }

export default function LeftChart2() {
  return (
    <div className="left-chart-2">
      <div className="lc2-header">李四收费站</div>
      <div className="lc2-details">
        设备运行总数<span>245</span>
      </div>
      <Charts className="lc2-chart" option={option} />
      <Decoration2 style={style} />
    </div>
  )
}
