<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
    <!-- <div class="footers">
      <footerContent></footerContent>
    </div> -->
    <el-footer :height="height">
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
export default {
  name: 'layout',
  data() {
    return {
      height: '200px'
    };
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
	@import "src/styles/mixin.scss";
	.app-wrapper {
	  @include clearfix;
	  position: relative;
	  height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .main-container{
      width:100%;
      height:78.9%;
    }
    .el-footer{
      width:100%;
      border:1px solid #ddd;
      position:fixed;
      bottom: 0;
    }
  }
  .footers{
    width:100%;
    height:21.1%;
    z-index: 1002;
    border:1px solid #ddd;
    overflow: auto;
    position: fixed;
    bottom:0;
    span{
      position: absolute;
      display: block;
      width:60px;
      height:20px;
      border:1px solid #ddd;
      border-radius: 0 0 5px 5px ;

      left:50%;
      top:-1px;
      background:url('../../assets/img/fold.png') no-repeat center;
      background-size: 20px 20px;
    }
  }

</style>