import Vue from 'vue'
import App from './App.vue'

import line from './utils'
import { data } from './constants.'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

alert(line.alert)
alert(data.message)
