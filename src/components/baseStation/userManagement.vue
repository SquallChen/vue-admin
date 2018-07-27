<template>
  <div class="TableContent">
    <el-tabs v-model="activeName" type="card" :tab-position="tabPosition" @tab-click="handleClick">
      <el-tab-pane label="用户列表" name="first">
        <userList></userList>
      </el-tab-pane>
      <el-tab-pane label="用户轨迹" name="second">
        <userTrackMap></userTrackMap>
      </el-tab-pane>
    </el-tabs>
    <dialogAddUser></dialogAddUser>
  </div>

</template>

<script>
import bus from '@/store/eventbus';
import userList from '@/components/baseStation/userList';
import userTrackMap from '@/components/baseStation/userTrackMap';
import dialogAddUser from '@/components/dialog/dialogAddUser';
export default {
  name: 'userManagement',
  methods: {
    handleClick(event){
      if(event.name==='second'){
        bus.$emit('refreshUserTrack', true);
      }
    }
  },
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first'
    };
  },
  created() {
    bus.$on('currentTrackData', reg => {
      //bus.$emit('refreshUserTrack', true);
      this.activeName = 'second';
    });
  },
  mounted() {
  },
  components: {
    userList,
    userTrackMap,
    dialogAddUser
  }
};
</script>

<style>
.TableContent {
  height: 100%;
  overflow: auto;
  position: relative;
}
.el-dialog__body {
  padding: 20px 20px;
}
.el-tabs,
.el-tabs__content {
  height: 100%;
}

.el-tab-pane {
  height: 100%;
}
.el-tabs--bottom .el-tabs__header.is-bottom{
  margin-top: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
  background: #fff;
}
.pagination-container {
    margin-top: 0px;
    margin-bottom: 5px;
}
</style>