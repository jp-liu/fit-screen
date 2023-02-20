import React from 'react'

import { ActiveRingChart, Decoration2 } from '@jiaminghi/data-view-react'

import LabelTag from './LabelTag'

import './BottomCharts.scss'

const config1 = {
  data: [
    {
      name: '收费站',
      value: 356,
    },
    {
      name: '监控中心',
      value: 215,
    },
    {
      name: '道路外场',
      value: 90,
    },
    {
      name: '其他',
      value: 317,
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  radius: '65%',
  activeRadius: '70%',
}

const config2 = {
  data: [
    {
      name: '收费站',
      value: 615,
    },
    {
      name: '监控中心',
      value: 322,
    },
    {
      name: '道路外场',
      value: 198,
    },
    {
      name: '其他',
      value: 80,
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  radius: '65%',
  activeRadius: '70%',
}

const config3 = {
  data: [
    {
      name: '收费站',
      value: 452,
    },
    {
      name: '监控中心',
      value: 512,
    },
    {
      name: '道路外场',
      value: 333,
    },
    {
      name: '其他',
      value: 255,
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  radius: '65%',
  activeRadius: '70%',
}

const config4 = {
  data: [
    {
      name: '收费站',
      value: 156,
    },
    {
      name: '监控中心',
      value: 415,
    },
    {
      name: '道路外场',
      value: 90,
    },
    {
      name: '其他',
      value: 210,
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  radius: '65%',
  activeRadius: '70%',
}

const labelConfig = {
  data: ['收费站', '监控中心', '道路外场', '其他'],
}

const style = { width: '5px' }

export default function BottomCharts() {
  return (
    <div className="bottom-charts">
      <div className="bc-chart-item">
        <div className="bcci-header">赵钱收费站</div>
        <ActiveRingChart config={config1} />
        <LabelTag config={labelConfig} />
      </div>
      <Decoration2 className="decoration-1" reverse={true} style={style} />

      <div className="bc-chart-item">
        <div className="bcci-header">孙李收费站</div>
        <ActiveRingChart config={config2} />
        <LabelTag config={labelConfig} />
      </div>

      <Decoration2 className="decoration-2" reverse={true} style={style} />

      <div className="bc-chart-item">
        <div className="bcci-header">周吴收费站</div>
        <ActiveRingChart config={config3} />
        <LabelTag config={labelConfig} />
      </div>

      <Decoration2 className="decoration-3" reverse={true} style={style} />

      <div className="bc-chart-item">
        <div className="bcci-header">郑王收费站</div>
        <ActiveRingChart config={config4} />
        <LabelTag config={labelConfig} />
      </div>
    </div>
  )
}
