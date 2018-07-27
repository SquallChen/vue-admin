
<template>
  <div>
    <el-dialog title="选择时间" :visible.sync="dialogUserTrack" width="670px">
      <div class="usertrack-top">
        <div class="block">
          <span>请选择轨迹日期时间：</span>
          <el-date-picker v-model="SelectedDate" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </div>
        <span class="top-title">选择时间</span>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUserTrack = false">取 消</el-button>
        <el-button type="primary" @click="setTime">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/store/eventbus';
import { updateUser, deleteUser } from '@/api/app.js';
export default {
  name: 'dialogUserTrack',
  data() {
    return {
      SelectedDate: '',
      username: '',
      dialogUserTrack: false,
      formLabelWidth: '180px',
      userData: ''
    };
  },
  methods: {
    setTime() {
      if (this.SelectedDate === '') {
        this.message('日期选择不能为空！', 'error');
      } else {
        this.dialogUserTrack = false;
        let currentTrackData = { name: this.username, time: new Date(this.SelectedDate).getTime()/1000 };
        this.SelectedDate = '';
        bus.$emit('currentTrackData', currentTrackData);
      }
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
    bus.$on('currentUser', reg => {
      this.dialogUserTrack = true;
      this.username = reg;
    });
  }
};
</script>
<style>
.usertrack-top {
  width: 100%;
  height: 100px;
  border: 1px solid #ddd;
  padding-top: 30px;
  position: relative;
  display: flex;
}
.usertrack-top > div {
  width: 100%;
  text-align: center;
}
.usertrack-top .el-form-item__label {
  width: 90px !important;
}
.usertrack-top .el-form-item--medium .el-form-item__content {
  margin-left: 90px !important;
}
.usertrack-top .el-input {
  width: 200px;
}
.usertrack-top .el-form-item {
  margin-bottom: 10px;
}
.usertrack-top .el-checkbox {
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