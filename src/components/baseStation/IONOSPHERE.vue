<template>
  <el-tabs style="height:100%;padding:20px 0 0 20px">
    <el-tab-pane label="柱状图">
      <x-chart :id="id" :option="option"></x-chart>
    </el-tab-pane>
    <el-tab-pane label="曲线图">
      <x-chart :id="id2" :option="option2"></x-chart>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
// 导入chart组件
import XChart from '@/components/highcharts/chart.vue';
// 导入chart组件模拟数据
import options from '@/components/highcharts/chart-options/options';
export default {
  name: 'IONOSPHERE',
  data() {
    const option = options.test;
    const option2 = options.test2;
    return {
      id: 'test',
      id2: 'test2',
      option: option,
      option2: option2
    };
  },
  mounted() {},
  methods: {},
  components: {
    XChart
  }
};
</script>
<style lang="scss" scoped>

</style>