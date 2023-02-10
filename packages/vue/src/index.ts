// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { App } from 'vue'
import FitScreen from './components/FitScreen'

const installFitScreen = (app: App) => app.component(FitScreen.name, FitScreen)

export { FitScreen as default, installFitScreen as install }

// For CDN. (Maybe Vue3 only)
if (typeof window !== 'undefined' && window.Vue)
  window.Vue.use(FitScreen)