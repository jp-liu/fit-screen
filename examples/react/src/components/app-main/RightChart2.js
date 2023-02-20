import React from 'react'

import { Charts } from '@jiaminghi/data-view-react'

import './RightChart2.scss'

const option = {
  series: [
    {
      type: 'pie',
      data: [
        { name: '收费系统', value: 93 },
        { name: '通信系统', value: 66 },
        { name: '监控系统', value: 52 },
        { name: '供配电系统', value: 34 },
        { name: '其他', value: 22 },
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

export default function RightChart2() {
  return (
    <div className="right-chart-2">
      <div className="rc1-header">孙七收费站</div>

      <div className="rc1-chart-container">
        <div className="left">
          <div className="number">267</div>
          <div>设备运行总数</div>
        </div>

        <Charts className="right" option={option} />
      </div>
    </div>
  )
}
