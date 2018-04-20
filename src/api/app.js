/*
 * Created: 2018-03-07 03:07:47
 * Author: Hallo_c
 * -----
 * Modified: 2018-04-20 11:46:06
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
    url: 'cors_station/list_page',
    method: 'post',
    data: {
      page_num,
      num_per_page
    }
  });
}
function BaseInfo(page_num, num_per_page) {
  return request({
    url: 'cors_station/list_page',
    method: 'post',
    data: {
      page_num,
      num_per_page
    }
  });
}

// 新增基站
function AddBaseStation(station_name, station_id, x, y, z, client_ip, client_port, server_port, b, l, h, status, net_id, mode) {
  return request({
    url: 'cors_station/create_index',
    method: 'post',
    data: {
      station_name,
      station_id,
      x,
      y,
      z,
      client_ip,
      client_port,
      server_port,
      b,
      l,
      h,
      status,
      net_id,
      mode
    }
  });
}
// 删除基站
function DeleteBaseStation(id) {
  return request({
    url: 'cors_station/delete_index',
    method: 'post',
    data: {
      id
    }
  });
}
export { appList, addApp, delApp, updateList, dumpList, BaseInfo, AddBaseStation, DeleteBaseStation };
