<template class="station-table-content">
  <div style="height:100%; position: relative; padding-bottom:40px">
    <el-table :data="list" highlight-current-row  border style="width: 100%;" height="100%" tooltip-effect="dark" v-loading="false" element-loading-text="加载中...">
      <!-- <el-table-column prop="id" label="id" min-width="150" show-overflow-tooltip>
      </el-table-column> -->
      <el-table-column prop="userName" label="登陆名" min-width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="password" label="登陆密码" min-width="148" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="loginTimes" label="登陆次数" min-width="80" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="deviceSn" label="设备序列号" min-width="144" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="deviceType" label="设备类型" min-width="77" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="lastTimeOnline" label="最后在线时间" min-width="80" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="onlineTime" label="在线时长" min-width="64" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="expireTime" label="失效日期" min-width="80" show-overflow-tooltip>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="56" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="management(scope.$index)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="查看" width="56" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="track(scope.$index)">轨迹</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page_num" :page-sizes="[5,10,15,20]" :page-size="listQuery.num_per_page" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <dialogUserModify></dialogUserModify>
    <dialogUserTrack></dialogUserTrack>
  </div>
</template>

<script>
import bus from '@/store/eventbus';
import { getUserList } from '@/api/app.js';
import dialogUserModify from '@/components/dialog/dialogUserModify';
import dialogUserTrack from '@/components/dialog/dialogUserTrack';
export default {
  name: 'userList',
  components: {
    dialogUserModify,
    dialogUserTrack
  },
  methods: {
    // 点击时打开dialog，并传递当前点击的基站index值
    management(index) {
      let currentData = this.list[index];
      bus.$emit('currentUserData', currentData);
    },
    track(index) {
      let currentUser = this.list[index].userName;
      bus.$emit('currentUser', currentUser);
    },
    userList() {
      this.listLoading = true;
      // 设置获取数据的页数和每一页展示的数据量
      getUserList(this.listQuery.page_num, this.listQuery.num_per_page).then(
        response => {
          this.list = response.recordList;
          this.listLoading = false;
        },
        reject => {
          console.log('请求失败！');
        }
      );
    },
    //分页功能，改变数值后重新请求数据
    handleSizeChange(val) {
      if (this.listQuery.limit === val) {
        return;
      }
      this.listQuery.num_per_page = val;
      this.userList();
    },
    handleCurrentChange(val) {
      if (this.listQuery.page_num === val) {
        return;
      }
      this.listQuery.page_num = val;
      this.userList();
    },
  },
  data() {
    return {
      total: null,
      tabPosition: 'bottom',
      activeName: 'first',
      list: null,
      listLoading: true,
      radio: '',
      listQuery: {
        page_num: 1,
        num_per_page: 10
      }
    };
  },
  created() {
    this.userList();
  },
  mounted() {
    // 当删除用户操作完成后，重新请求刷新表格数据
    bus.$on('RefreshAfterDeletion', reg => {
      this.userList();
    });
    // 当新增用户操作完成后，重新请求刷新表格数据
    bus.$on('RefreshAfterAdd', reg => {
      this.userList();
    });
    // 当更新用户信息操作完成后，重新请求刷新表格数据
    bus.$on('RefreshAfterUpdated', reg => {
      this.userList();
    });
  }
};
</script>
<style lang="scss" scoped>
.pagination-container {
  position: absolute;
  bottom: 0;
  width: 330px;
  right: 50px;
  z-index: 3;
}
</style>
