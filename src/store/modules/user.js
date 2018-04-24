import { login, logout } from '@/api/login';
import { getToken, setToken, removeToken, getName, setName, removeName, getAppInfo } from '@/utils/token';
import Cookies from 'js-cookie';

const user = {
  state: {
    token: getToken(),
    name: getName(),
    // appInfo: getAppInfo(),
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    APP_INFO: (state, appInfo) => {
      state.appInfo = appInfo;
    }
  },

  actions: {
    actionLogin({ commit }, userInfo) {
      const userName = userInfo.userName.trim();
      return new Promise((resolve, reject) => {
        login(userName, userInfo.pw).then(response => {
          commit('SET_TOKEN', response.token);
          commit('SET_NAME', userName);
          setToken(response.token);
          setName(userName);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '');
    //       commit('SET_ROLES', []);
    //       removeToken();
    //       resolve();
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    setAppInfo({ commit }) {
      commit('APP_INFO');
    }
  }
};

export default user;
