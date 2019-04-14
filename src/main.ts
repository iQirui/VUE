import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import router from './router';
import store from './store';
import App from './App.vue';
import i18n from './i18n';


import myInstructions from '@/instructions/myInstructions';
myInstructions(Vue);

Vue.use(ElementUI, { size: 'mini', zIndex: 3000 });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
