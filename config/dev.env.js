'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

// 设置 开发环境请求的 url 为线上的 url
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '"http://lbs.southgnss.com:81"'
});
