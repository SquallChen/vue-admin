<template>
  <el-dialog title="Mount设置" :visible.sync="dialogMountSet">
    <el-form :model="form">

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogServiceSet = false">取 消</el-button>
      <el-button type="primary" @click="dialogMountSet = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'dialogMountSet',
  data() {
    return {
      dialogMountSet: false,
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
    bus.$on('changeMountSet', reg => {
      this.dialogMountSet = reg;
    });
  }
};
</script>
<style>

</style>