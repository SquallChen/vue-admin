<template>
  <div class="container">
    <div class="top">
      <p>SNR</p>
      <div class="radio">
        <el-radio v-model="radio" label="1" @change="stationIdChange">GPS</el-radio>
        <el-radio v-model="radio" label="2" @change="stationIdChange">GLONASS</el-radio>
        <el-radio v-model="radio" label="3" @change="stationIdChange">北斗</el-radio>
      </div>

    </div>
    <div class="main">
      <x-chart :id="id" :option="satelliteSignalInfo"></x-chart>
    </div>
  </div>
</template>

<script>
import bus from '@/store/eventbus';
import { getSatelliteData } from '@/api/app.js';
import HighCharts from 'highcharts';
// 导入chart组件
import XChart from '@/components/highcharts/chart.vue';
// 导入chart组件模拟数据
import options from '@/components/highcharts/chart-options/options';
export default {
  name: 'satelliteSignal',
  data() {
    return {
      value: '',
      id: 'satelliteSignalInfo',
      stationId: '',
      stationInfo: '',
      radio: '1',
      satelliteSignalInfo: {
        credits: {
          enabled: false
        }, // 去掉地址
        xAxis: [
          {
            type: 'category',
            categories: [],
            index: 0,
            isX: true
          }
        ],
        series: [
          {
            name: 'SNR1',
            data: [],
            _colorIndex: 0
          },
          {
            name: 'SNR2',
            data: [],
            _colorIndex: 1
          },
          {
            name: 'SNR3',
            data: [],
            _colorIndex: 2
          }
        ],
        yAxis: [
          {
            title: {
              text: ''
            },
            index: 0
          }
        ],
        chart: {
          height: '460px',
          style: {
            fontFamily: '"微软雅黑", Arial, Helvetica, sans-serif',
            color: '#333',
            fontSize: '12px',
            fontWeight: 'normal',
            fontStyle: 'normal'
          },
          type: 'column'
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}：</td><td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          useHTML: true,
          shared: true
        },
        plotOptions: {
          series: {
            animation: false
          }
        }
      }
    };
  },
  mounted() {
    // 获取当前点击的基站ID信息
    bus.$on('currentBaseStationsId', reg => {
      this.stationId = reg;
      this.SatelliteData();
      this.timeClock();
    });
  },
  methods: {
    timeClock() {
      setInterval(() => {
        this.SatelliteData();
      }, 5000);
    },
    //根据radio切换处理对应数据
    stationIdChange() {
      if (this.radio === '1') {
        this.processGpsData();
      } else if (this.radio === '2') {
        this.processGlonassData();
      } else {
        this.processBeidouData();
      }
    },
    SatelliteData() {
      getSatelliteData(this.stationId).then(
        response => {
          if (response.gnssInfo !== null) {
            this.stationInfo = response.gnssInfo.sateInfoList;
            if (this.stationInfo.length !== 0) {
              if (this.radio === '1') {
                this.processGpsData();
              } else if (this.radio === '2') {
                this.processGlonassData();
              } else {
                this.processBeidouData();
              }
            } else {
              console.log('返回数据长度为0!');
            }
          } else {
            console.log('没有返回数据');
          }
        },
        reject => {
          console.log('请求失败！');
        }
      );
    },
    processGpsData() {
      let dataLength = this.stationInfo.length;
      let tempSateliteId = [],
        tempSNR1 = [],
        tempSNR2 = [],
        tempSNR3 = [];
      for (let i = 0; i < dataLength; i++) {
        if (this.stationInfo[i].sateliteId <= 32) {
          tempSateliteId.push(this.stationInfo[i].sateliteId);
          tempSNR1.push(this.stationInfo[i].snr1);
          tempSNR2.push(this.stationInfo[i].snr2);
          tempSNR3.push(this.stationInfo[i].snr3);
        }
      }
      this.satelliteSignalInfo.xAxis[0].categories = tempSateliteId;
      this.satelliteSignalInfo.series[0].data = tempSNR1;
      this.satelliteSignalInfo.series[1].data = tempSNR2;
      this.satelliteSignalInfo.series[2].data = tempSNR3;
      HighCharts.chart('satelliteSignalInfo', this.satelliteSignalInfo);
    },
    processGlonassData() {
      let dataLength = this.stationInfo.length;
      let tempSateliteId = [],
        tempSNR1 = [],
        tempSNR2 = [],
        tempSNR3 = [];
      for (let i = 0; i < dataLength; i++) {
        if (
          this.stationInfo[i].sateliteId >= 38 &&
          this.stationInfo[i].sateliteId <= 61
        ) {
          tempSateliteId.push(this.stationInfo[i].sateliteId);
          tempSNR1.push(this.stationInfo[i].snr1);
          tempSNR2.push(this.stationInfo[i].snr2);
          tempSNR3.push(this.stationInfo[i].snr3);
        }
      }
      this.satelliteSignalInfo.xAxis[0].categories = tempSateliteId;
      this.satelliteSignalInfo.series[0].data = tempSNR1;
      this.satelliteSignalInfo.series[1].data = tempSNR2;
      this.satelliteSignalInfo.series[2].data = tempSNR3;
      HighCharts.chart('satelliteSignalInfo', this.satelliteSignalInfo);
    },
    processBeidouData() {
      let dataLength = this.stationInfo.length;
      let tempSateliteId = [],
        tempSNR1 = [],
        tempSNR2 = [],
        tempSNR3 = [];
      for (let i = 0; i < dataLength; i++) {
        if (
          this.stationInfo[i].sateliteId >= 161 &&
          this.stationInfo[i].sateliteId <= 197
        ) {
          tempSateliteId.push(this.stationInfo[i].sateliteId);
          tempSNR1.push(this.stationInfo[i].snr1);
          tempSNR2.push(this.stationInfo[i].snr2);
          tempSNR3.push(this.stationInfo[i].snr3);
        }
      }
      this.satelliteSignalInfo.xAxis[0].categories = tempSateliteId;
      this.satelliteSignalInfo.series[0].data = tempSNR1;
      this.satelliteSignalInfo.series[1].data = tempSNR2;
      this.satelliteSignalInfo.series[2].data = tempSNR3;
      HighCharts.chart('satelliteSignalInfo', this.satelliteSignalInfo);
    }
  },
  components: {
    XChart
  }
};
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  width: 85%;
  margin-left: 50px;
  .el-radio {
    padding-top: 40px;
  }
  .radio {
    flex: 1;
    text-align: center;
    margin-left: -50px;
  }
}

.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  p {
    margin-left: 50px;
    font-size: 30px;
  }
  .main {
    padding: 20px;
    width: 85%;
    height: 500px;
    margin-left: 50px;
    border: 1px solid black;
  }
}
</style>