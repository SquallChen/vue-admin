<template>
  <el-dialog title="Star Set" :visible.sync="dialogSatelliteSet" width="942px">
    <el-form :model="form">
      <div class="satelliteSet-content">
        <div class="leftside">
          <div>
            <div class="checkbox-content">
              <el-checkbox name="type" v-for="(item,index) in GpsSet" :key="index" v-model="item.value">{{item.name}}</el-checkbox>
            </div>
            <div class="button-content">
              <el-button @click="selectAll('GpsSet')">USE ALL</el-button>
              <el-button @click="unselectAll('GpsSet')">Forbid ALL</el-button>
            </div>
            <span class="top-title">GPS</span>
          </div>
          <div>
            <div class="checkbox-content">
              <el-checkbox name="type" v-for="(item,index) in GlonassSet" :key="index" v-model="item.value">{{item.name}}</el-checkbox>
            </div>
            <div class="button-content">
              <el-button @click="selectAll('GlonassSet')">USE ALL</el-button>
              <el-button @click="unselectAll('GlonassSet')">Forbid ALL</el-button>
            </div>
            <span class="top-title">GLONASS</span>
          </div>
          <div>
            <div class="checkbox-content">
              <el-checkbox name="type" v-for="(item,index) in BdSet" :key="index" v-model="item.value">{{item.name}}</el-checkbox>
            </div>
            <div class="button-content">
              <el-button @click="selectAll('BdSet')">USE ALL</el-button>
              <el-button @click="unselectAll('BdSet')">Forbid ALL</el-button>
            </div>
            <span class="top-title">Beidou</span>
          </div>
          <div>
            <div class="checkbox-content">
              <el-checkbox name="type" v-for="(item,index) in GalieoSet" :key="index" v-model="item.value">{{item.name}}</el-checkbox>
            </div>
            <div class="button-content">
              <el-button @click="selectAll('GalieoSet')">USE ALL</el-button>
              <el-button @click="unselectAll('GalieoSet')">Forbid ALL</el-button>
            </div>
            <span class="top-title">Galieo</span>
          </div>
        </div>
        <div class="rightside">
          <div>
            <el-checkbox name="type" v-for="(item,index) in GpsSingal" :key="index" v-model="item.value">{{item.name}}</el-checkbox><br/>
            <span class="top-title">GPS RTCM3.2 MSM Singal ID</span>
          </div>
          <div class="glonass">
            <el-checkbox name="type" v-for="(item,index) in GlonassSingal" :key="index" v-model="item.value">{{item.name}}</el-checkbox><br/>
            <span class="top-title">GLONASS RTCM3.2 MSM Singal ID</span>
          </div>
          <div class="bds">
            <div class="firstdiv">
              <el-checkbox name="type" v-for="(item,index) in BdsSingal" :key="index" v-model="item.value">{{item.name}}</el-checkbox><br/>
            </div>
            <div class="seconddiv">
              <span class="BDS-title">b1</span>
              <span class="BDS-title">b2</span>
              <span class="BDS-title">b3</span>
            </div>
            <span class="top-title">BDS RTCM3.2 Singal ID</span>
          </div>
          <div class="Galieo">
            <el-checkbox name="type" v-for="(item,index) in GalieoSingal" :key="index" v-model="item.value">{{item.name}}</el-checkbox><br/>
            <span class="top-title">GAL RTCM3.2 MSM Singal ID</span>
          </div>
        </div>
        <div class="bottom">
          <el-checkbox label="Synchronization Solution" name="type"></el-checkbox>
        </div>
      </div>
    </el-form>
    <div class="test">
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSatelliteSet = false">CANCEL</el-button>
        <el-button type="primary" @click="update">OK</el-button>
      </div>
    </div>

  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
