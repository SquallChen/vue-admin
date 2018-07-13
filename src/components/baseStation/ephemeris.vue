<template>
  <div class="ephemeris-container">
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
          <span v-for="(item,k) in gpsvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">GPS SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
           <span v-for="(item,k) in gpsephvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">GPS EPH</span>
      </div>
    </div>
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
          <span v-for="(item,k) in glonassvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">GLONASS SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
          <span v-for="(item,k) in glonassephvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">GLONASS EPH</span>
      </div>
    </div>
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
          <span v-for="(item,k) in bdvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">BDS SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
           <span v-for="(item,k) in bdephvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">BDS EPH</span>
      </div>
    </div>
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
           <span v-for="(item,k) in galvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">GAL SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
           <span v-for="(item,k) in galephvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">GAL EPH</span>
      </div>
    </div>
    <div class="ephemeris-content">
      <div class="ephemeris-main">
        <div>
           <span v-for="(item,k) in qzssvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">QZSS SP3</span>
      </div>
      <div class="ephemeris-main">
        <div>
           <span v-for="(item,k) in qzssephvalue" :key="k" :class="[item.value===true ? 'bg1':'bg2']">{{item.name}}</span>
        </div>
        <span class="top-title">QZSS EPH</span>
      </div>
    </div>

  </div>
</template>

<script>
import { getEphemeris } from '@/api/app.js';
export default {
  name: 'ephemeris',
  data() {
    return {
      list: null,
      gpsvalue: '',
      glonassvalue: '',
      bdvalue: '',
      galvalue: '',
      qzssvalue: '',
      gpsephvalue: '',
      glonassephvalue: '',
      bdephvalue: '',
      galephvalue: '',
      qzssephvalue: ''
    };
  },
  methods: {
    ephemerisInfo() {
      getEphemeris().then(
        response => {
          this.list = response.ephemeris;
          let leng = this.list.length;
          for (var i = 0; i < leng; i++) {
            if (this.list[i].key === 'gps') {
              var tempgpsvalue = this.list[i].value;
            } else if (this.list[i].key === 'glonass') {
              var tempglonassvalue = this.list[i].value;
            } else if (this.list[i].key === 'bd') {
              var tempbdvalue = this.list[i].value;
            } else if (this.list[i].key === 'gal') {
              var tempgalvalue = this.list[i].value;
            } else if (this.list[i].key === 'qzss') {
              var tempqzssvalue = this.list[i].value;
            } else if (this.list[i].key === 'gps_eph') {
              var tempgpsephvalue = this.list[i].value;
            } else if (this.list[i].key === 'glonass_eph') {
              var tempglonassephvalue = this.list[i].value;
            } else if (this.list[i].key === 'bd_eph') {
              var tempbdephvalue = this.list[i].value;
            } else if (this.list[i].key === 'gal_eph') {
              var tempgalephvalue = this.list[i].value;
            } else {
              var tempqzssephvalue = this.list[i].value;
            }
          }
          this.gpsvalue = this.transform(tempgpsvalue);
          this.glonassvalue = this.transform(tempglonassvalue);
          this.bdvalue = this.transform(tempbdvalue);
          this.galvalue = this.transform(tempgalvalue);
          this.qzssvalue = this.transform(tempqzssvalue);
          this.gpsephvalue = this.transform(tempgpsephvalue);
          this.glonassephvalue = this.transform(tempglonassephvalue);
          this.bdephvalue = this.transform(tempbdephvalue);
          this.galephvalue = this.transform(tempgalephvalue);
          this.qzssephvalue = this.transform(tempqzssephvalue);
        },
        reject => {}
      );
    },
    //将字符串数据转换成数据形式，并将1,0以true false形式展现
    transform(v) {
      var tempGroup = v.split(',');
      var groupData = [];
      let leng = tempGroup.length;
      for (var i = 0; i < leng; i++) {
        groupData.push(this.convertTo(tempGroup[i]));
      }
      return groupData;
    },
    //将数组中的字符串参数处理成数组形式
    convertTo(v) {
      let leng = v.length;
      let temp = {
        name: v.substring(leng - 2, -2),
        value: this.trueOfFlase(v.substring(leng - 1))
      };
      return (v = temp);
    },
    trueOfFlase(v) {
      return v == 1 ? true : false;
    }
  },
  created() {
    this.ephemerisInfo();
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
    background: #00ff00;
  }
  .bg2 {
    background: #ff0000;
  }
}
</style>