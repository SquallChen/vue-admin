/**
 * Created: 2018-02-28 04:14:51
 * Author: Hallo_c
 * -----
 * Modified: 2018-03-05 09:46:02
 * Modified By: Hallo_c
 * axios 二次封装
 * -----
 */

import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store/store';
import router from '@/router';
import { removeToken, removeName } from '@/utils/token';

// 创建一个 axios 实例
const service = axios.create({
  baseURL: 'http://lbs.southgnss.com:81', // 设置开发与线上不同环境的 url
  timeout: 10000, // 设置超时时间
  // 设置请求头为常规的form-data形式
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  // 转换请求方式; 不然后台为接收不到参数从而报 参数错误 问题
  transformRequest: [
    function (data) {
      let ret = '';
      for (const it in data) {
        ret +=
          encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      ret = ret.slice(0, -1); // 去掉最后的空行
      return ret;
    }
  ]
});

// asiox 请求拦截
service.interceptors.request.use(
  config => {
    // 请求时设置公共部分
    /* if (store.getters.token) {
    config.headers['X-Token'] = 'test'; // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  } */
    if (config.url !== '/user_app/login') {
      if (store.getters.token && store.getters.name) {
        config.data['token'] = store.getters.token;
        config.data['user_name'] = store.getters.name;
      }
    }
    return config;
  },
  error => {
    // 请求错误
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.status === 0) {
      return res;
    } if (res.status === 40004) {
      removeToken();
      removeName();
      router.push('/login');
      Message({
        message: res.info,
        type: 'error',
        duration: 5 * 1000
      });
      return null;
    } else {
      Message({
        message: res.info,
        type: 'error',
        duration: 5 * 1000
      });
      return null;
    }
  },

  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
