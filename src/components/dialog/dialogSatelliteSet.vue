<template>
  <el-dialog title="Star Set" :visible.sync="dialogSatelliteSet" width="942px">
    <el-form :model="form">
      <div class="satelliteSet-content">
        <div class="leftside">
          <div>
            <div class="checkbox-content">
              <el-checkbox label="1" name="type" checked></el-checkbox>
              <el-checkbox label="2" name="type" checked></el-checkbox>
              <el-checkbox label="3" name="type" checked></el-checkbox>
              <el-checkbox label="4" name="type" checked></el-checkbox>
              <el-checkbox label="5" name="type" checked></el-checkbox>
              <el-checkbox label="6" name="type" checked></el-checkbox>
              <el-checkbox label="7" name="type" checked></el-checkbox>
              <el-checkbox label="8" name="type" checked></el-checkbox>
              <el-checkbox label="9" name="type" checked></el-checkbox>
              <el-checkbox label="10" name="type" checked></el-checkbox>
              <el-checkbox label="11" name="type" checked></el-checkbox>
              <el-checkbox label="12" name="type" checked></el-checkbox>
              <el-checkbox label="13" name="type" checked></el-checkbox>
              <el-checkbox label="14" name="type" checked></el-checkbox>
              <el-checkbox label="15" name="type" checked></el-checkbox>
              <el-checkbox label="16" name="type" checked></el-checkbox>
              <el-checkbox label="17" name="type" checked></el-checkbox>
              <el-checkbox label="18" name="type" checked></el-checkbox>
              <el-checkbox label="19" name="type" checked></el-checkbox>
              <el-checkbox label="20" name="type" checked></el-checkbox>
              <el-checkbox label="21" name="type" checked></el-checkbox>
              <el-checkbox label="22" name="type" checked></el-checkbox>
              <el-checkbox label="23" name="type" checked></el-checkbox>
              <el-checkbox label="24" name="type" checked></el-checkbox>
              <el-checkbox label="25" name="type" checked></el-checkbox>
              <el-checkbox label="26" name="type" checked></el-checkbox>
              <el-checkbox label="27" name="type" checked></el-checkbox>
              <el-checkbox label="28" name="type" checked></el-checkbox>
              <el-checkbox label="29" name="type" checked></el-checkbox>
              <el-checkbox label="30" name="type" checked></el-checkbox>
              <el-checkbox label="31" name="type" checked></el-checkbox>
              <el-checkbox label="32" name="type" checked></el-checkbox>
            </div>
            <div class="button-content">
              <el-button>USE ALL</el-button>
              <el-button>Forbid ALL</el-button>
            </div>
            <span class="top-title">GPS</span>
          </div>
          <div>
            <div class="checkbox-content">
              <el-checkbox label="1" name="type" checked></el-checkbox>
              <el-checkbox label="2" name="type" checked></el-checkbox>
              <el-checkbox label="3" name="type" checked></el-checkbox>
              <el-checkbox label="4" name="type" checked></el-checkbox>
              <el-checkbox label="5" name="type" checked></el-checkbox>
              <el-checkbox label="6" name="type" checked></el-checkbox>
              <el-checkbox label="7" name="type" checked></el-checkbox>
              <el-checkbox label="8" name="type" checked></el-checkbox>
              <el-checkbox label="9" name="type" checked></el-checkbox>
              <el-checkbox label="10" name="type" checked></el-checkbox>
              <el-checkbox label="11" name="type" checked></el-checkbox>
              <el-checkbox label="12" name="type" checked></el-checkbox>
              <el-checkbox label="13" name="type" checked></el-checkbox>
              <el-checkbox label="14" name="type" checked></el-checkbox>
              <el-checkbox label="15" name="type" checked></el-checkbox>
              <el-checkbox label="16" name="type" checked></el-checkbox>
              <el-checkbox label="17" name="type" checked></el-checkbox>
              <el-checkbox label="18" name="type" checked></el-checkbox>
              <el-checkbox label="19" name="type" checked></el-checkbox>
              <el-checkbox label="20" name="type" checked></el-checkbox>
              <el-checkbox label="21" name="type" checked></el-checkbox>
              <el-checkbox label="22" name="type" checked></el-checkbox>
              <el-checkbox label="23" name="type" checked></el-checkbox>
              <el-checkbox label="24" name="type" checked></el-checkbox>
            </div>
            <div class="button-content">
              <el-button>USE ALL</el-button>
              <el-button>Forbid ALL</el-button>
            </div>
            <span class="top-title">GLONASS</span>
          </div>
          <div>
            <div class="checkbox-content">
              <el-checkbox label="1" name="type" checked></el-checkbox>
              <el-checkbox label="2" name="type" checked></el-checkbox>
              <el-checkbox label="3" name="type" checked></el-checkbox>
              <el-checkbox label="4" name="type" checked></el-checkbox>
              <el-checkbox label="5" name="type" checked></el-checkbox>
              <el-checkbox label="6" name="type" checked></el-checkbox>
              <el-checkbox label="7" name="type" checked></el-checkbox>
              <el-checkbox label="8" name="type" checked></el-checkbox>
              <el-checkbox label="9" name="type" checked></el-checkbox>
              <el-checkbox label="10" name="type" checked></el-checkbox>
              <el-checkbox label="11" name="type" checked></el-checkbox>
              <el-checkbox label="12" name="type" checked></el-checkbox>
              <el-checkbox label="13" name="type" checked></el-checkbox>
              <el-checkbox label="14" name="type" checked></el-checkbox>
              <el-checkbox label="15" name="type" checked></el-checkbox>
              <el-checkbox label="16" name="type" checked></el-checkbox>
              <el-checkbox label="17" name="type" checked></el-checkbox>
              <el-checkbox label="18" name="type" checked></el-checkbox>
              <el-checkbox label="19" name="type" checked></el-checkbox>
              <el-checkbox label="20" name="type" checked></el-checkbox>
              <el-checkbox label="21" name="type" checked></el-checkbox>
              <el-checkbox label="22" name="type" checked></el-checkbox>
              <el-checkbox label="23" name="type" checked></el-checkbox>
              <el-checkbox label="24" name="type" checked></el-checkbox>
              <el-checkbox label="25" name="type" checked></el-checkbox>
              <el-checkbox label="26" name="type" checked></el-checkbox>
              <el-checkbox label="27" name="type" checked></el-checkbox>
              <el-checkbox label="28" name="type" checked></el-checkbox>
              <el-checkbox label="29" name="type" checked></el-checkbox>
              <el-checkbox label="30" name="type" checked></el-checkbox>
              <el-checkbox label="31" name="type" checked></el-checkbox>
              <el-checkbox label="32" name="type" checked></el-checkbox>
              <el-checkbox label="33" name="type" checked></el-checkbox>
              <el-checkbox label="34" name="type" checked></el-checkbox>
              <el-checkbox label="35" name="type" checked></el-checkbox>
              <el-checkbox label="36" name="type" checked></el-checkbox>
              <el-checkbox label="37" name="type" checked></el-checkbox>
            </div>
            <div class="button-content">
              <el-button>USE ALL</el-button>
              <el-button>Forbid ALL</el-button>
            </div>
            <span class="top-title">GPS</span>
          </div>
          <div>
            <div class="checkbox-content">
              <el-checkbox label="1" name="type" checked></el-checkbox>
              <el-checkbox label="2" name="type" checked></el-checkbox>
              <el-checkbox label="3" name="type" checked></el-checkbox>
              <el-checkbox label="4" name="type" checked></el-checkbox>
              <el-checkbox label="5" name="type" checked></el-checkbox>
              <el-checkbox label="6" name="type" checked></el-checkbox>
              <el-checkbox label="7" name="type" checked></el-checkbox>
              <el-checkbox label="8" name="type" checked></el-checkbox>
              <el-checkbox label="9" name="type" checked></el-checkbox>
              <el-checkbox label="10" name="type" checked></el-checkbox>
              <el-checkbox label="11" name="type" checked></el-checkbox>
              <el-checkbox label="12" name="type" checked></el-checkbox>
              <el-checkbox label="13" name="type" checked></el-checkbox>
              <el-checkbox label="14" name="type" checked></el-checkbox>
              <el-checkbox label="15" name="type" checked></el-checkbox>
              <el-checkbox label="16" name="type" checked></el-checkbox>
              <el-checkbox label="17" name="type" checked></el-checkbox>
              <el-checkbox label="18" name="type" checked></el-checkbox>
              <el-checkbox label="19" name="type" checked></el-checkbox>
              <el-checkbox label="20" name="type" checked></el-checkbox>
              <el-checkbox label="21" name="type" checked></el-checkbox>
              <el-checkbox label="22" name="type" checked></el-checkbox>
              <el-checkbox label="23" name="type" checked></el-checkbox>
              <el-checkbox label="24" name="type" checked></el-checkbox>
              <el-checkbox label="25" name="type" checked></el-checkbox>
              <el-checkbox label="26" name="type" checked></el-checkbox>
              <el-checkbox label="27" name="type" checked></el-checkbox>
              <el-checkbox label="28" name="type" checked></el-checkbox>
              <el-checkbox label="29" name="type" checked></el-checkbox>
              <el-checkbox label="30" name="type" checked></el-checkbox>
              <el-checkbox label="31" name="type" checked></el-checkbox>
              <el-checkbox label="32" name="type" checked></el-checkbox>
              <el-checkbox label="33" name="type" checked></el-checkbox>
              <el-checkbox label="34" name="type" checked></el-checkbox>
              <el-checkbox label="35" name="type" checked></el-checkbox>
              <el-checkbox label="36" name="type" checked></el-checkbox>
            </div>
            <div class="button-content">
              <el-button>USE ALL</el-button>
              <el-button>Forbid ALL</el-button>
            </div>
            <span class="top-title">GPS</span>
          </div>
        </div>
        <div class="rightside">
          <div>
            <div>
              <el-checkbox label="1C" name="type" checked></el-checkbox>
              <el-checkbox label="1P" name="type" checked></el-checkbox>
              <el-checkbox label="1W" name="type" checked></el-checkbox>
            </div>
            <div>
              <el-checkbox label="2C" name="type" checked></el-checkbox>
              <el-checkbox label="2P" name="type" checked></el-checkbox>
              <el-checkbox label="2W" name="type" checked></el-checkbox>
              <el-checkbox label="2S" name="type" checked></el-checkbox>
              <el-checkbox label="2L" name="type" checked></el-checkbox>
              <el-checkbox label="2X" name="type" checked></el-checkbox>
            </div>
            <div>
              <el-checkbox label="5I" name="type" checked></el-checkbox>
              <el-checkbox label="5Q" name="type" checked></el-checkbox>
              <el-checkbox label="5X" name="type" checked></el-checkbox>
            </div>
            <span class="top-title">GPS RTCM3.2 MSM Singal ID</span>
          </div>
          <div>
            <div>
              <el-checkbox label="1C" name="type" checked></el-checkbox>
              <el-checkbox label="1P" name="type"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="2C" name="type" checked></el-checkbox>
              <el-checkbox label="2P" name="type" checked></el-checkbox>
            </div>
            <span class="top-title">GLONASS RTCM3.2 MSM Singal ID</span>
          </div>
          <div>
            <div>
              <el-checkbox label="1I" name="type" checked></el-checkbox>
              <el-checkbox label="1Q" name="type" checked></el-checkbox>
              <el-checkbox label="1X" name="type" checked></el-checkbox>
              <span class="BDS-title">b1</span>
            </div>
            <div>
              <el-checkbox label="7I" name="type" checked></el-checkbox>
              <el-checkbox label="7Q" name="type" checked></el-checkbox>
              <el-checkbox label="7X" name="type" checked></el-checkbox>
              <span class="BDS-title">b2</span>
            </div>
            <div>
              <el-checkbox label="6I" name="type" checked></el-checkbox>
              <el-checkbox label="6Q" name="type" checked></el-checkbox>
              <el-checkbox label="6X" name="type" checked></el-checkbox>
              <span class="BDS-title">b3</span>
            </div>
            <span class="top-title">BDS RTCM3.2 Singal ID</span>
          </div>
          <div>
            <div>
              <el-checkbox label="1C" name="type" checked></el-checkbox>
              <el-checkbox label="1A" name="type" checked></el-checkbox>
              <el-checkbox label="1B" name="type" checked></el-checkbox>
              <el-checkbox label="1X" name="type" checked></el-checkbox>
              <el-checkbox label="1Z" name="type" checked></el-checkbox>
            </div>
            <div>
              <el-checkbox label="6C" name="type"></el-checkbox>
              <el-checkbox label="6A" name="type"></el-checkbox>
              <el-checkbox label="6B" name="type"></el-checkbox>
              <el-checkbox label="6X" name="type"></el-checkbox>
              <el-checkbox label="6Z" name="type"></el-checkbox>
            </div>
            <div>
              <el-checkbox label="7I" name="type" checked></el-checkbox>
              <el-checkbox label="7Q" name="type" checked></el-checkbox>
              <el-checkbox label="7X" name="type" checked></el-checkbox>
            </div>
            <div>
              <el-checkbox label="8I" name="type" checked></el-checkbox>
              <el-checkbox label="8Q" name="type" checked></el-checkbox>
              <el-checkbox label="8X" name="type" checked></el-checkbox>
            </div>
            <div>
              <el-checkbox label="5I" name="type"></el-checkbox>
              <el-checkbox label="5Q" name="type"></el-checkbox>
              <el-checkbox label="5X" name="type"></el-checkbox>
            </div>
            <span class="top-title">GAL RTCM3.2 MSM Singal ID</span>
          </div>
        </div>
        <div class="bottom">
          <el-checkbox label="Synchronization Solution" name="type"></el-checkbox>
        </div>
      </div>
    </el-form>
    <div class="test">
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSatelliteSet = false">CANCEL</el-button>
        <el-button type="primary" @click="dialogSatelliteSet = false">OK</el-button>
      </div>
    </div>

  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'dialogSatelliteSet',
  data() {
    return {
      dialogSatelliteSet: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    };
  },

  mounted() {
    //  箭头函数作用域
    bus.$on('changeSatelliteSet', reg => {
      this.dialogSatelliteSet = reg;
    });
  }
};
</script>
<style  lang="scss" scoped>
.satelliteSet-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .leftside {
    width: 60%;

    margin-right: 6px;
    > div {
      min-height: 108px;
      border: 1px solid #ddd;
      position: relative;
      width: 100%;
      display: flex;
      margin-bottom: 20px;
    }
    .checkbox-content {
      width: 80%;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      label {
        height: 22px;
        width: 40px;
      }
    }
    .button-content {
      width: 20%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      button {
        margin-bottom: 1px;
        margin-top: 1px;
      }
      .el-button--medium {
        padding: 10px;
        min-width: 90px;
      }
      .el-button + .el-button {
        margin-left: 0px;
      }
    }
    .el-checkbox {
      margin-right: 12px;
    }
    .el-checkbox + .el-checkbox {
      margin-left: 0;
    }
  }
  .rightside {
    width: 39%;
    > div {
      min-height: 109px;
      position: relative;
      width: 100%;
      border: 1px solid #ddd;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 10px;
      margin-bottom: 20px;
      label {
        height: 22px;
        width: 54px;
      }
      .BDS-title {
        margin-left: 26px;
      }
    }
    .el-checkbox + .el-checkbox {
      margin-left: 0;
    }
  }
  .bottom {
    width: 100%;
    padding-left: 80px;
  }

  .top-title {
    display: block;
    text-align: center;
    padding: 0 4px;
    background: white;
    position: absolute;
    top: -12px;
    left: 8px;
    font-size: 16px;
  }
}
.test {
  text-align: right;
  position: relative;
}
</style>