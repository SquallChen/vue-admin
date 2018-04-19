<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container" :class="{ changesize: isActive}"></sidebar>
    <div class="main-container" :class="{ changesize: isActive}">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
    <!-- <div class="footers">
      <footerContent></footerContent>
    </div> -->
    <el-footer :height='height' :class="{ active: isActive  }">
      <footerContent></footerContent>
    </el-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import TagsView from './tagsView/tagsView';
import AppMain from './appMain/appMain';
import footerContent from './footers/footerContent';
import bus from '@/store/eventbus';
export default {
  name: 'layout',
  data() {
    return {
      height: '200px',
      isActive: false
    };
  },
  mounted() {
    //  根据layout组件传过来的值，修改当前isActive，sidebar、footer、main-container组件根据isActive来更改展示/收缩的css
    bus.$on('togglefold', reg => {
      this.isActive = reg;
    });
  },
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    footerContent
  },
  computed: {
    sidebar() {
      return this.$store.state.user.sidebar;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .main-container {
    width: 100%;
    height: 78.9%;
    animation: 0.38s enlarge2;
  }
  .sidebar-container {
    height: 78.9%;
    animation: 0.38s enlarge2;
  }
  .changesize {
    animation: 0.38s enlarge;
    height: 100%;
  }
  .el-footer {
    width: 100%;
    border: 1px solid #ddd;
    position: fixed;
    bottom: 0;
    transform: translateY(0px);
    transition: 0.38s;
    z-index: 10;
    background: white;
  }
  .active {
    transform: translateY(198px);
    transition: 0.38s;
  }
}

@keyframes enlarge {
  0% {
    height: 78.9%;
  }
  100% {
    height: 100%;
  }
}
@keyframes enlarge2 {
  0% {
    height: 100%;
  }
  100% {
    height: 78.9%;
  }
}
</style>