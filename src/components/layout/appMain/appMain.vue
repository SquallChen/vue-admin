<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'appMain',
  computed: {
    /* cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    } */
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
};
</script>
<style>

/* DIV样式遮挡影响tab事件 */
.app-main{
  height:100%;
  padding-bottom: 84px;
  /* height:664px;
  min-height: 522px; */
  /* position: relative; */
  /* padding-top: 84px; */
  /* top:-84px; */
}

</style>
