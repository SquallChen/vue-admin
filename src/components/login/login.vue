<template>
  <div class="login-container">
    <h3>欢迎您来到南方软件更新平台</h3>
    <p>请输入帐号密码登录</p>
    <el-form ref="form" :model="loginForm">
      <el-form-item>
        <el-input v-model="loginForm.userName" placeholder="用户名" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.pw" placeholder="密码" prefix-icon="el-icon-search"></el-input> </el-form-item>
      <el-button type="primary" :loading="loading" @click="login" class="btn-block">登 录</el-button>
      <!-- <el-button type="primary" @click="showStore">store</el-button> -->
    </el-form>
    <span class="text">广州南方卫星导航仪器有限公司 © 2017</span>
    <span class="text">网址：www.southgnss.com</span>
    <div id="test">test</div>
  </div>
</template>

<script type="text/ecmascript-6">
import { setCookie } from '@/utils/token';
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        userName: 'southcloudapp',
        pw: '123456'
      },
      loading: false
    };
  },
  props: {},
  components: {},
  computed: {},
  filters: {},
  methods: {
    login() {
      // 登陆时设置cookie用于判断
      setCookie('status', '0');
      this.$router.push({ path: '/' });
      return false;
      // this.loading = true;
      // this.$store
      //   .dispatch('actionLogin', this.loginForm)
      //   .then(res => {
      //     this.$router.push({ path: '/' });
      //     this.loading = false;
      //   })
      //   .catch(() => {
      //     this.loading = false;
      //   });
    }

  }

};
</script>

<style scoped lang="stylus">
.login-container {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  padding: 0 35px 35px 35px;
  margin: 40px auto 120px auto;
  text-align: center;

  .btn-block {
    width: 100%;
    margin-bottom: 30px;
  }

  .text {
    display: inline-block;
    margin-bottom: 10px;
  }
}
</style>