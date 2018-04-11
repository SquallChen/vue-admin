import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    id: 1,
    dialogManagement: false,
    dialogParameterSet: false
  },
  mutations: {
    DialogManagementChange(state) {
      console.log('提交前为' + state.dialogManagement);
      state.dialogManagement = !state.dialogManagement;
      console.log('提交后为' + state.dialogManagement);
    }
  },
  actions: {
    toggleTest({ commit }) {
      commit('DialogManagementChange');
    }
  },
  // 每个 modules 都会有 state, mutations, actions
  modules: {
    user
  },
  getters: getters
});

export default store;
