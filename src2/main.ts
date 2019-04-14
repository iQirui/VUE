import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
