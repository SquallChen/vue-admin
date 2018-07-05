<template>
  <div class="container">
    <div class="topside">
      <x-chart :id="id" :option="option"></x-chart>
    </div>
    <div class="bottomside">
      <ul>
        <li>Station : {{receiverData.baseStationId}}</li>
        <!-- <li>{{receiverData.baseStationId}}</li> -->
        <li>Lincense : {{receiverData.lincenseDate}}</li>
        <li>
          <el-checkbox label="Invaild Lincense" name="type"></el-checkbox>
        </li>
      </ul>
      <div class="bottom-ui">
        <ul>
          <li>OEM Temp.[RED] :&nbsp;&nbsp;&nbsp;&nbsp;{{receiverData.oemTemp}}</li>
          <li>Receive Temp.[YELLOW] :&nbsp;&nbsp;&nbsp;&nbsp;{{receiverData.receiverTemp}}</li>
          <li>OutSide Temp .[WHITE] :&nbsp;&nbsp;&nbsp;&nbsp;{{receiverData.outsideTemp}}</li>
          <li>Battery Voltage :&nbsp;&nbsp;&nbsp;&nbsp;{{receiverData.bataryVol}}</li>
          <li>External Power Voltage :&nbsp;&nbsp;&nbsp;&nbsp;{{receiverData.externalPowerVol}}</li>
        </ul>
        <ul>
          <li>
            <el-checkbox label="low Memory" name="type"></el-checkbox>
          </li>
          <li>
            <el-checkbox label="Low storage" name="type"></el-checkbox>
          </li>
          <li>
            <el-checkbox label="Low Batary" name="type"></el-checkbox>
          </li>
          <li>
            <el-checkbox label="External power" name="type"></el-checkbox>
          </li>
        </ul>
      </div>
      <div class="bottom-contant">
        <el-checkbox label="Log Disp" name="type"></el-checkbox>
        <el-checkbox label="Data Analysis" name="type"></el-checkbox>
        <el-checkbox label="Text" name="type"></el-checkbox>
        <el-checkbox label="Bin" name="type"></el-checkbox>
        <el-select v-model="value" placeholder="">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-checkbox label="Bin" name="type"></el-checkbox>
        <el-button type="primary">Send</el-button>
      </div>

    </div>
  </div>
</template>

<script>
// 导入chart组件
import XChart from '@/components/highcharts/chart.vue';
// 导入chart组件模拟数据
import options from '@/components/highcharts/chart-options/options';
import bus from '@/store/eventbus';
import { getReceiverStatus } from '@/api/app.js';
export default {
  name: 'receiverStatus',
  data() {
    const option = options.test3;
    return {
      value: '',
      id: 'test',
      option: option,
      stationId:'',
      receiverData:'',
      outsideTemp:'',
      externalPowerVol:'',
      receiverTemp:'',
      bataryVol:'',
      baseStationId:'',
      lincenseDate:'',
      oemTemp:'',
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
      ]
    };
  },
  created() {

  },
  mounted() {
    // 获取当前点击的基站ID信息
    bus.$on('currentBaseStationsId', reg => {
      this.stationId = reg;
       this.receiverStatus();
    });
  },
   methods: {
    receiverStatus() {
      getReceiverStatus(this.stationId).then(
        response => {
           if(response.status===0&&response.receiverStatus.length!==0){
             this.receiverData = response.receiverStatus;
           }
        },
        reject => {
          console.log('请求失败！');
        }
      );
    }
  },
  components: {
    XChart
  }
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0;
}
.container {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;
  .topside {
    width: 100%;
    height: 300px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
  }
  .bottomside {
    width: 100%;
    height: 300px;
    padding-left: 20px;
    > ul {
      display: flex;
      margin-bottom: 20px;
      li:nth-child(1) {
        margin-right: 30px;
      }
      li:nth-child(2) {
        margin-right: 100px;
      }
      li:nth-child(3) {
        margin-right: 80px;
      }
    }
    .bottom-ui {
      display: flex;
      ul {
        margin-right: 80px;
        li {
          margin-bottom: 6px;
        }
      }
    }
    .bottom-contant{
      .el-select{
        margin-right: 20px;
      }
      label{
        margin-right: 20px;
      }
    }
  }
}
</style>