import React from 'react'

import { ActiveRingChart, Decoration1 } from '@jiaminghi/data-view-react'

import LabelTag from './LabelTag'

import './CenterCmp.scss'

const config = {
  data: [
    {
      name: '收费站',
      value: 1315,
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
      value: 317,
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  lineWidth: 30,
  radius: '55%',
  activeRadius: '60%',
}

const labelConfig = { data: ['收费站', '监控中心', '道路外场', '其他'] }

const style = { width: '200px', height: '50px' }

export default function CenterCmp() {
  return (
    <div className="center-cmp">
      <div className="cc-header">
        <Decoration1 style={style} />
        <div>机电设备总数</div>
        <Decoration1 style={style} />
      </div>

      <div className="cc-details">
        <div>设备总数</div>
        <div className="card">2</div>
        <div className="card">1</div>
        <div className="card">3</div>
        <div className="card">7</div>
      </div>

      <div className="cc-main-container">
        <div className="ccmc-left">
          <div className="station-info">
            收费站<span>1315</span>
          </div>
          <div className="station-info">
            监控中心<span>415</span>
          </div>
        </div>

        <ActiveRingChart className="ccmc-middle" config={config} />

        <div className="ccmc-right">
          <div className="station-info">
            <span>90</span>道路外场
          </div>
          <div className="station-info">
            <span>317</span>其他
          </div>
        </div>

        <LabelTag config={labelConfig} />
      </div>
    </div>
  )
}
