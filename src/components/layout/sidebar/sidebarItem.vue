<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">
      <router-link v-if="item.children.length===1 && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon" disabled="disabled"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <!-- 折叠列表标题 -->
          <!-- 重定向到子元素第一个页面 -->
          <router-link tag="span" :to="item.path+'/'+item.children[0].path" v-if="item.meta&&item.meta.title" class="f-title">{{item.meta.title}}</router-link>
          <!-- <router-link tag="span" :to="item.path+'/'+item.ownpath" v-if="item.meta&&item.meta.title"  class="f-title">{{item.meta.title}}</router-link> -->
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="child.path" :key="child.name" @click.native="jump(child.path)">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <!-- 折叠内容小标题 -->
              <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
              <span v-else style="hei">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>

  </div>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // dialogManagement: false,
      // dialogParameterSet: false
    };
  },
  methods: {
    jump(v) {
      console.log(v);
      switch (v) {
        case 'management':
          console.log(this.dialogManagement);
          // 组件间利用中间层bus来传递数据，$emit自定义方法和传递参数，$on接收方法和其传递参数
          bus.$emit('changeManagement', true);
          break;
        case 'parameterSet':
          bus.$emit('changeParameterSet', true);
          console.log(this.dialogParameterSet);
          break;
        case 'emailSet':
          bus.$emit('changeEmailSet', true);
          break;
        case 'SMSSet':
          bus.$emit('changeSMSSet', true);
          break;
      }
    }
  }
};
</script>
<style>
.el-tooltip {
  padding: 0 10px !important;
}
.el-tooltip__popper {
  visibility: hidden !important;
}
.f-title {
  display: inline-block;
  position: relative;
  width: 180px;
  margin-left: -46px !important;
  margin-top: -2px;
  padding-left: 45px;
}
</style>


