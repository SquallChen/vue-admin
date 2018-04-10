<template>
  <scroll-bar>
    <el-menu unique-opened mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './sidebarItem';
import ScrollBar from './scrollBar';
import routes from '@/router';

export default {
  name: 'sidebar',
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened;
    },
    routes() {
      return routes.options.routes;
    }
  }
};
</script>