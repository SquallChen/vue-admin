<template>
  <div class="ephemeris-container">
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data1" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">GPS SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data2" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">GPS EPH</span>
      </div>
    </div>
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data3" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">GLONASS SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data4" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">GLONASS EPH</span>
      </div>
    </div>
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data5" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">BDS SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data6" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">BDS EPH</span>
      </div>
    </div>
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data7" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">GAL SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data8" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">GAL EPH</span>
      </div>
    </div>
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data9" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">QZSS SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
          <span v-for="item in data10" :key="item.num" :class="[item.status===true ? 'bg1':'bg2']">{{item.num}}</span>
        </div>
        <span class="top-title">QZSS EPH</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ephemeris',
  data() {
    return {
      data1: [
        { num: '01', status: true },
        { num: '02', status: true },
        { num: '03', status: true },
        { num: '04', status: true },
        { num: '05', status: true },
        { num: '06', status: true },
        { num: '07', status: true },
        { num: '08', status: true },
        { num: '09', status: true },
        { num: '10', status: true },
        { num: '11', status: true },
        { num: '12', status: true },
        { num: '13', status: true },
        { num: '14', status: true },
        { num: '15', status: true },
        { num: '16', status: true },
        { num: '17', status: true },
        { num: '18', status: true },
        { num: '19', status: true },
        { num: '20', status: true },
        { num: '21', status: true },
        { num: '22', status: true },
        { num: '23', status: true },
        { num: '24', status: true },
        { num: '25', status: true },
        { num: '26', status: true },
        { num: '27', status: true },
        { num: '28', status: true },
        { num: '29', status: true },
        { num: '30', status: true },
        { num: '31', status: true },
        { num: '32', status: true }
      ],
      data2: [
        { num: '01', status: false },
        { num: '02', status: false },
        { num: '03', status: false },
        { num: '04', status: false },
        { num: '05', status: false },
        { num: '06', status: false },
        { num: '07', status: false },
        { num: '08', status: false },
        { num: '09', status: false },
        { num: '10', status: false },
        { num: '11', status: false },
        { num: '12', status: false },
        { num: '13', status: false },
        { num: '14', status: false },
        { num: '15', status: false },
        { num: '16', status: false },
        { num: '17', status: false },
        { num: '18', status: false },
        { num: '19', status: false },
        { num: '20', status: false },
        { num: '21', status: false },
        { num: '22', status: false },
        { num: '23', status: false },
        { num: '24', status: false },
        { num: '25', status: false },
        { num: '26', status: false },
        { num: '27', status: false },
        { num: '28', status: false },
        { num: '29', status: false },
        { num: '30', status: false },
        { num: '31', status: false },
        { num: '32', status: false }
      ],
      data3: [
        { num: '01', status: true },
        { num: '02', status: true },
        { num: '03', status: true },
        { num: '04', status: true },
        { num: '05', status: true },
        { num: '06', status: true },
        { num: '07', status: true },
        { num: '08', status: true },
        { num: '09', status: true },
        { num: '10', status: true },
        { num: '11', status: true },
        { num: '12', status: true },
        { num: '13', status: true },
        { num: '14', status: true },
        { num: '15', status: true },
        { num: '16', status: true },
        { num: '17', status: true },
        { num: '18', status: true },
        { num: '19', status: true },
        { num: '20', status: true },
        { num: '21', status: true },
        { num: '22', status: true },
        { num: '23', status: true },
        { num: '24', status: true }
      ],
      data4: [
        { num: '01', status: false },
        { num: '02', status: false },
        { num: '03', status: false },
        { num: '04', status: false },
        { num: '05', status: false },
        { num: '06', status: false },
        { num: '07', status: false },
        { num: '08', status: false },
        { num: '09', status: false },
        { num: '10', status: false },
        { num: '11', status: false },
        { num: '12', status: false },
        { num: '13', status: false },
        { num: '14', status: false },
        { num: '15', status: false },
        { num: '16', status: false },
        { num: '17', status: false },
        { num: '18', status: false },
        { num: '19', status: false },
        { num: '20', status: false },
        { num: '21', status: false },
        { num: '22', status: false },
        { num: '23', status: false },
        { num: '24', status: false }
      ],
      data5: [
        { num: '01', status: true },
        { num: '02', status: true },
        { num: '03', status: true },
        { num: '04', status: true },
        { num: '05', status: true },
        { num: '06', status: true },
        { num: '07', status: true },
        { num: '08', status: true },
        { num: '09', status: true },
        { num: '10', status: true },
        { num: '11', status: true },
        { num: '12', status: true },
        { num: '13', status: true },
        { num: '14', status: true },
        { num: '15', status: false },
        { num: '16', status: false },
        { num: '17', status: false },
        { num: '18', status: false },
        { num: '19', status: false },
        { num: '20', status: false },
        { num: '21', status: false },
        { num: '22', status: false },
        { num: '23', status: false },
        { num: '24', status: false },
        { num: '25', status: false },
        { num: '26', status: false },
        { num: '27', status: false },
        { num: '28', status: false },
        { num: '29', status: false },
        { num: '30', status: false },
        { num: '31', status: false },
        { num: '32', status: false },
        { num: '33', status: false },
        { num: '34', status: false },
        { num: '35', status: false },
        { num: '36', status: false },
        { num: '37', status: false }
      ],
      data6: [
        { num: '01', status: false },
        { num: '02', status: false },
        { num: '03', status: false },
        { num: '04', status: false },
        { num: '05', status: false },
        { num: '06', status: false },
        { num: '07', status: false },
        { num: '08', status: false },
        { num: '09', status: false },
        { num: '10', status: false },
        { num: '11', status: false },
        { num: '12', status: false },
        { num: '13', status: false },
        { num: '14', status: false },
        { num: '15', status: false },
        { num: '16', status: false },
        { num: '17', status: false },
        { num: '18', status: false },
        { num: '19', status: false },
        { num: '20', status: false },
        { num: '21', status: false },
        { num: '22', status: false },
        { num: '23', status: false },
        { num: '24', status: false },
        { num: '25', status: false },
        { num: '26', status: false },
        { num: '27', status: false },
        { num: '28', status: false },
        { num: '29', status: false },
        { num: '30', status: false },
        { num: '31', status: false },
        { num: '32', status: false },
        { num: '33', status: false },
        { num: '34', status: false },
        { num: '35', status: false },
        { num: '36', status: false },
        { num: '37', status: false }
      ],
      data7: [
        { num: '01', status: true },
        { num: '02', status: true },
        { num: '03', status: true },
        { num: '04', status: true },
        { num: '05', status: true },
        { num: '06', status: false },
        { num: '07', status: true },
        { num: '08', status: true },
        { num: '09', status: true },
        { num: '10', status: false },
        { num: '11', status: true },
        { num: '12', status: true },
        { num: '13', status: false },
        { num: '14', status: true },
        { num: '15', status: false },
        { num: '16', status: false },
        { num: '17', status: false },
        { num: '18', status: true },
        { num: '19', status: true },
        { num: '20', status: false },
        { num: '21', status: false },
        { num: '22', status: false },
        { num: '23', status: false },
        { num: '24', status: true },
        { num: '25', status: false },
        { num: '26', status: true },
        { num: '27', status: false },
        { num: '28', status: false },
        { num: '29', status: false },
        { num: '30', status: true },
        { num: '31', status: false },
        { num: '32', status: false },
        { num: '33', status: false },
        { num: '34', status: false },
        { num: '35', status: false },
        { num: '36', status: false },
        { num: '37', status: false }
      ],
      data8: [
        { num: '01', status: false },
        { num: '02', status: false },
        { num: '03', status: false },
        { num: '04', status: false },
        { num: '05', status: false },
        { num: '06', status: false },
        { num: '07', status: false },
        { num: '08', status: false },
        { num: '09', status: false },
        { num: '10', status: false },
        { num: '11', status: false },
        { num: '12', status: false },
        { num: '13', status: false },
        { num: '14', status: false },
        { num: '15', status: false },
        { num: '16', status: false },
        { num: '17', status: false },
        { num: '18', status: false },
        { num: '19', status: false },
        { num: '20', status: false },
        { num: '21', status: false },
        { num: '22', status: false },
        { num: '23', status: false },
        { num: '24', status: false },
        { num: '25', status: false },
        { num: '26', status: false },
        { num: '27', status: false },
        { num: '28', status: false },
        { num: '29', status: false },
        { num: '30', status: false },
        { num: '31', status: false },
        { num: '32', status: false },
        { num: '33', status: false },
        { num: '34', status: false },
        { num: '35', status: false },
        { num: '36', status: false },
        { num: '37', status: false }
      ],
      data9: [
        { num: '01', status: false },
        { num: '02', status: true },
        { num: '03', status: true },
        { num: '04', status: false },
        { num: '05', status: false },
        { num: '06', status: false },
        { num: '07', status: false },
        { num: '08', status: false },
        { num: '09', status: false },
        { num: '10', status: false }
      ],
      data10: [
        { num: '01', status: false },
        { num: '02', status: false },
        { num: '03', status: false },
        { num: '04', status: false },
        { num: '05', status: false },
        { num: '06', status: false },
        { num: '07', status: false },
        { num: '08', status: false },
        { num: '09', status: false },
        { num: '10', status: false }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.ephemeris-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px 20px 0 20px;
  .ephemeris-content {
    min-height: 60px;
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    .ephemeris-main {
      position: relative;
      width: 574px;
      border: 1px solid #ddd;
      padding: 20px 20px 0 20px;
      div {
        display: flex;
        flex-wrap: wrap;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          width: 30px;
          // background: red;
          border: 1px solid black;
          border-radius: 50px;
          margin-right: 4px;
          margin-left: 4px;
          margin-bottom: 6px;
        }
      }
    }
  }
  .top-title {
    display: block;
    text-align: center;
    padding: 0 4px;
    background: white;
    position: absolute;
    top: -8px;
    left: 8px;
    font-size: 16px;
  }
  .bg1 {
    background:#00FF00;
  }
  .bg2 {
    background: #FF0000;
  }
}
</style>