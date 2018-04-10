<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select style="width: 300px;" class="filter-item" placeholder="请选择App" v-model="checkApp" @change="toggleApp">
        <el-option v-for="v in appArr" :key="v.id" :label="v.appName" :value="v.id"></el-option>
      </el-select>
    </div>

    <el-table :data="tableData" v-loading="listLoading" element-loading-text="正在加载中..." stripe border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" type="index" label="序号" width="50px"></el-table-column>
      <!-- <el-table-column align="center" prop="appName" label="程序名称"></el-table-column> -->
      <el-table-column align="center" prop="appVersion" label="版本"></el-table-column>
      <el-table-column align="center" prop="createTime" :formatter="formatter" label="提交时间"></el-table-column>
      <el-table-column align="center" prop="contract" label="联系方式"></el-table-column>
      <el-table-column align="center" prop="ip" label="IP地址"></el-table-column>
      <el-table-column align="center" prop="description" label="崩溃描述"></el-table-column>
      <el-table-column align="center" prop="crashText" label="崩溃信息"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="danger" @click="handleDel(scope.row.appName, scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[1,10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import { appList, dumpList } from '@/api/app.js';
import { parseTime } from '@/utils/formatter';

export default {
  name: 'dumpList',
  data() {
    return {
      listLoading: true,
      tableData: [],
      appArr: [],
      checkApp: '',
      total: null,
      listQuery: {
        page: 1,
        limit: 10
      }
    };
  },
  methods: {
    formatter(row, column, cellValue) {
      return parseTime(cellValue);
    },

    handleDel(n, v) {
      this.$confirm(`确认删除 ${n} ?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delApp(v).then(res => {
          this.getList();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        });
      });
    },

    getList() {
      dumpList(this.checkApp, this.listQuery.page, this.listQuery.limit).then(res => {
        this.tableData = res.recordList;
        this.total = res.pageCount;
        setTimeout(() => {
          this.listLoading = false;
        }, 600);
      });
    },

    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.listLoading = true;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.listLoading = true;
      this.getList();
    },

    toggleApp(v) {
      this.getList();
    }
  },

  created() {
    appList(1, 500).then(res => {
      this.appArr = res.recordList;
      this.checkApp = res.recordList[0].id;
      this.getList();
    });
  }
};
</script>

<style scoped lang="stylus">
</style>