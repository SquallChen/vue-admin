<template class="station-table-content">
<el-table :data="list" border style="width: 100%" height="100%" tooltip-effect="dark" v-loading="false" element-loading-text="加载中...">
          <el-table-column fixed prop="stationName" label="基站名" min-width="70" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="stationId" label="基站ID" min-width="80" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="clientIp" label="ClientIp" min-width="80" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="clientPort" label="ClientPort" min-width="120" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="b" label="基站纬度" min-width="144" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="h" label="基站高程" min-width="77" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="id" label="ID" min-width="295" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="l" label="基站经度" min-width="148" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="location" label="Location" min-width="250" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="mode" label="Mode" min-width="60" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="netId" label="子网ID" min-width="64" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="x" label="空间坐标X" min-width="126" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="y" label="空间坐标Y" min-width="126" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="z" label="空间坐标Z" min-width="126" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="status" label="基站状态" min-width="60" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="serverPort" label="SeverPort" min-width="80" show-overflow-tooltip>
          </el-table-column>
          <el-table-column fixed="right" label="操作" min-width="50" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="text" size="small">管理</el-button>
            </template>
          </el-table-column>
        </el-table>
</template>

<script>
import bus from '@/store/eventbus';
import { BaseInfo } from '@/api/app.js';
export default {
  name: 'basesituation',
  methods: {
    getList() {
      this.listLoading = true;
      // 设置获取数据的页数和每一页展示的数据量
      BaseInfo(this.listQuery.page_num, this.listQuery.num_per_page).then(
        response => {
          this.list = response.recordList;
          this.listLoading = false;
        },
        reject => {
          console.log('请求失败！');
        }
      );
    }
  },
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      list: null,
      listLoading: true,
      listQuery: {
        page_num: 1,
        num_per_page: 10
      }
    };
  },
  created() {
    this.getList();
  },
  mounted() {
    // 当删除基站操作完成后，重新请求刷新表格数据
    bus.$on('RefreshAfterDeletion', reg => {
      this.getList();
    });
    // 当新增基站操作完成后，重新请求刷新表格数据
    bus.$on('RefreshAfterAdd', reg => {
      this.getList();
    });
  }
};
</script>
<style lang="scss" scoped>

</style>