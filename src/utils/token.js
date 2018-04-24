/**
 * Created: 2018-03-02 11:07:00
 * Author: Hallo_c
 * -----
 * Modified: 2018-03-02 11:52:34
 * Modified By: Hallo_c
 * cookies操作
 * -----
 */
import Cookies from 'js-cookie';

const tokenKey = 'token';
const nameKey = 'name';
const appKey = 'appInfo';

function getToken() {
  return Cookies.get(tokenKey);
}

function setToken(token, expires) {
  return Cookies.set(tokenKey, token, { expires });
}

function removeToken() {
  return Cookies.remove(tokenKey);
}

function getName() {
  return Cookies.get(nameKey);
}

function setName(value) {
  return Cookies.set(nameKey, value);
}

function removeName() {
  return Cookies.remove(nameKey);
}

function getAppinfo() {
  return Cookies.get(appKey);
}

function setAppinfo(value) {
  return Cookies.set(appKey, value);
}

function removeAppinfo() {
  return Cookies.remove(appKey);
}
function getCookie(name) {
  return Cookies.get(name);
}
export { getToken, setToken, removeToken, getName, setName, removeName, getAppinfo, setAppinfo, removeAppinfo, getCookie };
