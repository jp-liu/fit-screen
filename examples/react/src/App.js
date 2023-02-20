import React from 'react'
import FitScreen from '@fit-screen/react'
import './App.scss'
import AppHeader from './components/app-header'
import AppMain from './components/app-main'

function App() {
  return (
    <FitScreen id="app" className="example-fit-screen" scaleClass="example-scale">
      <AppHeader />
      <AppMain />
    </FitScreen>
  )
}

export default App