import { getSatelliteSetting, upDateSatelliteSetting } from '@/api/app.js';
export default {
  name: 'dialogSatelliteSet',
  data() {
    return {
      dialogSatelliteSet: false,
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
      formLabelWidth: '120px',
      GpsSet: [],
      GlonassSet: [],
      BdSet: [],
      GalieoSet: [],
      GpsSingal: [],
      GlonassSingal: [],
      BdsSingal: [],
      GalieoSingal: []
    };
  },
  methods: {
    //更新卫星数据
    update() {
      let gpsSetL = this.GpsSet.length;
      let glonassSetL = this.GlonassSet.length;
      let bdSetL = this.BdSet.length;
      let galieoSetL = this.GalieoSet.length;
      let gpsSingalL = this.GpsSingal.length;
      let glonassSingalL = this.GlonassSingal.length;
      let bdSingalL = this.BdsSingal.length;
      let galieoSingalL = this.GalieoSingal.length;
      let gpsSetStr = '', glonassSetStr = '', bdSetStr = '', galieoSetStr = '',gpsSingalStr = '', glonassSingalStr = '', bdSingalStr = '',galieoSingalStr = '';
      //获取现有数据，重新拼接成字符串，并去掉最后一个多余的逗号
      for (let i = 0; i < gpsSetL; i++) {
        gpsSetStr += this.GpsSet[i].name + ':' + this.backToNum(this.GpsSet[i].value) + ',';
      }
      gpsSetStr=gpsSetStr.substring(0,gpsSetStr.length-1);
      for (let i = 0; i < glonassSetL; i++) {
        glonassSetStr += this.GlonassSet[i].name + ':' + this.backToNum(this.GlonassSet[i].value) + ',';
      }
      glonassSetStr=glonassSetStr.substring(0,glonassSetStr.length-1);
      for (let i = 0; i < bdSetL; i++) {
        bdSetStr += this.BdSet[i].name + ':' + this.backToNum(this.BdSet[i].value) + ',';
      }
      bdSetStr=bdSetStr.substring(0,bdSetStr.length-1);
      for (let i = 0; i < galieoSetL; i++) {
        galieoSetStr += this.GalieoSet[i].name + ':' + this.backToNum(this.GalieoSet[i].value) + ',';
      }
      galieoSetStr=galieoSetStr.substring(0,galieoSetStr.length-1);
      for (let i = 0; i < gpsSingalL; i++) {
        gpsSingalStr += this.GpsSingal[i].name + ':' + this.backToNum(this.GpsSingal[i].value) + ',';
      }
      gpsSingalStr=gpsSingalStr.substring(0,gpsSingalStr.length-1);
      for (let i = 0; i < glonassSingalL; i++) {
        glonassSingalStr += this.GlonassSingal[i].name + ':' + this.backToNum(this.GlonassSingal[i].value) + ',';
      }
       glonassSingalStr=glonassSingalStr.substring(0,glonassSingalStr.length-1);
      for (let i = 0; i < bdSingalL; i++) {
        bdSingalStr += this.BdsSingal[i].name + ':' + this.backToNum(this.BdsSingal[i].value) + ',';
      }
      bdSingalStr=bdSingalStr.substring(0,bdSingalStr.length-1);
      for (let i = 0; i < galieoSingalL; i++) {
        galieoSingalStr += this.GalieoSingal[i].name + ':' + this.backToNum(this.GalieoSingal[i].value) + ',';
      }
      galieoSingalStr=galieoSingalStr.substring(0,galieoSingalStr.length-1);
      var tempGroup = [
        {
          key: 'glonass_setting',
          value: glonassSetStr
        },
        {
          key: 'gps_setting',
          value: gpsSetStr
        },
        {
          key: 'bd_setting',
          value: bdSetStr
        },
        {
          key: 'galieo_setting',
          value: galieoSetStr
        },
        {
          key: 'gps_singal',
          value: gpsSingalStr
        },
        {
          key: 'glonass_singal',
          value: glonassSingalStr
        },
        {
          key: 'bd_singal',
          value: bdSingalStr
        },
        {
          key: 'galieo_singal',
          value: galieoSingalStr
        }
      ];
      upDateSatelliteSetting(JSON.stringify(tempGroup)).then(
        response=>{
          this.dialogSatelliteSet = false;
          this.message('更新成功!', 'success');
          console.log(JSON.stringify(response));
        },
        reject=>{
          dialogSatelliteSet = false;
          this.message('更新失败!', 'error');
          console.log(JSON.stringify(reject));
        }
      )
    },
    //全选
    selectAll(v) {
      if (v === 'GpsSet') {
        let leng = this.GpsSet.length;
        for (var i = 0; i < leng; i++) {
          this.GpsSet[i].value = true;
        }
      } else if (v === 'GlonassSet') {
        let leng = this.GlonassSet.length;
        for (var i = 0; i < leng; i++) {
          this.GlonassSet[i].value = true;
        }
      } else if (v === 'BdSet') {
        let leng = this.BdSet.length;
        for (var i = 0; i < leng; i++) {
          this.BdSet[i].value = true;
        }
      } else {
        let leng = this.GalieoSet.length;
        for (var i = 0; i < leng; i++) {
          this.GalieoSet[i].value = true;
        }
      }
    },
    //全不选
    unselectAll(v) {
      if (v === 'GpsSet') {
        var leng = this.GpsSet.length;
        for (var i = 0; i < leng; i++) {
          this.GpsSet[i].value = false;
        }
      } else if (v === 'GlonassSet') {
        let leng = this.GlonassSet.length;
        for (var i = 0; i < leng; i++) {
          this.GlonassSet[i].value = false;
        }
      } else if (v === 'BdSet') {
        let leng = this.BdSet.length;
        for (var i = 0; i < leng; i++) {
          this.BdSet[i].value = false;
        }
      } else {
        let leng = this.GalieoSet.length;
        for (var i = 0; i < leng; i++) {
          this.GalieoSet[i].value = false;
        }
      }
    },
    //获取卫星数据并处理成数组形式
    SatelliteSettingData() {
      getSatelliteSetting().then(
        response => {
          let tempData = response.satelliteSetting;
          let leng = tempData.length;
          for (var i = 0; i < leng; i++) {
            if (tempData[i].key === 'gps_setting') {
              var tempGpsSet = tempData[i].value;
            } else if (tempData[i].key === 'glonass_setting') {
              var tempGlonassSet = tempData[i].value;
            } else if (tempData[i].key === 'bd_setting') {
              var tempBdSet = tempData[i].value;
            } else if (tempData[i].key === 'galieo_setting') {
              var tempGalieoSet = tempData[i].value;
            } else if (tempData[i].key === 'gps_singal') {
              var tempGpsSingal = tempData[i].value;
            } else if (tempData[i].key === 'glonass_singal') {
              var tempGlonassSingal = tempData[i].value;
            } else if (tempData[i].key === 'bd_singal') {
              var tempBdsSingal = tempData[i].value;
            } else if (tempData[i].key === 'galieo_singal') {
              var tempGalieoSingal = tempData[i].value;
            }
          }
          this.GpsSet = this.transform(tempGpsSet);
          this.GlonassSet = this.transform(tempGlonassSet);
          this.BdSet = this.transform(tempBdSet);
          this.GalieoSet = this.transform(tempGalieoSet);
          this.GpsSingal = this.transform(tempGpsSingal);
          this.GlonassSingal = this.transform(tempGlonassSingal);
          this.BdsSingal = this.transform(tempBdsSingal);
          this.GalieoSingal = this.transform(tempGalieoSingal);
        },
        reject => {
          this.message('获取卫星设置数据失败!', 'error');
        }
      );
    },
    //将字符串数据转换成数据形式，并将1,0以true false形式展现
    transform(v) {
      var tempGroup = v.split(',');
      var groupData = [];
      let leng = tempGroup.length;
      for (var i = 0; i < leng; i++) {
        groupData.push(this.convertTo(tempGroup[i]));
      }
      return groupData;
    },
    //将数组中的字符串参数处理成数组形式
    convertTo(v) {
      let leng = v.length;
      let temp = {
        name: v.substring(leng - 2, -2),
        value: this.trueOfFlase(v.substring(leng - 1))
      };
      return (v = temp);
    },
    trueOfFlase(v) {
      return v == 1 ? true : false;
    },
    backToNum(v) {
      return v == true ? 1 : 0;
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
    bus.$on('changeSatelliteSet', reg => {
      this.dialogSatelliteSet = reg;
      this.SatelliteSettingData();
    });
  }
};
</script>
<style  lang="scss" scoped>
.satelliteSet-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .leftside {
    width: 60%;

    margin-right: 6px;
    > div {
      min-height: 108px;
      border: 1px solid #ddd;
      position: relative;
      width: 100%;
      display: flex;
      margin-bottom: 20px;
    }
    .checkbox-content {
      width: 80%;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      label {
        height: 22px;
        width: 40px;
      }
    }
    .button-content {
      width: 20%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      button {
        margin-bottom: 1px;
        margin-top: 1px;
      }
      .el-button--medium {
        padding: 10px;
        min-width: 90px;
      }
      .el-button + .el-button {
        margin-left: 0px;
      }
    }
    .el-checkbox {
      margin-right: 12px;
    }
    .el-checkbox + .el-checkbox {
      margin-left: 0;
    }
  }
  .rightside {
    width: 39%;
    > div {
      min-height: 109px;
      position: relative;
      width: 100%;
      border: 1px solid #ddd;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 10px;
      margin-bottom: 20px;
      label {
        height: 22px;
        width: 54px;
      }
      .BDS-title {
        margin-left: 26px;
      }
    }
    .glonass {
      padding-right: 200px;
    }
    .bds {
      display: flex;
      flex-wrap: wrap;
      .firstdiv {
        width: 210px;
      }
      .seconddiv {
        display: flex;
        flex-direction: column;
      }
    }
    .Galieo {
      padding-right: 60px;
    }
    .el-checkbox + .el-checkbox {
      margin-left: 0;
    }
  }
  .bottom {
    width: 100%;
    padding-left: 80px;
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
.test {
  text-align: right;
  position: relative;
}
</style>