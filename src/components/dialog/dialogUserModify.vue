
<template>
  <div>
    <el-dialog title="用户管理" :visible.sync="dialogUserModify" width="670px">
      <el-form :model="form">
        <div class="adduser-top">
          <div>
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="form.userName" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" auto-complete="off" type="text"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="设备类型" :label-width="formLabelWidth">
              <el-input v-model="form.deviceType" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="设备序列号" :label-width="formLabelWidth">
              <el-input v-model="form.deviceSn" auto-complete="off"></el-input>
            </el-form-item>
          </div>
          <span class="top-title">用户信息</span>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUserModify = false">取 消</el-button>
        <el-button type="danger" @click="deletedialogVisible = true">删 除</el-button>
        <el-button type="primary" @click="updateUserData">确定修改</el-button>
      </div>
    </el-dialog>
    <!-- 再次确认新增弹窗 -->
    <el-dialog title="提示" :visible.sync="deletedialogVisible" width="30%">
      <span>确定删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletedialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteUserData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/store/eventbus';
import { updateUser, deleteUser } from '@/api/app.js';
export default {
  name: 'dialogAddUser',
  data() {
    return {
      dialogUserModify: false,
      deletedialogVisible: false,
      formLabelWidth: '180px',
      userData: '',
      form: {
        userName: '',
        password: '',
        deviceType: '',
        deviceSn: ''
      }
    };
  },
  methods: {
    updateUserData() {
      if (
        this.form.password === this.userData.password &&
        this.form.deviceType === this.userData.deviceType &&
        this.form.deviceSn === this.userData.deviceSn
      ) {
        this.dialogUserModify = false;
      } else {
        updateUser(
          this.form.id,
          this.form.password,
          this.form.deviceType,
          this.form.deviceSn
        ).then(
          response => {
            console.log(JSON.stringify(response));
            this.dialogUserModify = false;
            bus.$emit('RefreshAfterUpdated', true);
            this.message('更新用户信息成功!', 'success');
          },
          reject => {
            this.dialogUserModify = false;
            this.message('更新用户信息失败!', 'error');
          }
        );
      }
    },
    deleteUserData() {
      deleteUser(this.form.id).then(
        response => {
          bus.$emit('RefreshAfterDeletion', true);
          this.deletedialogVisible = false;
          this.dialogUserModify = false;
          this.message('删除用户成功!', 'success');
        },
        reject => {
          this.deletedialogVisible = false;
          this.dialogUserModify = false;
          this.message('删除用户失败!', 'error');
        }
      );
    },
    //element提示控件方法
    message(v, type) {
      this.$message({
        showClose: true,
        message: v,
        type: type,
        duration: 2000
      });
    }
  },
  mounted() {
    //  箭头函数作用域
    bus.$on('currentUserData', reg => {
      this.dialogUserModify = true;
      this.userData = reg;
      this.form = JSON.parse(JSON.stringify(reg));
    });
  }
};
</script>
<style>
.adduser-top {
  width: 100%;
  height: 160px;
  border: 1px solid #ddd;
  padding-top: 30px;
  position: relative;
  display: flex;
}
.adduser-top > div {
  width: 50%;
}
.adduser-top .el-form-item__label {
  width: 90px !important;
}
.adduser-top .el-form-item--medium .el-form-item__content {
  margin-left: 90px !important;
}
.adduser-top .el-input {
  width: 200px;
}
.adduser-top .el-form-item {
  margin-bottom: 10px;
}
.adduser-top .el-checkbox {
  position: relative;
  top: -5px;
  left: -10px;
}
.top-title {
  display: block;
  text-align: center;
  padding: 0 4px;
  background: white;
  position: absolute;
  top: -12px;
  left: 8px;
  font-size: 16px;
}
</style>