
<template>
  <el-dialog title="基站参数设置" :visible.sync="dialogParameterSet" top="24vh">
    <el-form :model="form">
      <div class="top-div">
        <el-checkbox label="基准模式" name="type"></el-checkbox>
        <el-select v-model="value" placeholder="">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" disabled>
          </el-option>
        </el-select>
        <el-checkbox label="存储" name="type"></el-checkbox>
        <el-checkbox label="统计模式" name="type" checked></el-checkbox>
        <span class="top-title">设置延迟模式</span>
      </div>
      <div class="bottom-div">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="基站数据最低有效率" label-width="140px">
            <el-input v-model="formInline.user1"></el-input>
          </el-form-item>
          <span>%</span>
          <el-checkbox label="存储" name="type" checked></el-checkbox>
          <el-form-item label="数据延迟有效<" label-width="140px">
            <el-input v-model="formInline.user2"></el-input>
          </el-form-item>
          <span>毫秒</span>
        </el-form>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogParameterSet = false">取 消</el-button>
      <el-button type="primary" @click="dialogParameterSet = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'dialogParameterSet',
  data() {
    return {
      dialogParameterSet: false,
      formLabelWidth: '120px',
      value: '',
      form: {
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
    bus.$on('changeParameterSet', reg => {
      this.dialogParameterSet = reg;
    });
  }
};
</script>
<style scoped>
.top-div {
  width: 100%;
  height: 100px;
  border: 1px solid #ddd;
  position: relative;
  padding-left: 40px;
  padding-top: 16px;
}
.top-div .el-checkbox {
  width: 120px;
  margin-left: 0;
}
.top-div .el-select {
  margin-right: 70px;
  margin-left: 30px;
}
.bottom-div {
  margin-top: 20px;
  width: 100%;
  height: 100px;
  position: relative;
}
.bottom-div .el-input--medium {
  width: 180px;
}
.bottom-div .el-form-item {
  width: 280px;
}
.bottom-div .el-form-item {
  margin-bottom: 10px;
}
.bottom-div .el-form-item{
  width:454px;
}
.bottom-div span{
  position: relative;
  left:-140px;
  top:5px;
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