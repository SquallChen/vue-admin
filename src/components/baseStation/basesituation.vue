<template class="station-table-content">
  <div style="height:100%; position: relative; padding-bottom:40px">
    <el-table :data="list" highlight-current-row @current-change="handleCurrentChange2" border style="width: 100%;" height="100%" tooltip-effect="dark" v-loading="false" element-loading-text="加载中..." @row-click="showRow">
      <el-table-column width="50">
        <template slot-scope="scope">
          <el-radio v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="stationName" label="基站名" min-width="70" show-overflow-tooltip>
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
      <el-table-column prop="l" label="基站经度" min-width="148" show-overflow-tooltip>
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
          <el-button type="text" size="small" @click="management(scope.$index)">管理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page_num" :page-sizes="[5,10,15,20]" :page-size="listQuery.num_per_page" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script>
import bus from '@/store/eventbus';
import { BaseInfo } from '@/api/app.js';
export default {
  name: 'basesituation',
  methods: {
    // 点击时打开dialog，并传递当前点击的基站index值
    management(index) {
      bus.$emit('changeManagement', true);
      bus.$emit('management', index);
    },
    getList() {
      this.listLoading = true;
      // 设置获取数据的页数和每一页展示的数据量
      BaseInfo(this.listQuery.page_num, this.listQuery.num_per_page).then(
        response => {
          this.list = response.recordList;
          for(var i=0;i<this.list.length;i++){
            this.list[i].status=this.list[i].status=== 1 ? '在线' : '离线'
           }
          this.total = response.totalCount;
          this.listLoading = false;
        },
        reject => {
          console.log('请求失败！');
        }
      );
    },
    handleSizeChange(val) {
      if (this.listQuery.limit === val) {
        return;
      }
      this.listQuery.num_per_page = val;
      this.getList();
    },
    handleCurrentChange(val) {
      if (this.listQuery.page_num === val) {
        return;
      }
      this.listQuery.page_num = val;
      this.getList();
    },
    showRow(row) {
      //赋值给radio
      this.radio = this.list.indexOf(row);
    },
    handleCurrentChange2(currentRow, oldCurrentRow) {
      this.currentRow = currentRow;
       //传递当前点击基站数据到中间件
       bus.$emit('currentBaseStationsId', currentRow.stationId);
    }
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
        num_per_page: 5
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
    bus.$on('RefreshAfterUpdated', reg => {
      this.getList();
    });
  }
};
</script>
<style lang="scss" scoped>
.pagination-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 100px;
}
</style>
