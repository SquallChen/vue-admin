/*
 * Created: 2018-03-07 03:07:47
 * Author: Hallo_c
 * -----
 * Modified: 2018-04-24 09:08:56
 * Modified By: chenzway
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
//获取卫星列表数据
function getSatelliteData(station_id) {
  return request({
    url: 'cors_station/get_gnss_info/',
    method: 'post',
    data: {
      station_id
    }
  });
}
//获取基站接收机状态
function getReceiverStatus(station_id) {
  return request({
    url: 'cors_station/get_receiver_status/',
    method: 'post',
    data: {
      station_id
    }
  });
}

//Mount挂载点列表
function getMountList(page_num, num_per_page) {
  return request({
    url: 'mountsetting/list_page',
    method: 'post',
    data: {
      page_num,
      num_per_page
    }
  });
}
//删除Mount挂载点
function deleteMount(id) {
  return request({
    url: '/mountsetting/delete_index',
    method: 'post',
    data: {
      id
    }
  });
}
//新增Mount挂载点
function addMount(
  mountName,
  isUsed,
  mountType,
  cmr0,
  cmr1,
  rtcm23Type1,
  rtcm23Type3,
  rtcm23Type1819,
  rtcm23Type31,
  rtcm321005,
  rtcm321007,
  rtcm321033,
  rtcm321004,
  rtcm321012,
  rtcm32Gps,
  rtcm32Glo,
  rtcm32Bds,
  rtcm32Gal,
  rtcm32GpsMsm,
  rtcm32GloMsm,
  rtcm32BdsMsm,
  rtcm32GalMsm
) {
  return request({
    url: 'mountsetting/create_index',
    method: 'post',
    data: {
      mountName,
      isUsed,
      mountType,
      cmr0,
      cmr1,
      rtcm23Type1,
      rtcm23Type3,
      rtcm23Type1819,
      rtcm23Type31,
      rtcm321005,
      rtcm321007,
      rtcm321033,
      rtcm321004,
      rtcm321012,
      rtcm32Gps,
      rtcm32Glo,
      rtcm32Bds,
      rtcm32Gal,
      rtcm32GpsMsm,
      rtcm32GloMsm,
      rtcm32BdsMsm,
      rtcm32GalMsm
    }
  });
}
//更新Mount挂载点
function UpdateMount(
  id,
  mountName,
  isUsed,
  mountType,
  cmr0,
  cmr1,
  rtcm23Type1,
  rtcm23Type3,
  rtcm23Type1819,
  rtcm23Type31,
  rtcm321005,
  rtcm321007,
  rtcm321033,
  rtcm321004,
  rtcm321012,
  rtcm32Gps,
  rtcm32Glo,
  rtcm32Bds,
  rtcm32Gal,
  rtcm32GpsMsm,
  rtcm32GloMsm,
  rtcm32BdsMsm,
  rtcm32GalMsm
) {
  return request({
    url: 'mountsetting/update',
    method: 'post',
    data: {
      id,
      mountName,
      isUsed,
      mountType,
      cmr0,
      cmr1,
      rtcm23Type1,
      rtcm23Type3,
      rtcm23Type1819,
      rtcm23Type31,
      rtcm321005,
      rtcm321007,
      rtcm321033,
      rtcm321004,
      rtcm321012,
      rtcm32Gps,
      rtcm32Glo,
      rtcm32Bds,
      rtcm32Gal,
      rtcm32GpsMsm,
      rtcm32GloMsm,
      rtcm32BdsMsm,
      rtcm32GalMsm
    }
  });
}

//获取NRS参数
function getNRSData() {
  return request({
    url: 'paramsetting/get_param_setting',
    method: 'post',
    data: {}
  });
}

//更新NRS参数
function updateNRSData(
  nrsMaxDistance,
  nrsMinDistance,
  deepMaxDistance,
  deepMinDistance,
  inRealStationDistance,
  outRealStationDistance,
  translationDistance,
  ionosphereMode,
  troposphericMode,
  stationAbnormalSecond,
  isIntelligenceContruct,
  intelligenceContructParam
) {
  return request({
    url: 'paramsetting/update',
    method: 'post',
    data: {
      nrsMaxDistance,
      nrsMinDistance,
      deepMaxDistance,
      deepMinDistance,
      inRealStationDistance,
      outRealStationDistance,
      translationDistance,
      ionosphereMode,
      troposphericMode,
      stationAbnormalSecond,
      isIntelligenceContruct,
      intelligenceContructParam
    }
  });
}

//获取卫星参数设置
function getSatelliteSetting() {
  return request({
    url: 'satellitesetting/get_satellite_setting/',
    method: 'post',
    data: {}
  });
}

//更新卫星参数设置
function upDateSatelliteSetting(setting) {
  return request({
    url: 'satellitesetting/update/',
    method: 'post',
    data: {
      setting
    }
  });
}
//获取用户列表
function getUserList(page_num,num_per_page) {
  return request({
    url: 'cors_user/list_page',
    method: 'post',
    data: {
      page_num,
      num_per_page
    }
  });
}
//新增用户
function createUser(userName,password,deviceType,deviceSn) {
  return request({
    url: 'cors_user/create_index',
    method: 'post',
    data: {
      userName,
      password,
      deviceType,
      deviceSn
    }
  });
}

//更新用户信息
function updateUser(id,password,deviceType,deviceSn) {
  return request({
    url: 'cors_user/update',
    method: 'post',
    data: {
      id,
      password,
      deviceType,
      deviceSn
    }
  });
}

//删除用户
function deleteUser(id) {
  return request({
    url: 'cors_user/delete_index',
    method: 'post',
    data: {
      id
    }
  });
}

// 新增基站
function AddBaseStation(
  station_name,
  station_id,
  server_port,
  x,
  y,
  z,
  client_ip,
  client_port,
  b,
  l,
  h,
  status,
  net_id,
  mode
) {
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
// 更新基站
function UpdatedBaseStation(
  station_name,
  id,
  station_id,
  server_port,
  x,
  y,
  z,
  client_ip,
  client_port,
  b,
  l,
  h,
  net_id,
  mode
) {
  return request({
    url: 'cors_station/update',
    method: 'post',
    data: {
      station_name,
      station_id,
      id,
      x,
      y,
      z,
      client_ip,
      client_port,
      server_port,
      b,
      l,
      h,
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
export {
  appList,
  addApp,
  delApp,
  updateList,
  dumpList,
  BaseInfo,
  AddBaseStation,
  DeleteBaseStation,
  UpdatedBaseStation,
  getSatelliteData,
  getReceiverStatus,
  getMountList,
  UpdateMount,
  deleteMount,
  addMount,
  getNRSData,
  updateNRSData,
  getSatelliteSetting,
  upDateSatelliteSetting,
  getUserList,
  createUser,
  updateUser,
  deleteUser,
};
