import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AVUE from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'

Vue.use(ElementUI);
Vue.use(AVUE);
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
