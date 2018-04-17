<template>
  <el-dialog title="Mount Setting" :visible.sync="dialogMountSet" width="750px">
    <el-form :model="form">
      <div class="mountSet-content">
        <div class="mountSet-top">
          <el-form-item label="Mount Name" :label-width="formLabelWidth">
            <el-input v-model="form.smtp" auto-complete="off" step="5" disabled></el-input>
          </el-form-item>
          <el-checkbox label="使用" name="type" checked></el-checkbox>
          <el-select v-model="value" placeholder="" disabled>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mountSet-bottom">
          <div class="left-bottom">
            <div class="first-div">
              <el-checkbox label="TYPE1" name="type"></el-checkbox>
              <el-checkbox label="TYPE3" name="type" checked></el-checkbox>
              <el-checkbox label="TYPE1819" name="type" checked></el-checkbox>
              <el-checkbox label="TYPE31" name="type"></el-checkbox>
              <span class="top-title">RTCM23</span>
            </div>
            <div class="second-div">
              <el-checkbox label="CMR0" name="type" disabled></el-checkbox>
              <el-checkbox label="CMR1" name="type" disabled></el-checkbox>
              <span class="top-title">CMR</span>
            </div>
          </div>
          <div class="right-bottom">
            <div class="first-div">
              <div class="first-div-leftside">
                <el-checkbox label="1005" name="type" disabled></el-checkbox>
                <el-checkbox label="GPS(1004)" name="type" disabled></el-checkbox>
                <el-checkbox label="1007" name="type" disabled></el-checkbox>
                <el-checkbox label="GLO(1012)" name="type" disabled></el-checkbox>
                <el-checkbox label="1033" name="type" disabled></el-checkbox>
              </div>
              <div class="first-div-rightside">
                <div>
                  <el-checkbox label="GPS MSM" name="type" disabled></el-checkbox>
                  <el-select v-model="value" placeholder="" disabled>
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox label="GPS MSM" name="type" disabled></el-checkbox>
                  <el-select v-model="value" placeholder="" disabled>
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox label="GPS MSM" name="type" disabled></el-checkbox>
                  <el-select v-model="value" placeholder="" disabled>
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox label="GPS MSM" name="type" disabled></el-checkbox>
                  <el-select v-model="value" placeholder="" disabled>
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
            <div class="second-div">
              <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList">
                <el-button size="small" type="primary" disabled>点击上传</el-button>
              </el-upload>
            </div>
            <div class="third-div">
              <div>
                <el-checkbox label="RTCM 3.X Tranformation Parameter Information" name="type" disabled></el-checkbox>
                <el-checkbox label="Paramter Variation" name="type" disabled></el-checkbox>
                <el-select v-model="value2" placeholder="" disabled>
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="inp-content">
                <div>
                  <el-checkbox label="1021" name="type" disabled></el-checkbox>
                  <el-input v-model="form.num" auto-complete="off" step="5" disabled></el-input>
                  <span>S</span>
                </div>
                <div>
                  <el-checkbox label="1025/1026/1027" name="type" disabled></el-checkbox>
                  <el-input v-model="form.num" auto-complete="off" step="5" disabled></el-input>
                  <span>S</span>
                </div>
                <div>
                  <el-checkbox label="1023" name="type" disabled></el-checkbox>
                  <el-input v-model="form.num" auto-complete="off" step="5" disabled></el-input>
                  <span>S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer" style="text-align:center">
      <el-button disabled><<</el-button>
      <el-button>>></el-button>
      <el-button >新 增</el-button>
      <el-button disabled>删 除</el-button>
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
      value: 'RTCM2.3',
      value2: '每次连接',
      form: {
        smtp: 'RTCM23',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        num: '7'
      },
      fileList: [],
      options: [
        {
          value: '选项1',
          label: 'RTCM23'
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
      options2: [
        {
          value: '选项1',
          label: '每次连接'
        },
        {
          value: '选项2',
          label: 'MSM2'
        },
        {
          value: '选项3',
          label: 'MSM3'
        }
      ],
      formLabelWidth: '96px'
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
    bus.$on('changeMountSet', reg => {
      this.dialogMountSet = reg;
    });
  }
};
</script>
<style lang="scss" scoped>
.mountSet-content {
  width: 100%;
  .mountSet-top {
    height: 40px;
    display: flex;
    label {
      height: 24px;
      position: relative;
      top: 7px;
      margin-left: 20px;
      margin-right: 30px;
    }
  }
  .mountSet-bottom {
    width: 100%;
    margin-top: 10px;
    display: flex;
    .left-bottom {
      width: 20%;
      margin-right: 8px;
      label {
        display: block;
      }
      .first-div {
        min-height: 160px;
        padding-top: 10px;
        padding-left: 10px;
        border: 1px solid #ddd;
        position: relative;
        margin-bottom: 16px;
      }
      .second-div {
        position: relative;
        min-height: 240px;
        padding-top: 10px;
        padding-left: 10px;
        border: 1px solid #ddd;
      }
      .el-checkbox + .el-checkbox {
        margin-left: 0;
      }
    }
    .right-bottom {
      width: 78%;
      border: 1px solid #ddd;
      div {
        width: 100%;
      }
      .first-div {
        display: flex;
        min-height: 170px;
        padding-top: 10px;
        padding-left: 10px;
        .first-div-leftside {
          width: 45%;
          padding-top: 10px;
          label {
            width: 100px;
          }
        }
        .first-div-rightside {
          width: 55%;
          padding-top: 10px;
          padding-left: 10px;
          // display: flex;
          label {
            width: 100px;
            margin-right: 10px;
          }
          .el-select {
            width: 168px;
            position: relative;
            top: -2px;
            margin-bottom: 4px;
          }
        }
      }
      .second-div {
        input {
          outline: none;
        }
        .upload-demo {
          display: flex;
          margin-top: 20px;
          margin-right: 10px;
          margin-left: 10px;
        }
      }
      .third-div {
        > div {
          padding-top: 10px;
          padding-left: 10px;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          .el-input {
            width: 180px;
            position: relative;
            top: -5px;
          }
          .el-form-item {
            width: 180px;
          }
          label {
            height: 20px;
          }
          span {
            margin-left: 5px;
          }
        }
        div:nth-child(2) {
          .el-input {
            width: 80px;
            margin-left: -34px;
          }
        }
        .el-select {
          width: 180px;
          position: relative;
          top: -6px;
        }
        label {
          margin-right: 50px;
          margin-bottom: 12px;
        }
        .inp-content {
          display: flex;
          div{
            width:240px;
            margin-bottom: 5px;
          }
        }
      }
      .el-checkbox + .el-checkbox {
        margin-left: 0;
      }
    }
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
}
</style>