import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'

import { clickOutSide } from '@/directive/clickOutSide';

Vue.config.productionTip = false

Vue.directive('click-outside', clickOutSide)

new Vue({
  render: h => h(App),
}).$mount('#app')
