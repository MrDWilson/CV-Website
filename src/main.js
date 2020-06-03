import Vue from 'vue'
import Router from './router/index'
import App from './App.vue'
import VueFullPage from '../node_modules/vue-fullpage.js'

Vue.config.productionTip = false

Vue.use(VueFullPage)

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
