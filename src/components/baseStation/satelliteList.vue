<template>
  <div id="SatelliteList">
    <div class="list">
      <canvas ref="skyPic" id="skyPic" width="522" height="522">
        <p>浏览器不支持canvas</p>
        <img id="scream" src="@/assets/img/bg.png" alt="The Scream" width="675" height="442">
      </canvas>
    </div>

    <div class="data" id="tableContent">
      <el-table :data="baseStationData" border style="width: 100%" height="100%">
        <el-table-column prop="sateliteId" label="卫星号" show-overflow-tooltip :min-width=widthvalue>
        </el-table-column>
        <el-table-column prop="azimuth" label="方向角" show-overflow-tooltip :min-width=widthvalue>
        </el-table-column>
        <el-table-column prop="elevation" label="高度角" show-overflow-tooltip :min-width=widthvalue>
        </el-table-column>
        <el-table-column prop="snr1" label="SNR1" show-overflow-tooltip :min-width=widthvalue>
        </el-table-column>
        <el-table-column prop="snr2" label="SNR2" show-overflow-tooltip :min-width=widthvalue>
        </el-table-column>
        <el-table-column prop="snr3" label="SNR3" show-overflow-tooltip :min-width=widthvalue>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import '@/assets/js/jquery-3.3.1.js';
import bus from '@/store/eventbus';
import { getSatelliteData } from '@/api/app.js';
export default {
  data() {
    return {
      total: 20,
      stationId: '',
      baseStationData: [],
      widthvalue: '',
      listQuery: {
        page_num: 1,
        num_per_page: 5
      }
    };
  },
  created() {
    this.$nextTick(() => {
      // 将回调延迟到下次 DOM 更新循环之后执行,否则js将先于html加载而无法获取canvas节点
      // var c = this.$refs.skyPic;
      // var ctx = c.getContext('2d');
      // var img = document.getElementById('scream');
      // // 绘制背景
      // img.onload = function() {
      //   ctx.drawImage(img, -160, 30);
      // };
    });
  },
  mounted() {
    // 获取当前点击的基站ID信息
    bus.$on('currentBaseStationsId', reg => {
      this.stationId = reg;
      //先调用执行一次，5秒后计时器自动执行
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
    SatelliteData() {
      getSatelliteData(this.stationId).then(
        response => {
          if (response.gnssInfo !== null) {
            this.baseStationData = response.gnssInfo.sateInfoList;
            //计算容器宽度，设置自适应的最小列宽（还需增加页面resize时的方法）
            this.widthvalue =
              (document.querySelector('.navbar').offsetWidth - 522) / 6 + 'px';
            drawSkyPosition(this.baseStationData);
          } else {
            console.log('没有数据');
          }
        },
        reject => {
          console.log('请求失败！');
        }
      );
    },
    handleSizeChange(val) {
      if (this.listQuery.limit === val) {
        return;
      }
      this.listQuery.num_per_page = val;
    },
    handleCurrentChange(val) {
      if (this.listQuery.page_num === val) {
        return;
      }
      this.listQuery.page_num = val;
    }
  }
};
//绘制天空图数据分布
function drawSkyPosition(data) {
  var c = document.getElementById('skyPic');
  var ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  var img = document.getElementById('scream');
  ctx.drawImage(img, -160, 30);
  var radius = 180;
  var cosLen, x, y;
  ctx.save();

  ctx.translate(radius, radius);

  ctx.font = '14px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (var i = 0, dataLen = data.length; i < dataLen; i++) {
    ctx.beginPath();
    if (data[i].sateliteId <= 32) {
      ctx.fillStyle = 'rgb(173,152,12)';
    } else if (data[i].sateliteId >= 38 && data[i].sateliteId <= 61) {
      ctx.fillStyle = 'rgb(75,164,259)';
    } else {
      ctx.fillStyle = 'rgb(117,173,61)';
    }
    var cosLen = (90 - data[i].elevation * 180 / Math.PI) / 90 * radius;
    y = Math.cos(data[i].azimuth * 180 / Math.PI) * cosLen - 70;
    x = Math.sin(data[i].azimuth * 180 / Math.PI) * cosLen + 90;
    ctx.arc(x, -y, 14, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillText(data[i].sateliteId, x, -y);
  }
  ctx.restore();
}
</script>

<style>
#SatelliteList {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
#SatelliteList .el-table {
  height: 100%;
  /* overflow: auto; */
}
.el-table__body,
.el-table__footer,
.el-table__header {
  width: 100%;
}
.list {
  width: 522px;
  height: 522px;
  margin-right: 2px;
}
.data {
  height: 100%;
  width: 100%;
  flex: 1;
  width: 600px;
  overflow: auto;
  margin-top: -2px;
  padding-bottom: 48px;
  position: relative;
}
.pagination-container {
  position: absolute;
  bottom: 6px;
  margin-top: 0;
  right: 50px;
}
#SatelliteList .el-table td,
#SatelliteList .el-table th {
  padding: 10;
}
.el-table__body-wrapper {
  height: 100%;
  overflow: auto;
}
</style>