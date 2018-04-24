/**
 * Created: 2018-03-02 10:03:01
 * Author: Hallo_c
 * -----
 * Modified: 2018-03-07 15:58:02
 * Modified By: Hallo_c
 * 路由跳转时的权限验证,现在暂时用不到此功能,进度条集成在路由验证的过程中
 * -----
 */
/*  */
import router from './router';
// import store from './store/store';
// import { Message } from 'element-ui';
import { getToken, getName } from '@/utils/token';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';// progress bar style
import Cookies from 'js-cookie';

NProgress.configure({ showSpinner: false });// NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  if (Cookies.get('status') === 0) {
    if (to.path === '/login') {
      // next({ path: '/' });
      console.log(1111111);
      next();
    } else {
      console.log(2222222);
      next();
    }
  } else {
    if (to.path === '/login') {
      console.log(3333333);
      next();
    } else {
      console.log(4444444);
      next();
      // next('/login'); // 否则全部重定向到登录页
    }
  }
  // if (getToken() !== undefined && getName() !== undefined) {
  //   if (to.path === '/login') {
  // next({ path: '/' });
  //     console.log(1111111);
  //     next();
  //   } else {
  //     console.log(2222222);
  //     next();
  //   }
  // } else {
  //   // next();
  //   if (to.path === '/login') {
  //     console.log(3333333);
  //     next();
  //   } else {
  //     console.log(4444444);
  //     next();
  //     // next('/login'); // 否则全部重定向到登录页
  //   }
  // }
  NProgress.done();
});

router.afterEach(() => {
  NProgress.done();
});
