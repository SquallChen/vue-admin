
<template>
  <el-dialog title="短信设置" :visible.sync="dialogSMSSet" width="620px">
    <el-form :model="form">
      <div class="SMSSet-top">
        <div>
           <el-checkbox label="使用SQL Server" name="type"></el-checkbox>
            <el-checkbox label="使用MySQL" name="type" checked></el-checkbox>
        </div>
        <el-form-item label="Server IP" :label-width="formLabelWidth">
          <el-input v-model="form.ip" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Server PORT" :label-width="formLabelWidth">
          <el-input v-model="form.port" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="User Name" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="User Password" :label-width="formLabelWidth">
          <el-input v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="SQL DB Name" :label-width="formLabelWidth">
          <el-input v-model="form.sql" auto-complete="off"></el-input>
        </el-form-item>
        <span class="top-title">Microsoft SQL</span>
      </div>
      <div class="SMSSet-bottom">
        <el-form-item label="接收短信手机号" :label-width="formLabelWidth">
          <el-input v-model="form.num" auto-complete="off"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogSMSSet = false">测试连接</el-button>
      <el-button @click="dialogSMSSet = false">取 消</el-button>
      <el-button type="primary" @click="dialogSMSSet = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'dialogSMSSet',
  data() {
    return {
      dialogSMSSet: false,
      formLabelWidth: '150px',
      value: '',
      form: {
        ip: '127.0.0.1',
        port: '3306',
        name: 'root',
        password: '',
        sql: 'EahleCors',
        num: '',
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
    bus.$on('changeSMSSet', reg => {
      this.dialogSMSSet = reg;
    });
  }
};
</script>
<style scoped>
.SMSSet-top {
  width: 100%;
  height: 280px;
  border: 1px solid #ddd;
  padding-left: 30px;
  padding-top: 20px;
  position: relative;
}
.SMSSet-top .el-input {
  width: 260px;
}
.SMSSet-top .el-form-item {
  margin-bottom: 10px;
}
.SMSSet-top .el-checkbox {
  position: relative;
  top: -5px;
  left: -10px;
}
.SMSSet-bottom {
  width: 100%;
  padding-left: 30px;
  padding-top: 10px;
  margin-bottom: -20px;
}
.SMSSet-bottom .el-input{
  margin-top: 4px;
  width:261px;
  height:80px;
  margin-bottom: -50px;
}
.dialog-footer{
text-align: center;
margin-top: -10px;
}
.dialog-footer button{
  margin-right: 20px;
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