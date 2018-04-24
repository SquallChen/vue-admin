<template>
  <div class="TableContent">
    <el-tabs v-model="activeName" type="card" :tab-position="tabPosition">
      <el-tab-pane label="基站情况" name="first">
        <basesituation></basesituation>
      </el-tab-pane>
      <el-tab-pane label="卫星列表" name="second">
        <satelliteList></satelliteList>
      </el-tab-pane>
      <el-tab-pane label="误差汇总" name="third">误差汇总</el-tab-pane>
      <el-tab-pane label="卫星信号" name="fourth">
        <satelliteSignal></satelliteSignal>
      </el-tab-pane>
      <el-tab-pane label="接收机状态" name="fifth">
        <receiverStatus></receiverStatus>
      </el-tab-pane>
    </el-tabs>

    <dialogManagement></dialogManagement>
    <dialogParameterSet></dialogParameterSet>
  </div>

</template>

<script>
import dialogManagement from '@/components/dialog/dialogManagement';
import dialogParameterSet from '@/components/dialog/dialogParameterSet';
import satelliteList from '@/components/baseStation/satelliteList';
import satelliteSignal from '@/components/baseStation/satelliteSignal';
import receiverStatus from '@/components/baseStation/receiverStatus';
import basesituation from '@/components/baseStation/basesituation';
export default {
  name: 'situation',
  methods: {
  },
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first'
    };
  },
  created() {
  },
  mounted() {
  },
  components: {
    dialogManagement,
    dialogParameterSet,
    satelliteList,
    satelliteSignal,
    receiverStatus,
    basesituation
  }
};
</script>

<style>
.TableContent {
  height: 100%;
  overflow: auto;
}
.el-dialog__body {
  padding: 20px 20px;
}
.el-tabs,
.el-tabs__content {
  height: 100%;
}
.el-tabs {
  padding-bottom: 52px;
}
.el-tab-pane {
  height: 100%;
}
</style>