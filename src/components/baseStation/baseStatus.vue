<template class="station-table-content">
  <div style="height:100%; position: relative;">
    <el-table :data="list"  border style="width: 100%;" height="100%" tooltip-effect="dark" v-loading="false" element-loading-text="加载中..." >
      <el-table-column prop="baseStationId" label="基站ID" :min-width="widthvalue" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="epochNum" label="历元数" :min-width="widthvalue" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="epochTime" label="历元时间" :min-width="widthvalue" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import bus from '@/store/eventbus';
import { epochInfo } from '@/api/app.js';
export default {
  name: 'basesituation',
  methods: {
    timeClock() {
      setInterval(() => {
        this.getEpochList();
      }, 5000);
    },
    getEpochList() {
      this.listLoading = true;
      epochInfo().then(
        response=>{
          this.list = response.runInfo;
        },
        reject=>{
          console.log('请求失败！');
        }
      )
    },
  },
  data() {
    return {
      list: null,
      listLoading: true,
      widthvalue:''
    };
  },
  created() {
    this.$nextTick(() => {
       //计算容器宽度，设置自适应的最小列宽（还需增加页面resize时的方法）
    this.widthvalue = (document.querySelector('.navbar').offsetWidth) / 3-6 + 'px';
    });
    this.getEpochList();
    this.timeClock();
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
table {
  border-spacing: 0;
  border-collapse:separate;/* 如果值为collapse，则element表格下方会出现滚动条*/
}
.pagination-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 100px;
}
</style>
