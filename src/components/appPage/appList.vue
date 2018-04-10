<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="margin-right: 20px; float:right" @click="handleDialog" type="primary" icon="el-icon-edit">添加</el-button>
    </div>

    <el-table :data="tableData" v-loading="listLoading" element-loading-text="正在加载中..." stripe border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" type="index" label="序号" width="50px"></el-table-column>
      <el-table-column align="center" prop="appName" label="程序名称"></el-table-column>
      <el-table-column align="center" prop="description" label="描述"></el-table-column>
      <el-table-column align="center" prop="userName" label="创建者"></el-table-column>
      <el-table-column align="center" prop="createTime" :formatter="formatter" label="创建时间"></el-table-column>
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

    <el-dialog title="添加APP" :visible.sync="dialogVisible" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="APP名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="App描述" prop="desc">
          <el-input v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="更新方式" prop="updateType">
          <el-radio-group v-model="ruleForm.updateType">
            <el-radio label="0">整包更新</el-radio>
            <el-radio label="1">增量更新</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script type="text/ecmascript-6">
import { appList, addApp, delApp } from '@/api/app.js';
import { parseTime } from '@/utils/formatter';
import { Message } from 'element-ui';

export default {
  name: 'appList',
  data() {
    return {
      listLoading: true,
      tableData: [],
      total: null,
      listQuery: {
        page: 1,
        limit: 10
      },
      dialogVisible: false,
      rules: {
        name: [{ required: true, message: '请输入APP名称', trigger: 'blur' }],
        desc: [{ required: true, message: '请输入APP信息描述', trigger: 'blur' }]
      },
      ruleForm: {
        name: '',
        desc: '',
        updateType: '0'
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
      /* delApp(v).then(res => {
        Message({
          message: '删除APP成功!',
          type: 'success',
          duration: 5 * 1000
        });
      }); */
    },

    getList() {
      appList(this.listQuery.page, this.listQuery.limit).then(res => {
        if (res) {
          this.tableData = res.recordList;
          this.total = res.pageCount;
          setTimeout(() => {
            this.listLoading = false;
          }, 600);
        }
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

    handleDialog() {
      this.dialogVisible = true;
      this.ruleForm.name = '';
      this.ruleForm.desc = '';
      this.ruleForm.updateType = '0';
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate();
      });
    },

    submitForm() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          const formData = this.ruleForm;
          addApp(formData.name, formData.des, formData.updateType).then(res => {
            this.dialogVisible = false;
            if (res !== null) {
              Message({
                message: '添加APP成功!',
                type: 'success',
                duration: 5 * 1000
              });
              this.getList();
            }
          });
        } else {
          return false;
        }
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped lang="stylus">
</style>