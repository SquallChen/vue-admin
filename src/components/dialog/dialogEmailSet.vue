
<template>
  <el-dialog title="收货地址" :visible.sync="dialogEmailSet">
    <el-form :model="form">
      <div class="emailSet-top">
        <el-form-item label="发送邮件服务器(SMTP)" :label-width="formLabelWidth">
          <el-input v-model="form.smtp" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="发送邮件服务器端口" :label-width="formLabelWidth">
          <el-input v-model="form.port" auto-complete="off"></el-input>
        </el-form-item>
        <el-checkbox label="SMTP服务器是否需要身份验证" name="type" checked></el-checkbox>
        <el-form-item label="用户" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="SMTP-邮件帐号" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </div>
      <div class="emailSet-bottom">
        <el-form-item label="接收报警邮件帐号">
          <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogEmailSet = false">取 消</el-button>
      <el-button type="primary" @click="dialogEmailSet = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'dialogParameterSet',
  data() {
    return {
      dialogEmailSet: false,
      formLabelWidth: '180px',
      value: '',
      form: {
        smtp: 'smtp.163.com',
        port: '25',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [
        {
          value: 'auto',
          label: 'auto'
        },
        {
          value: 'Novatel',
          label: 'Novatel'
        }
      ],
      formInline: {
        user1: '90',
        user2: '1500'
      }
    };
  },
  mounted() {
    //  箭头函数作用域，自己百度。
    bus.$on('changeEmailSet', reg => {
      this.dialogEmailSet = reg;
    });
  }
};
</script>
<style scoped>
.emailSet-top {
  width: 100%;
  height: 270px;
  border: 1px solid #ddd;
  padding-left: 50px;
  padding-top: 10px;
}
.emailSet-top .el-input {
  width: 260px;
}
.emailSet-top .el-form-item {
  margin-bottom: 10px;
}
.emailSet-top .el-checkbox {
  position: relative;
  top: -5px;
  left: -10px;
}
.emailSet-bottom {
  width: 100%;
  height: 80px;
  padding-left: 106px;
  padding-top: 10px;
}
.emailSet-bottom .el-textarea{
  width:386px;
  height:80px;
}
</style>