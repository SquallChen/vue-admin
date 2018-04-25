<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <div class="right-menu">

      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <screenfull class="screenfull right-menu-item" style="margin-right:5px"></screenfull>
      </el-tooltip>
      <!-- <span>
        <svg-icon icon-class="user" />:1234
      </span> -->
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="@/assets/img/user_head.gif">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown" style="margin-top:-4px !important;">
          <router-link to="/">
            <el-dropdown-item>
              Homepage
            </el-dropdown-item>
          </router-link>
         <el-dropdown-item divided>
            <span @click="logout" style="display:block;">logOut</span>
          </el-dropdown-item>
          <el-dropdown-item divided>

          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import Hamburger from './hamburger';
import Screenfull from './Screenfull';
import { getCookie } from '@/utils/token';
export default {
  data() {
    return {
      name1: 'user'
    };
  },
  components: {
    Hamburger,
    Screenfull
  },
  computed: {
    ...mapGetters(['sidebar', 'name', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar');
    },
    logout() {
      // Cookies.get();
      console.log(getCookie('status'));
      // this.$router.push({ path: '/login' });
      // console.log(document.cookie);
      // expires;
      // this.$store.dispatch('LogOut').then(() => {
      //   location.reload();// In order to re-instantiate the vue-router object to avoid bugs
      // });
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
      .user-avatar {
        width: 40px;
        height: 40px;
        margin-top: -10px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom:before {
        position: relative;
        top: -5px;
        font-size: 10px;
      }
    }

    .screenfull {
      height: 20px;
      margin-right: 80px;
    }
  }
  .nav-tab {
    height: 34px;
    width: 100%;
    margin-top: 50px;
  }
}
</style>

