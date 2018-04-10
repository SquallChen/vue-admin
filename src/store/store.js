import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  // state: {
  //   id: 1
  // },

  // 每个 modules 都会有 state, mutations, actions
  modules: {
    user
  },
  getters: getters
});

export default store;
