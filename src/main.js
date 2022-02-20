import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
// Bootstrap-Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Third-party plugins
import VCalendar from 'v-calendar'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VCalendar)
Vue.use(require('vue-moment'))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
