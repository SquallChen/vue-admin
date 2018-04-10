/*
 * Created: 2018-03-07 03:07:47
 * Author: Hallo_c
 * -----
 * Modified: 2018-03-09 09:34:28
 * Modified By: Hallo_c
 * -----
 */

import request from '@/utils/request';

function appList(page_num, num_per_page) {
  return request({
    url: '/app/index_page',
    method: 'post',
    data: {
      page_num,
      num_per_page
    }
  });
}

function addApp(app_name, description, update_type) {
  return request({
    url: 'app/create_index',
    method: 'post',
    data: {
      app_name,
      description,
      update_type
    }
  });
}

function delApp(app_id) {
  return request({
    url: 'app/delete_index',
    method: 'post',
    data: {
      app_id
    }
  });
}

function updateList(page_num, num_per_page) {
  return request({
    url: '/app/update_item_page',
    method: 'post',
    data: {
      page_num,
      num_per_page
    }
  });
}
function dumpList(app_id, page_num, num_per_page) {
  return request({
    url: '/app/crash_item_page',
    method: 'post',
    data: {
      app_id,
      page_num,
      num_per_page
    }
  });
}

export { appList, addApp, delApp, updateList, dumpList };