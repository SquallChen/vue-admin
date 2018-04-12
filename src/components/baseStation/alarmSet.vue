<template>
  <div class="alarm-container">
    <div class="alarm-set">
      <el-checkbox label="接收机开始或停止使用内置电池" name="type" checked class="top-checkbox"></el-checkbox>
      <el-checkbox label="内置电池电量低" name="type" checked></el-checkbox>
      <el-checkbox label="工作温度过高或过低" name="type" checked></el-checkbox>
      <el-checkbox label="数据传输中断" name="type" checked></el-checkbox>
      <el-checkbox label="基站位移变化" name="type" checked></el-checkbox>
      <el-checkbox label="接收机变动" name="type" checked></el-checkbox>
      <el-checkbox label="无数据连接基站" name="type" checked></el-checkbox>
      <span class="top-title">报警设置</span>
    </div>
    <div class="alarm-method">
      <el-checkbox label="接收机变动" name="type" checked class="top-checkbox"></el-checkbox>
      <el-checkbox label="无数据连接基站" name="type"></el-checkbox>
      <span class="top-title">报警方式</span>
    </div>
    <dialogEmailSet></dialogEmailSet>
    <dialogSMSSet></dialogSMSSet>
  </div>
</template>

<script>
import dialogEmailSet from '@/components/dialog/dialogEmailSet';
import dialogSMSSet from '@/components/dialog/dialogSMSSet';
export default {
  name: 'alarmSet',
   components: {
    dialogEmailSet,
    dialogSMSSet
  }
};
</script>
<style>
.alarm-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
}
.alarm-set {
  width: 400px;
  height: 250px;
  border: 1px solid #ddd;
  position: relative;
  padding-top: 26px;
}
.alarm-set .el-checkbox__label{
  width:300px;
  margin-bottom: 10px;
}
.top-checkbox{
  margin-left: 30px;
}
.alarm-method {
  padding-top: 26px;
  width: 400px;
  height: 106px;
  border: 1px solid #ddd;
  position: relative;
  margin-top: 20px;
}
.alarm-method .el-checkbox__label{
  width:300px;
  margin-bottom: 10px;
}
.alarm-set.top-checkbox{

}
.top-title {
  display: block;
  text-align: center;
  padding: 0 4px;
  background: white;
  position: absolute;
  top: -9px;
  left: 8px;
  font-size: 16px;
}
</style>