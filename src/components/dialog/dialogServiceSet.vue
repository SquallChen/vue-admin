<template>
  <el-dialog title="服务设置" :visible.sync="dialogServiceSet" width="800px" top="5vh">
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
      <div class="service-bottom">
        <div class="leftside">
          <div class="left-top">
            <el-form-item label="" class="first-select">
              <el-select v-model="value1" placeholder="">
                <el-option v-for="item in filesetting" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <span>Filename Format</span>
            <el-form-item label="" class="second-select">
              <el-select v-model="value2" placeholder="">
                <el-option v-for="item in filename" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="采样间隔" label-width="120px">
              <el-select v-model="value3" placeholder="">
                <el-option v-for="item in samplingInterval" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="时段" label-width="120px">
              <el-select v-model="value4" placeholder="">
                <el-option v-for="item in period" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <span class="top-title">File Save Setting</span>
          </div>
          <div class="left-bottom">
            <div>
              <el-checkbox label="程序开机启动" checked></el-checkbox>
            </div>
            <div>
              <el-checkbox label="自动开启服务" checked></el-checkbox>
            </div>
            <div>
              <el-checkbox label="软件更新推送" checked></el-checkbox>
            </div>
            <span class="top-title">启动设置</span>
          </div>
        </div>
        <div class="rightside">
          <div class="right-top">
            <div class="serviceIp">
              <el-form-item label="服务端口" label-width="100px">
                <el-input v-model="form.ip" auto-complete="off" step="5"></el-input>
              </el-form-item>
              <el-checkbox label="IPV6"></el-checkbox>
            </div>
            <el-checkbox label="Deep-NRS" class="deep-nrs"></el-checkbox>
            <span class="top-title">NRS Setting</span>
          </div>
          <div class="right-bottom">
            <div class="checkbox">
              <el-checkbox label="AccessDatabase" checked disabled></el-checkbox>
              <el-checkbox label="使用SQL Server" disabled></el-checkbox>
              <el-checkbox label="使用MySQL" disabled></el-checkbox>
            </div>
            <div class="inp">
              <el-form-item label="Server IP" :label-width="formLabelWidth2">
                <el-input v-model="form.serverIp" auto-complete="off" step="5" disabled></el-input>
              </el-form-item>
              <el-form-item label="Server PORT" :label-width="formLabelWidth2">
                <el-input v-model="form.port" auto-complete="off" step="5" disabled></el-input>
              </el-form-item>
              <el-form-item label="User Name" :label-width="formLabelWidth2">
                <el-input v-model="form.name" auto-complete="off" step="5" disabled></el-input>
              </el-form-item>
              <el-form-item label="User Password" :label-width="formLabelWidth2">
                <el-input v-model="form.password" auto-complete="off" step="5" disabled></el-input>
              </el-form-item>
              <el-form-item label="SQL DB name" :label-width="formLabelWidth2">
                <el-input v-model="form.DBname" auto-complete="off" step="5" disabled></el-input>
              </el-form-item>
            </div>
            <span class="top-title">Microsoft SQL</span>
          </div>
        </div>
      </div>
    </el-form>
    <div class="serviceset-footer">
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogServiceSet = false">确 定</el-button>
      </div>
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
      value1: 'Rinex 3.03 Save',
      value2: 'Auto',
      value3: '1',
      value4: '1',
      dialogServiceSet: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      form: {
        name: 'root',
        region: '',
        smtp: '',
        port: '3306',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        ip: '6800',
        serverIp: '127.0.0.1',
        password: '',
        DBname: 'EagleCors'
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
      filesetting: [
        {
          value: '选项1',
          label: 'None'
        },
        {
          value: '选项2',
          label: 'Rinex 2.10 Save'
        },
        {
          value: '选项3',
          label: 'Rinex 3.02 Save'
        },
        {
          value: '选项4',
          label: 'Rinex 3.03 Save'
        }
      ],
      filename: [
        {
          value: '选项1',
          label: 'Auto'
        },
        {
          value: '选项2',
          label: 'Rinex 2.XX Exchange of File'
        },
        {
          value: '选项3',
          label: 'Rinex 3.XX Exchange of File'
        }
      ],
      samplingInterval: [
        {
          value: 'original',
          label: 'original'
        },
        {
          value: '1',
          label: '1'
        },
        {
          value: '5',
          label: '5'
        },
        {
          value: '10',
          label: '10'
        },
        {
          value: '15',
          label: '15'
        },
        {
          value: '30',
          label: '30'
        },
        {
          value: '60',
          label: '60'
        }
      ],
      period: [
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '4',
          label: '4'
        },
        {
          value: '8',
          label: '8'
        },
        {
          value: '24',
          label: '24'
        }
      ],
      formLabelWidth: '90px',
      formLabelWidth2: '140px'
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
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
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
.service-middle .upload-demo {
  display: flex;
  /* flex-direction: row-reverse; */
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
}
.service-middle button {
  margin-right: 20px;
}
.service-middle .el-upload {
  float: right;
}
.service-middle .service-middle-select {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-top: 8px;
}
.service-middle .service-middle-select label:nth-child(3) {
  margin-left: 0;
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
.service-bottom {
  display: flex;
  margin-top: 20px;
}
.leftside {
  width: 40%;
}
.leftside .left-top {
  height: 240px;
  border: 1px solid #ddd;
  position: relative;
  padding-left: 10px;
  padding-top: 20px;
}

/* .el-select控制select长度 */

.leftside .first-select .el-select {
  width: 220px;
}
.leftside .second-select .el-select {
  width: 274px;
}
.leftside .el-select {
  width: 100px;
}
/* .el-form-item控制select的margin-bottom */
.leftside .left-top .el-form-item {
  margin-bottom: 8px;
}
/* 添加class以控制第一个div的额外设置margin-bottom */
.leftside .left-top .first-select {
  margin-bottom: 0;
}

.leftside .left-bottom {
  height: 110px;
  border: 1px solid #ddd;
  position: relative;
  margin-top: 20px;
  padding: 20px 10px;
}
.rightside {
  width: 60%;
  margin-left: 20px;
}
.rightside .right-top {
  position: relative;
  padding-top: 20px;
  height: 100px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
/* el-input设置input宽度 */
.rightside .right-top .el-input {
  width: 140px;
  margin-right: 15px;
}
.rightside .right-top label {
  height: 36px;
  position: relative;
  padding-top: 6px;
}
.rightside .right-top .serviceIp {
  display: flex;
}
.rightside .right-top .el-form-item {
  margin-bottom: 5px;
}
.rightside .right-top .deep-nrs {
  margin-left: 100px;
}
.rightside .right-bottom {
  padding-top: 10px;
  padding-left: 10px;
  height: 250px;
  border: 1px solid #ddd;
  position: relative;
}
.rightside .right-bottom .el-checkbox + .el-checkbox {
  margin-left: 24px;
}
.rightside .right-bottom .el-input {
  width: 240px;
}
.rightside .right-bottom .el-form-item {
  margin-bottom: 6px;
}
.rightside .right-bottom .inp {
  margin-top: 4px;
}
.serviceset-footer{
  text-align: right;
  position: relative;
  top:15px;
}
</style>