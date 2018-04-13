<template>
  <el-dialog title="参数设置" :visible.sync="dialogSystemParameterSet">
    <el-form :model="form">

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogSystemParameterSet = false">取 消</el-button>
      <el-button type="primary" @click="dialogSystemParameterSet = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'dialogSystemParameterSet',
  data() {
    return {
      dialogSystemParameterSet: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
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
      formLabelWidth: '120px'
    };
  },

  mounted() {
    //  箭头函数作用域，自己百度。
    bus.$on('changeSystemParameterSet', reg => {
      this.dialogSystemParameterSet = reg;
    });
  }
};
</script>
<style>

</style>