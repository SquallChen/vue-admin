<template>
  <div class="container">
    <div class="content">
      <span>Copyright (C) 4.01.180402</span>
      <span>DecoderGNSS 03.03.171218.180321</span>
      <div class="list">
        <!-- <el-menu class="el-menu-vertical-demo" v-for="item in listItems" :key="item.index">
          <el-menu-item :index="item.index" @click="test(item.index)">
            <span slot="title">
              <span class="s1">{{item.data.name}}</span>
              <span class="s2">{{item.data.ID}}</span>
              <span class="s3">{{item.data.local}}</span>
            </span>
          </el-menu-item>
        </el-menu> -->
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <span slot="title">
              <span class="s1">Novatel Novatel</span>
              <span class="s2">03.03.171025.180323</span>
              <span class="s3">Novatel SouthComNav</span>
            </span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">
              <span>SouthGNss</span>
              <span>03.03.171016.171218</span>
              <span>SOUTH DATA EXCHANGE</span>
            </span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">
              <span>Trimble</span>
              <span>03.03.180323.180323</span>
              <span>CMR RT17 RT27</span>
            </span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="dataDisplay">
        <div>
          <span>Encode</span>
          <span>04.00.171228.180308</span>
        </div>
        <div>
          <span>Kobaire</span>
          <span></span>
        </div>
        <div>
          <span>Undulation</span>
          <span></span>
        </div>
        <div>
          <span>SppEngine</span>
          <span>03.00.180125.180307</span>
        </div>
      </div>
      <div class="info">
        <el-form>
          <el-form-item label="序列号" label-width="80px">
            <el-input auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="使用单位" label-width="80px">
            <el-input auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div>
          <span>启动时间 2018/04/13 08：23：15 (0:00:00)</span>
          <span>C:\User\PC8870\Desktop\NRS_STATION\NET\NrsEagleStation.exe</span>
        </div>
        <div class="pic">

        </div>
      </div>
      <span class="top-title">关于</span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'systemSet',
  data() {
    return {
      listItems: [
        {
          index: '1',
          data: {
            name: 'Novatel',
            ID: '03.03.171016.171218',
            local: 'Novatel SouthComNav'
          }
        },
        {
          index: '2',
          data: {
            name: 'SouthGNss',
            ID: '03.03.171016.171218',
            local: 'SOUTH DATA EXCHANGE'
          }
        },
        {
          index: '3',
          data: {
            name: 'Trimble',
            ID: '03.03.180323.180323',
            local: 'CMR RT17 RT27'
          }
        },
        {
          index: '4',
          data: {
            name: 'Novatel',
            ID: '03.03.171016.171218',
            local: 'Novatel SouthComNav'
          }
        }
      ],
      from: {
        a: 1,
        b: 2
      }
    };
  },
  methods: {
    test(v) {
      console.log(v);
    }
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 26px;
  background: #f9f9f9;
}
.content {
  width: 700px;
  height: 560px;
  border: 1px solid #ddd;
  position: relative;
  padding-left: 40px;
  padding-top: 14px;
}
.content > span {
  display: block;
  margin-bottom: 10px;
}
.content .list {
  background: white;
  padding: 10px 0;
  border: 1px solid #ddd;
  width: 652px;
  min-height: 20px;
  height: 200px;
  overflow: auto;
}
.content .list span {
  display: inline-block;
  margin-bottom: 5px;
}
.content .list div span:nth-child(1) {
  width: 80px;
  margin-right: 40px;
}
.content .list div span:nth-child(2) {
  width: 126px;
  margin-right: 40px;
}
.content .list .el-menu-item {
  height: 22px;
  line-height: 22px;
}
.content .list .el-menu-item span {
  height: 20px;
}
.content .list .el-menu {
  border-right: none;
}
.content .list .s1 {
  min-width: 100px;
  margin-right: 26px;
}
.content .list .s2 {
  min-width: 120px;
  margin-right: 5px;
}
.content .dataDisplay {
  padding: 10px 0;
}
.content .dataDisplay div span {
  display: inline-block;
}
.content .dataDisplay div span:nth-child(1) {
  min-width: 90px;
  margin-right: 20px;
  margin-bottom: 6px;
}
.content .info .el-input {
  width: 400px;
}
.content .info .el-form-item {
  margin-bottom: 6px;
}
.content .info .el-form {
  margin-left: -12px;
}
.content .info div span{
  display: block;
}
.content .info div span:nth-child(1){
  margin-top: 36px;
  margin-bottom: 6px;
}
.content .info .pic{
  width:100px;
  height:100px;
  float:right;
  position: relative;
  top:-83px;
right:-1px;
  background:url('../../assets/img/QRcode.png');
  background-size: 100px 100px;
}
.top-title {
  display: block;
  text-align: center;
  padding: 0 4px;
  background: #f9f9f9;
  position: absolute;
  top: -12px;
  left: 8px;
  font-size: 16px;
}
</style>