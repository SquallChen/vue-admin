<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
    <div class="footer">
      <footer></footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import TagsView from './tagsView/tagsView';
import AppMain from './appMain/appMain';
import Footer from './footer/footer';
export default {
  name: 'layout',
  data() {
    return {};
  },
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    Footer
  },
  computed: {
    sidebar() {
      return this.$store.state.user.sidebar;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.app-wrapper {
	  @include clearfix;
	  position: relative;
	  height: 100%;
	  width: 100%;
  }
  .footer{
    width:100%;
    height:21.1%;
    z-index: 1002;
    border:1px solid #ddd;
  }
</style>