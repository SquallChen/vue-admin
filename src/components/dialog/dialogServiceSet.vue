<template>
  <el-dialog title="服务设置" :visible.sync="dialogServiceSet" width="800px">
    <el-form :model="form">
      <div class="service-top">
        <div class="left-top">
          <el-form-item label="Eagle IP" :label-width="formLabelWidth">
            <el-input v-model="form.smtp" auto-complete="off" step="5"></el-input>
          </el-form-item>
          <el-form-item label="Eagle Port" :label-width="formLabelWidth">
            <el-input v-model="form.port" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="right-top">
          <div>
            <el-checkbox label="RTCM2.3(RTK 3 18 19)"></el-checkbox>
          </div>
          <div>
            <el-checkbox label="RTCM2.3(RTD 1 3 31 59)"></el-checkbox>
          </div>
          <div>
            <el-checkbox label="CMR(CMR0 CMR1"></el-checkbox>
          </div>
          <div>
            <el-checkbox label="RTCM3.1(1004 10 12)"></el-checkbox>
          </div>
          <div>
            <el-checkbox label="RTCM3.2" checked></el-checkbox>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <span class="top-title">静态基站</span>
      </div>
      <div class="service-middle">
        <div class="upload">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <div class="service-middle-select">
          <el-checkbox label="1021(Helmert/Abridged Molodenski)" disabled></el-checkbox>
          <el-checkbox label="1025 or 1027(Projection Parameters Messages)" disabled></el-checkbox>
          <el-checkbox label="RTCM 3.X Tranformation Parameter Information"></el-checkbox>
        </div>
        <span class="top-title">RTCM 3.X Tranformation Parameter Information(Helmert/Abridged Molodenski)</span>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogServiceSet = false">取 消</el-button>
      <el-button type="primary" @click="dialogServiceSet = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'dialogServiceSet',
  data() {
    return {
      value: '',
      dialogServiceSet: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      form: {
        name: '',
        region: '',
        smtp: '',
        port: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [
        {
          value: '选项1',
          label: 'MSM1'
        },
        {
          value: '选项2',
          label: 'MSM2'
        },
        {
          value: '选项3',
          label: 'MSM3'
        },
        {
          value: '选项4',
          label: 'MSM4'
        },
        {
          value: '选项5',
          label: 'MSM5'
        }
      ],
      formLabelWidth: '90px'
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  mounted() {
    //  箭头函数作用域，自己百度。
    bus.$on('changeServiceSet', reg => {
      this.dialogServiceSet = reg;
    });
  }
};
</script>
<style scoped>
.service-top {
  width: 100%;
  height: 170px;
  border: 1px solid #ddd;
  position: relative;
  display: flex;
  margin-bottom: 20px;
}
.service-top .left-top {
  width: 45%;
  height: 100%;
  padding-top: 16px;
}
.service-top .left-top .el-input {
  width: 180px;
}
.service-top .right-top {
  padding-top: 10px;
  width: 55%;
  height: 100%;
}
.service-top .right-top div {
  margin-bottom: 4px;
}
.service-middle {
  width: 100%;
  height: 120px;
  border: 1px solid #ddd;
  position: relative;
}
.service-middle .upload-demo{
  display: flex;
  /* flex-direction: row-reverse; */
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
}
.service-middle button{
  margin-right: 20px;
}
.service-middle .el-upload{
  float: right;
}
.service-middle .service-middle-select{
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-top: 8px;
}
.service-middle .service-middle-select label:nth-child(3){
 margin-left: 0;;
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