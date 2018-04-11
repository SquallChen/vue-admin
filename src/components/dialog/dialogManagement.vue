<template>
  <el-dialog title="收货地址" :visible.sync="this.$store.state.dialogManagement">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="ClosedialogForm">取 消</el-button>
      <el-button type="primary" @click="ClosedialogForm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialogManagement',
  methods: {
    ClosedialogForm() {
      // this.$store.commit('DialogManagementChange');
     this.$store.dispatch('toggleTest');
      // console.log(this.$store);
      // this.$store.dispatch('actionLogin', this.loginForm)
    }
  },
  created() {},
  data() {
    return {
      toggleFalg: true,
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      dialogManagement: false,
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
  }
};
</script>
<style>

</style>