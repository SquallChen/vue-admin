<template>
  <div id="SatelliteList">
    <div class="list">
      <canvas ref="snrPic" id="snrPic" width="522" height="522">
        <p>浏览器不支持canvas</p>
        <img id="scream" src="@/assets/img/bg.png" alt="The Scream" width="675" height="442">
      </canvas>
    </div>

    <div class="data">
        <el-table
          :data="tableData"         
          border
          style="width: 100%"  height="100%">
          <el-table-column
            prop="Nunber"
            label="卫星号"
             show-overflow-tooltip fixed>
          </el-table-column>
          <el-table-column
            prop="DirectionAngle"
            label="方向角"
             show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="HeightAngle"
            label="高度角" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="L1"
            label="L1/B1/E1 SNR" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="L2"
            label="L2/B2/E7 SNR" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="L5"
            label="L5/B3/E6E" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="Track"
            label="TRACK" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="ResiDuals"
            label="Resi duals" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="Valid"
            label="Valid" show-overflow-tooltip>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
import "@/assets/js/jquery-3.3.1.js";
export default {
  data() {
    return {
      tableData: [
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        },
        {
          Nunber: "G10",
          DirectionAngle: "137.77",
          HeightAngle: "72.63",
          L1: "52.80",
          L2: "46.00",
          L5: "58.30",
          Track: "1C 2W",
          ResiDuals: "-1.371",
          Valid: "15288"
        }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      // 将回调延迟到下次 DOM 更新循环之后执行,否则js将先于html加载而无法获取canvas节点
      var c = this.$refs.snrPic;
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");
      // 绘制背景
      img.onload = function() {
        ctx.drawImage(img, -160, 30);
      };
    });

  },
  methods:{
   
  }

  // $(document).ready(function() {
  //      console.log( "ready!" );
  //    var baseData = [];
  //    var xhr; //ajax对象
  //   $.getJSON("static/data.json", function(json){
  //   baseData = JSON.stringify(json.obj.detail.gnssSateInfoList.sateInfoList);
  //   console.log(baseData)
  //   console.log(111111)
  //   drawBaseSky();
  //       var c = document.getElementById("snrPic");
  //       var ctx = c.getContext("2d");
  //       var img=document.getElementById("scream");
  //       // 绘制背景
  //       img.onload = function () {
  //       ctx.drawImage(img, -160, 30);
  //        drawSkyPosition(baseData);
  //         }
  // });
  // 绘制天空图背景
  // function drawBaseSky() {
  //    var c = document.getElementById("snrPic");
  //     var ctx = c.getContext("2d");
  //     var img=document.getElementById("scream");
  //     // 绘制背景
  //     img.onload = function () {
  //     ctx.drawImage(img, -160, 30);
  //      drawSkyPosition(baseData);
  //       }
  // }
  // $.ajax({
  //   type:"get",
  //    url:"http://lbs.southgnss.com/rtkonlineMachineController.do?doRtkDetail&identifyCode=SG607A117233721",
  //   success:function(response,stasus,xhr){
  //      console.log("aaaaa"+response);
  //   }
  // })
  // })

  // 绘制天空图数据分布
  // function drawSkyPosition(drawData) {
  //     console.log(22222)
  //     var color = {
  //       "SATSYS_GPS": "rgb(173,152,12)",
  //       "SATSYS_GLONASS": "rgb(75,164,259)",
  //       "SATSYS_BD": "rgb(226,120,228)",
  //       "3": "rgb(117,173,61)",
  //       "4": "rgb(230,139,55)",
  //       "5": "rgb(61,168,161)"
  //     }
  //     var cxt = document.getElementById('snrPic').getContext("2d");
  //     var radius = 180;
  //     var cosLen, x, y;

  //     cxt.save();

  //     cxt.translate(radius, radius);

  //     cxt.font = "14px Arial";
  //     cxt.textAlign = "center";
  //     cxt.textBaseline = "middle";
  //     for (var i = 0, dataLen = drawData.length; i < dataLen; i++) {

  //       cxt.beginPath();
  //       cxt.fillStyle = color[drawData[i].type];

  //       var cosLen = Math.cos(drawData[i].elevation * Math.PI / 180) * radius;
  //       y = Math.cos(drawData[i].azimuth * Math.PI / 180) * cosLen - 42;
  //       x = Math.sin(drawData[i].azimuth * Math.PI / 180) * cosLen + 251;

  //       cxt.arc(x, -y, 14, 0, Math.PI * 2, false);
  //       cxt.fill();

  //       cxt.beginPath();
  //       cxt.fillStyle = 'white';
  //       cxt.fillText(drawData[i].prn, x, -y);
  //       cxt.closePath();

  //       if (drawData[i].status != 'SATSTA_RESOLVE') {
  //         cxt.beginPath();
  //         cxt.lineWidth = 2;
  //         cxt.arc(x, -y, 14.5, 0, Math.PI * 2, false);
  //         cxt.strokeStyle = "red";
  //         cxt.stroke();
  //         cxt.closePath();

  //         cxt.beginPath();
  //         cxt.moveTo(x + 10.5, -y + 10.5);
  //         cxt.lineTo(x - 10.5, -y - 10.5);
  //         cxt.stroke();
  //         cxt.closePath();

  //       }
  //     }
  //     cxt.restore();
  //     console.log(33333)
  //   }
};
</script>

<style>
#SatelliteList {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.el-table {
  height: 100%;
}
.list {
  width: 522px;
  height: 522px;
  margin-right: 2px;
}
.data {
  height: 100%;
  flex: 1;
  overflow: auto;
  margin-top: -2px;
}

#SatelliteList .el-table td,
#SatelliteList .el-table th {
  padding: 10;
}
</style>