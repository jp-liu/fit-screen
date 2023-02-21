import Vue from 'vue'
import Vue2 from 'vue2.6'
import dataV from '@jiaminghi/data-view'
import App from './App.vue'
import './assets/style/common.less'

const VueVersion = process.env.VUE_APP_VUE_VERSION

switch (VueVersion) {
  case '2.6':
    Vue2.config.productionTip = false
    Vue2.use(dataV)

    new Vue2({
      render: h => h(App),
    }).$mount('#app')
    break
  case '2.7':
  case '3':
    Vue.config.productionTip = false

    Vue.use(dataV)

    new Vue({
      render: h => h(App),
    }).$mount('#app')
    break
  // case '3': {
  //   createApp(App).mount('#app')
  // }
}
