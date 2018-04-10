<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <div class="right-menu">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>
      <span>
        <svg-icon icon-class="user" />:1234
      </span>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import Hamburger from './hamburger';
import Screenfull from './Screenfull';
// import ErrorLog from '@/components/ErrorLog';

export default {
  components: {
    Hamburger,
    Screenfull
    //   ErrorLog,
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name'
      // 'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar');
    },
    logout() {
      /* this.$store.dispatch('LogOut').then(() => {
        location.reload();// In order to re-instantiate the vue-router object to avoid bugs
      }); */
    }
  }
};
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  cursor: pointer;
  z-index: 1001;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
    cursor: pointer;

  }

  .right-menu {
    float: right;
    height: 50px;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 15px 8px;
    }
    .screenfull {
      height: 20px;
      margin-right: 80px;
    }
  }
}
</style>

