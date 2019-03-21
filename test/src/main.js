import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
Vue.prototype.$http = axios
router.push('login')
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // render: h => h(login)

})

