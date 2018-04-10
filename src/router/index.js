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
Vue.use(Router);

export default new Router({
  mode: 'hash', // 两种类型history 还有 hash
  routes: [
    { path: '/login', component: login, hidden: true },

    { path: '/404', component: err404, hidden: true },
    // { path: '/olmap', component: olMap },
    {
      path: '',
      component: layout,
      redirect: 'situation',
      name: 'baseStationView',
      meta: {
        title: '基站视图',
        icon: 'component'
      },
      children: [
        {
          path: 'situation',
          component: situation,
          name: 'situation',
          meta: { title: '基站情况', noCache: true }
        },
        {
          path: 'satelliteList',
          component: satelliteList,
          name: 'satelliteList',
          meta: { title: '卫星列表', noCache: true }
        },
        {
          path: 'olmap',
          component: olmap,
          name: 'olmap',
          meta: { title: 'openlayers地图', noCache: true }
        }
      ]
    },
    {
      path: '',
      component: layout,
      redirect: 'situation',
      name: 'situation',
      meta: {
        title: '基站信息',
        icon: 'component'
      },
      children: [
        {
          path: 'management',
          component: management,
          name: 'management',
          meta: { title: '基站管理', noCache: true }
        },
        {
          path: 'parameterSet',
          component: parameterSet,
          name: 'parameterSet',
          meta: { title: '参数设置', noCache: true }
        }
      ]
    },
    {
      path: '',
      component: layout,
      redirect: 'emailSet',
      name: 'alarmSet',
      meta: {
        title: '报警设置',
        icon: 'component'
      },
      children: [
        {
          path: 'emailSet',
          component: emailSet,
          name: 'emailSet',
          meta: { title: '邮件设置', noCache: true }
        },
        {
          path: 'SMSSet',
          component: SMSSet,
          name: 'SMSSet',
          meta: { title: '短信设置', noCache: true }
        }
      ]
    },
    {
      path: '',
      component: layout,
      redirect: 'ephemeris',
      name: 'systemStatus',
      meta: {
        title: '系统状态',
        icon: 'component'
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
      component: layout,
      redirect: 'serviceSet',
      name: 'systemSet',
      meta: {
        title: '系统设置',
        icon: 'component'
      },
      children: [
        {
          path: 'serviceSet',
          component: serviceSet,
          name: 'serviceSet',
          meta: { title: '服务设置', noCache: true }
        },
        {
          path: 'satelliteSet',
          component: satelliteSet,
          name: 'satelliteSet',
          meta: { title: '卫星设置', noCache: true }
        },
        {
          path: 'mountSet',
          component: mountSet,
          name: 'mountSet',
          meta: { title: 'Mount设置', noCache: true }
        },
        {
          path: 'systemParameterSet',
          component: systemParameterSet,
          name: 'systemParameterSet',
          meta: { title: '参数设置', noCache: true }
        }
      ]
    },
    // {
    //   path: '',
    //   component: layout,
    //   children: [
    //     {
    //       path: 'dumpList',
    //       component: dumpList,
    //       name: 'dump',
    //       meta: { title: 'dump记录', icon: 'form', noCache: true }
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   component: layout,
    //   children: [
    //     {
    //       path: 'feedback',
    //       component: helloWorld,
    //       name: 'feedback',
    //       meta: { title: '反馈意见', icon: 'clipboard', noCache: true }
    //     }
    //   ]
    // },
    { path: '*', redirect: '/404', hidden: true }

  ]
});
