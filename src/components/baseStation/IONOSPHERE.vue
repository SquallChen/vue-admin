<template>
  <el-tabs style="height:100%;padding:20px 0 0 20px">
    <el-tab-pane label="曲线图">
      <div class="charts">
        <div id="myChart" :style="{width: '1300px', height: '580px'}"></div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="柱状图">柱状图</el-tab-pane>
  </el-tabs>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'IONOSPHERE',
  data() {
    return {
      option: {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [1.1, 2.2, 3.3, 4.4, 1.5, 2.3, 2.6, 2.2, 3.3, 4.4, 1.5, 2.3, 2.6, 2.2, 3.3, 4.4, 1.5, 2.3, 2.6, 2.2, 3.3, 4.4, 1.5]
          }
        ]
      }
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption(this.option);
    }
  }
};
</script>
<style lang="scss" scoped>
#myChart {
  width: 500px;
  height: 500px;
}
</style>