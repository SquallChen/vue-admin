<template>
  <el-dialog title="Mount Setting" :visible.sync="dialogMountSet" width="750px">
    <el-form :model="form">
      <div class="mountSet-content">
        <div class="mountSet-top">
          <el-form-item label="Mount Name" :label-width="formLabelWidth">
            <el-input v-model="mountName" auto-complete="off" step="5"></el-input>
          </el-form-item>
          <el-checkbox label="使用" name="isUse" v-model="isUsed"></el-checkbox>
          <el-select v-model="mountTypeValue" placeholder="">
            <el-option v-for="item in mountType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mountSet-bottom">
          <div class="left-bottom">
            <div class="first-div">
              <el-checkbox name="rtcm23Type" :disabled="mountTypeValue!=0" v-model="RTCM23type1">TYPE1</el-checkbox>
              <el-checkbox name="rtcm23Type" :disabled="mountTypeValue!=0" v-model="RTCM23type3" >TYPE3</el-checkbox>
              <el-checkbox name="rtcm23Type" :disabled="mountTypeValue!=0" v-model="RTCM23type1819" >TYPE1819</el-checkbox>
              <el-checkbox name="rtcm23Type" :disabled="mountTypeValue!=0" v-model="RTCM23type31">TYPE31</el-checkbox>
              <span class="top-title">RTCM23</span>
            </div>
            <div class="second-div">
              <el-checkbox  name="mountType" :disabled="mountTypeValue!=2" v-model="CMR0">CMR0</el-checkbox>
              <el-checkbox  name="mountType" :disabled="mountTypeValue!=2" v-model="CMR1">CMR1</el-checkbox>
              <span class="top-title">CMR</span>
            </div>
          </div>
          <div class="right-bottom">
            <span class="top-title">RTCM32</span>
            <div class="first-div">
              <div class="first-div-leftside">
                <el-checkbox name="rtcm32" :disabled="mountTypeValue!=1" v-model="RTCM321005">1005</el-checkbox>
                <el-checkbox name="rtcm32" :disabled="mountTypeValue!=1" v-model="RTCM321004">GPS(1004)</el-checkbox>
                <el-checkbox name="rtcm32" :disabled="mountTypeValue!=1" v-model="RTCM321007">1007</el-checkbox>
                <el-checkbox name="rtcm32" :disabled="mountTypeValue!=1" v-model="RTCM321012">GLO(1012)</el-checkbox>
                <el-checkbox name="rtcm32" :disabled="mountTypeValue!=1" v-model="RTCM321033">1033</el-checkbox>
              </div>
              <div class="first-div-rightside">
                <div>
                  <el-checkbox label="GPS MSM" name="type" :disabled="mountTypeValue!=1" v-model="RTCM32Gps"></el-checkbox>
                  <el-select v-model="GPSvalue" placeholder="" :disabled="mountTypeValue!=1">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox label="GLO MSM" name="type" :disabled="mountTypeValue!=1" v-model="RTCM32Glo"></el-checkbox>
                  <el-select v-model="GLOvalue" placeholder="" :disabled="mountTypeValue!=1">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox label="BDS MSM" name="type" :disabled="mountTypeValue!=1" v-model="RTCM32Bds"></el-checkbox>
                  <el-select v-model="BDSvalue" placeholder="" :disabled="mountTypeValue!=1">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox label="GAL MSM" name="type" :disabled="mountTypeValue!=1" v-model="RTCM32Gal"></el-checkbox>
                  <el-select v-model="GALvalue" placeholder="" :disabled="mountTypeValue!=1">
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
                <el-checkbox name="type" disabled v-model="RTCM32Tranformation">RTCM 3.X Tranformation Parameter Information</el-checkbox>
                <el-checkbox name="type" disabled v-model="RTCM32Paramter">Paramter Variation</el-checkbox>
                <el-select v-model="value2" placeholder="" disabled>
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="inp-content">
                <div>
                  <el-checkbox name="type" disabled v-model="RTCM321021">1021</el-checkbox>
                  <el-input v-model="RTCM321021Second" auto-complete="off" step="5" disabled></el-input>
                  <span>S</span>
                </div>
                <div>
                  <el-checkbox name="type" disabled v-model="RTCM32102510261027">1025/1026/1027</el-checkbox>
                  <el-input v-model="RTCM321025Second" auto-complete="off" step="5" disabled></el-input>
                  <span>S</span>
                </div>
                <div>
                  <el-checkbox name="type" disabled v-model="RTCM321023">1023</el-checkbox>
                  <el-input v-model="RTCM321023Second" auto-complete="off" step="5" disabled></el-input>
                  <span>S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer" style="text-align:center">
      <el-button :disabled="listIndex===0" @click="minusListIndex">&#60;&#60;</el-button>
      <el-button :disabled="listIndex>=mountListLength-1" @click="addListIndex">&#62;&#62;</el-button>
      <el-button >新 增</el-button>
      <el-button disabled>删 除</el-button>
      <el-button @click="dialogMountSet = false">取 消</el-button>
      <el-button type="primary" @click="mountUpdate">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
