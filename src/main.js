import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js';
import globalVariable from './assets/js/global_variable.js'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.global = globalVariable



new Vue({
  render: h => h(App),
  router
}).$mount('#app')