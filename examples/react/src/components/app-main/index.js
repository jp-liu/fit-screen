import React from 'react'
import './index.scss'

import {
  BorderBox1,
  BorderBox3,
  BorderBox4,
} from '@jiaminghi/data-view-react'

import LeftChart1 from './LeftChart1'
import LeftChart2 from './LeftChart2'
import LeftChart3 from './LeftChart3'

import CenterCmp from './CenterCmp'

import RightChart1 from './RightChart1'
import RightChart2 from './RightChart2'

import BottomCharts from './BottomCharts'

const AppMain = () => {
  return (
    <BorderBox1 className="app-main">
      <BorderBox3 className="app-main-left">
        <LeftChart1 />
        <LeftChart2 />
        <LeftChart3 />
      </BorderBox3>

      <div className="app-main-right">
        <div className="app-main-right__top">
          <BorderBox3 className="app-main-right__top-left">
            <CenterCmp />
          </BorderBox3>

          <div className="app-main-right__top-right">
            <BorderBox3 className="box1">
              <RightChart1 />
            </BorderBox3>

            <BorderBox4 className="box2" reverse={true}>
              <RightChart2 />
            </BorderBox4>
          </div>
        </div>

        <BorderBox4 className="app-main-right__bottom">
          <BottomCharts />
        </BorderBox4>
      </div>
    </BorderBox1>
  )
}

export default AppMain
