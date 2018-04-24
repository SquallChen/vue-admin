/**
 * Created: 2018-03-01 02:36:29
 * Author: Hallo_c
 * -----
 * Modified: 2018-03-05 09:31:57
 * Modified By: Hallo_c
 * 登录、登出设置
 * -----
 */

import request from '@/utils/request';
import { hex_sha1 } from '@/utils/sha';

function login(name, pw) {
  return request({
    url: '/user_app/login',
    method: 'post',
    data: {
      user_name: name,
      signature: hex_sha1(pw),
      domain: 'appUpdate' + new Date().valueOf()
    }
  });
}

// function logout() {
//   return request({
//     url: '/user_app/logout',
//     method: 'post'
//   });
// }

export { login, logout };
