import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/login';
import err404 from '@/components/errorPage/err404';
import layout from '@/components/layout/layout';
import situation from '@/components/baseStation/situation';
import satelliteList from '@/components/baseStation/satelliteList';
import systemParameterSet from '@/components/baseStation/systemParameterSet';
import emailSet from '@/components/baseStation/emailSet';
import ephemeris from '@/components/baseStation/ephemeris';
import IONOSPHERE from '@/components/baseStation/IONOSPHERE';
import mountSet from '@/components/baseStation/mountSet';
import parameterSet from '@/components/baseStation/parameterSet';
import satelliteSet from '@/components/baseStation/satelliteSet';
import serviceSet from '@/components/baseStation/serviceSet';
import SMSSet from '@/components/baseStation/SMSSet';
import management from '@/components/baseStation/management';
import olmap from '@/components/baseStation/olmap';
import alarmSet from '@/components/baseStation/alarmSet';
import systemSet from '@/components/baseStation/systemSet';
Vue.use(Router);

export default new Router({
  mode: 'hash', // 两种类型history 还有  hash
  routes: [
    { path: '/login', component: login, hidden: true },

    { path: '/404', component: err404, hidden: true },
    {
      path: '',
      ownpath: 'satelliteList',
      component: layout,
      redirect: 'olmap',
      name: 'baseStationView',
      meta: {
        title: '基站视图',
        icon: 'basestationview'
      },
      children: [
        {
          path: 'olmap',
          component: olmap,
          name: 'olmap',
          meta: { title: 'openlayers地图', noCache: true }
        }
        // {
        //   path: 'satelliteList',
        //   component: satelliteList,
        //   name: 'satelliteList',
        //   meta: { title: '卫星列表', noCache: true }
        // }
      ]
    },
    {
      path: '',
      ownpath: 'situation',
      component: layout,
      redirect: 'situation',
      name: 'situation',
      meta: {
        title: '基站信息',
        icon: 'situation'
      },
      children: [
        {
          path: 'situation',
          component: situation,
          name: 'situation',
          meta: { title: '基站情况', noCache: true }
        },
        {
          path: 'management',
          component: management,
          name: 'management',
          redirect: 'situation',
          meta: { title: '基站管理', noCache: true }
        },
        {
          path: 'parameterSet',
          component: parameterSet,
          name: 'parameterSet',
          redirect: 'situation',
          meta: { title: '参数设置', noCache: true }
        }
      ]
    },
    {
      path: '',
      ownpath: 'alarmSet',
      component: layout,
      redirect: 'alarmSet',
      name: 'alarmSet',
      meta: {
        title: '报警设置',
        icon: 'alarm'
      },
      children: [
        {
          path: 'alarmSet',
          component: alarmSet,
          name: 'alarmSet',
          meta: { title: '参数设置', noCache: true }
        },
        {
          path: 'emailSet',
          component: emailSet,
          name: 'emailSet',
          redirect: 'alarmSet',
          meta: { title: '邮件设置', noCache: true }
        },
        {
          path: 'SMSSet',
          component: SMSSet,
          name: 'SMSSet',
          redirect: 'alarmSet',
          meta: { title: '短信设置', noCache: true }
        }
      ]
    },
    {
      path: '',
      ownpath: 'ephemeris',
      component: layout,
      redirect: 'ephemeris',
      name: 'systemStatus',
      meta: {
        title: '系统状态',
        icon: 'systemstatus'
      },
      children: [
        {
          path: 'ephemeris',
          component: ephemeris,
          name: 'ephemeris',
          meta: { title: '星历', noCache: true }
        },
        {
          path: 'IONOSPHERE',
          component: IONOSPHERE,
          name: 'IONOSPHERE',
          meta: { title: 'IONOSPHERE', noCache: true }
        }
      ]
    },
    {
      path: '',
      ownpath: 'systemSet',
      component: layout,
      redirect: 'systemSet',
      name: 'systemSet',
      meta: {
        title: '系统设置',
        icon: 'systemset'
      },
      children: [
        {
          path: 'systemSet',
          component: systemSet,
          name: 'systemSet',
          meta: { title: '系统信息', noCache: true }
        },
        {
          path: 'serviceSet',
          component: serviceSet,
          name: 'serviceSet',
          redirect: 'systemSet',
          meta: { title: '服务设置', noCache: true }
        },
        {
          path: 'satelliteSet',
          component: satelliteSet,
          name: 'satelliteSet',
          redirect: 'systemSet',
          meta: { title: '卫星设置', noCache: true }
        },
        {
          path: 'mountSet',
          component: mountSet,
          name: 'mountSet',
          redirect: 'systemSet',
          meta: { title: 'Mount设置', noCache: true }
        },
        {
          path: 'systemParameterSet',
          component: systemParameterSet,
          name: 'systemParameterSet',
          redirect: 'systemSet',
          meta: { title: '参数设置', noCache: true }
        }
      ]
    },

    { path: '*', redirect: '/404', hidden: true }

  ]
});