import { getMountList,UpdateMount } from '@/api/app.js';
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
      id:'',
      mountListData:'',
      mountListLength:'',
      listIndex:0,
      mountName:'',
      mountType:'',
      mountTypeValue:'',
      GPSvalue:0,
      GLOvalue:1,
      BDSvalue:2,
      GALvalue:3,
      listQuery: {
        page_num: 1,
        num_per_page: 10
      },
      mountType:[
        {
          value: 0,
          label: 'RTCM23'
        },
        {
          value: 1,
          label: 'RTCM32'
        },
        {
          value: 2,
          label: 'CMR'
        }
      ],
      options: [
        {
          value: 0,
          label: 'MSM1'
        },
        {
          value: 1,
          label: 'MSM2'
        },
        {
          value: 2,
          label: 'MSM3'
        },
        {
          value: 3,
          label: 'MSM4'
        },
        {
          value: 4,
          label: 'MSM5'
        },
        {
          value: 5,
          label: 'MSM6'
        },
        {
          value: 6,
          label: 'MSM7'
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
      formLabelWidth: '96px',
      isUsed:'',
      CMR0:'',
      CMR1:'',
      RTCM23type1:'',
      RTCM23type3:'',
      RTCM23type31:'',
      RTCM23type1819:'',
      RTCM321005:'',
      RTCM321004:'',
      RTCM321007:'',
      RTCM321012:'',
      RTCM321021:'',
      RTCM321023:'',
      RTCM321033:'',
      RTCM32102510261027:'',
      RTCM32Gps:'',
      RTCM32Glo:'',
      RTCM32Bds:'',
      RTCM32Gal:'',
      RTCM32Tranformation:'',
      RTCM32Paramter:'',
      RTCM321021Second:'',
      RTCM321023Second:'',
      RTCM321025Second:'',
    };
  },
  methods: {
    mouthList(){
      getMountList(this.listQuery.page_num,this.listQuery.num_per_page).then(
        response=>{
          if(response.status===0 && response.totalCount!==0){
            this.mountListData = response.recordList;
            this.mountListLength = response.totalCount;
            this.$options.methods.assignment.bind(this)();
          }
        },
        reject=>{
          console.log('请求失败！');
        }
      )
    },
    addListIndex(){
      this.listIndex+=1;
       this.$options.methods.assignment.bind(this)();
    },
    minusListIndex(){
      this.listIndex-=1;
      this.$options.methods.assignment.bind(this)();
    },
    //如果页面内容无变化，点击关闭；否则请求更新内容
    mountUpdate(){
      if(this.mountName===this.mountListData[this.listIndex].mountName&&this.mountTypeValue===this.mountListData[this.listIndex].mountType && transform(this.CMR0)===this.mountListData[this.listIndex].cmr0 && transform(this.CMR1)===this.mountListData[this.listIndex].cmr1 && transform(this.isUsed)===this.mountListData[this.listIndex].isUsed && transform(this.RTCM23type1)===this.mountListData[this.listIndex].rtcm23Type1 && transform(this.RTCM23type3)===this.mountListData[this.listIndex].rtcm23Type3 && transform(this.RTCM23type31)===this.mountListData[this.listIndex].rtcm23Type31 && transform(this.RTCM23type1819)===this.mountListData[this.listIndex].rtcm23Type1819 && transform(this.RTCM321005)===this.mountListData[this.listIndex].rtcm321005 && transform(this.RTCM321004)===this.mountListData[this.listIndex].rtcm321004 && transform(this.RTCM321007)===this.mountListData[this.listIndex].rtcm321007 && transform(this.RTCM321012)===this.mountListData[this.listIndex].rtcm321012 && transform(this.RTCM321021)===this.mountListData[this.listIndex].rtcm321021 && transform(this.RTCM321023)===this.mountListData[this.listIndex].rtcm321023 && transform(this.RTCM321033)===this.mountListData[this.listIndex].rtcm321033 && transform(this.RTCM32102510261027)===this.mountListData[this.listIndex].rtcm32102510261027 && transform(this.RTCM32Gps)===this.mountListData[this.listIndex].rtcm32Gps && transform(this.RTCM32Glo)===this.mountListData[this.listIndex].rtcm32Glo && transform(this.RTCM32Bds)===this.mountListData[this.listIndex].rtcm32Bds && transform(this.RTCM32Gal)===this.mountListData[this.listIndex].rtcm32Gal && transform(this.RTCM32Paramter)===this.mountListData[this.listIndex].rtcm32Paramter && transform(this.RTCM32Tranformation)===this.mountListData[this.listIndex].rtcm32Tranformation){
        this.dialogMountSet = false;
      }else{
        UpdateMount(this.id,this.mountName,transform(this.isUsed),this.mountTypeValue,transform(this.CMR0),transform(this.CMR1),transform(this.RTCM23type1),transform(this.RTCM23type3),transform(this.RTCM23type1819),transform(this.RTCM23type31),transform(this.RTCM321005),transform(this.RTCM321007),transform(this.RTCM321033),transform(this.RTCM321004),transform(this.RTCM321012),transform(this.RTCM32Gps),transform(this.RTCM32Glo),transform(this.RTCM32Bds),transform(this.RTCM32Gal),transform(this.GPSvalue),transform(this.GLOvalue),transform(this.BDSvalue),transform(this.GALvalue)).then(
        response => {
          console.log(JSON.stringify(response));
          this.dialogMountSet = false;
        },
        reject => {
          console.log('Mount更新失败！');
        }
      );
      }
    },
    // 表单元素赋予默认值方法
    assignment() {
      this.CMR0= this.mountListData[this.listIndex].cmr0===1 ? true : false;
      this.CMR1= this.mountListData[this.listIndex].cmr1===1 ? true : false;
      this.isUsed= this.mountListData[this.listIndex].isUsed===1 ? true : false;
      this.RTCM23type1= this.mountListData[this.listIndex].rtcm23Type1===1 ? true : false;
      this.RTCM23type3= this.mountListData[this.listIndex].rtcm23Type3===1 ? true : false;
      this.RTCM23type31= this.mountListData[this.listIndex].rtcm23Type31===1 ? true : false;
      this.RTCM23type1819= this.mountListData[this.listIndex].rtcm23Type1819===1 ? true : false;
      this.RTCM321005= this.mountListData[this.listIndex].rtcm321005===1 ? true : false;
      this.RTCM321004= this.mountListData[this.listIndex].rtcm321004===1 ? true : false;
      this.RTCM321007= this.mountListData[this.listIndex].rtcm321007===1 ? true : false;
      this.RTCM321012= this.mountListData[this.listIndex].rtcm321012===1 ? true : false;
      this.RTCM321021= this.mountListData[this.listIndex].rtcm321021===1 ? true : false;
      this.RTCM321023= this.mountListData[this.listIndex].rtcm321023===1 ? true : false;
      this.RTCM321033= this.mountListData[this.listIndex].rtcm321033===1 ? true : false;
      this.RTCM32102510261027= this.mountListData[this.listIndex].rtcm32102510261027===1 ? true : false;
      this.RTCM32Gps= this.mountListData[this.listIndex].rtcm32Gps===1 ? true : false;
      this.RTCM32Glo= this.mountListData[this.listIndex].rtcm32Glo===1 ? true : false;
      this.RTCM32Bds= this.mountListData[this.listIndex].rtcm32Bds===1 ? true : false;
      this.RTCM32Gal= this.mountListData[this.listIndex].rtcm32Gal===1 ? true : false;
      this.RTCM32Paramter= this.mountListData[this.listIndex].rtcm32Paramter===1 ? true : false;
      this.RTCM32Tranformation= this.mountListData[this.listIndex].rtcm32Tranformation===1 ? true : false;
      this.id = this.mountListData[this.listIndex].id;
      this.mountName = this.mountListData[this.listIndex].mountName;
      this.mountTypeValue = this.mountListData[this.listIndex].mountType;
      this.GPSvalue = this.mountListData[this.listIndex].rtcm32GpsMsm;
      this.GLOvalue = this.mountListData[this.listIndex].rtcm32GloMsm;
      this.BDSvalue = this.mountListData[this.listIndex].rtcm32BdsMsm;
      this.GALvalue = this.mountListData[this.listIndex].rtcm32GalMsm;
      this.RTCM321021Second = this.mountListData[this.listIndex].rtcm321021Second;
      this.RTCM321023Second = this.mountListData[this.listIndex].rtcm321023Second;
      this.RTCM321025Second = this.mountListData[this.listIndex].rtcm321025Second;

    },
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
  created() {
    // 创建实例时请求数据
     //this.mouthList();
  },
  mounted() {
    //  箭头函数作用域
    bus.$on('changeMountSet', reg => {
      this.dialogMountSet = reg;
      this.mouthList();
    });
  }
};
//布尔值转换
function transform(v){
  if(v===true){
   return v=1;
  }else{
   return v=0;
  }
}
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
      position: relative;
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