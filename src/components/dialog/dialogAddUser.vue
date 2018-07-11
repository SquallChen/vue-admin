
<template>
  <el-dialog title="新增用户" :visible.sync="dialogAddUser" width="670px" @close='closeDialog'>
    <el-form :model="form">
      <div class="adduser-top">
        <div>
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.userName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" auto-complete="off" type="password"></el-input>
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
        <span class="top-title">新增用户</span>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogAddUser = false">取 消</el-button>
      <el-button type="primary" @click="addUser">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
import { createUser } from '@/api/app.js';
export default {
  name: 'dialogAddUser',
  data() {
    return {
      dialogAddUser: false,
      formLabelWidth: '180px',
      form: {
        userName: '',
        password: '',
        deviceType: '',
        deviceSn: ''
      },
    };
  },
  methods: {
    addUser() {
      if (this.form.userName === '') {
        this.message('用户名不能为空！', 'error');
        return;
      }
      if (this.form.password === '') {
        this.message('密码不能为空！', 'error');
        return;
      }
      if (this.form.deviceType === '') {
        this.message('设备类型不能为空！', 'error');
        return;
      }
      if (this.form.deviceSn === '') {
        this.message('设备序列号不能为空！', 'error');
        return;
      }
      createUser(this.form.userName,this.form.password,this.form.deviceType,this.form.deviceSn).then(
        response=>{
          this.dialogAddUser = false;
          this.message('用户添加成功！', 'success');
           bus.$emit('RefreshAfterAdd', true);
        },
        reject=>{
          this.dialogAddUser = false;
          this.message('用户添加失败！', 'error');
        }
      )
    },
    //element提示控件方法
    message(v, type) {
      this.$message({
        showClose: true,
        message: v,
        type: type,
        duration: 2000
      });
    },
    //弹窗关闭时触发事件
    closeDialog() {
      this.form.userName = '';
      this.form.password = '';
      this.form.deviceType = '';
      this.form.deviceSn = '';
    }
  },
  mounted() {
    //  箭头函数作用域
    bus.$on('changeAddUser', reg => {
      this.dialogAddUser = reg;
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