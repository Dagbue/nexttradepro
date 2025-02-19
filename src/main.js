import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './filters'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.config.productionTip = false

import OtpInput from 'otp-input-vue2';

Vue.use(OtpInput)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')