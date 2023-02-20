import React from 'react'
import './index.scss'
import { BorderBox2 } from '@jiaminghi/data-view-react'

const style = {
  width: '120px',
  height: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  marginLeft: '200px',
}

export default function AppHeader() {
  return (
    <div className="app-header">
      <div className="app-header-left">
        技术支持:
        <a href="https://github.com/DataV-Team/DataV-React">
          https://github.com/DataV-Team/DataV-React
        </a>
      </div>
      <div className="app-header-middle">React 示例</div>
      <div className="app-header-right">
        <BorderBox2 style={style}>综合管理台</BorderBox2>
      </div>
    </div>
  )
}
