import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';
import loginVUEX from './loginVUEX';
import blogStore from './blogStore';

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  modules: {
    loginVUEX,
    blogStore
  }
})




