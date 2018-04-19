<template>
  <el-dialog title="基站管理" :visible.sync="dialogManagement" width="960px" top="10vh">
    <el-form :inline="true" :model="formInline" class="demo-form-inline management">
      <el-form-item label="基站名">
        <el-input v-model="formInline.user" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="连接类型">
        <!-- :disabled="test === true" -->
        <el-select v-model="connectionTypevalue" placeholder="">
          <el-option v-for="item in connectionType" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="命令类型">
        <el-select v-model="commandtypevalue" placeholder="">
          <el-option v-for="item in commandType" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="ID">
        <el-input v-model="formInline.user" placeholder="" type="number"></el-input>
      </el-form-item>
      <div class="middle-content">
        <div class="middle-left">
          <div class="left-top">
            <el-form-item label="串口号">
              <el-select v-model="serialportnumbervalue" placeholder="" :disabled="connectionTypevalue !== 'serialport'">
                <el-option v-for="item in serialportNumber" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="通讯率">
              <el-select v-model="communicationratevalue" placeholder="" :disabled="connectionTypevalue !== 'serialport'">
                <el-option v-for="item in communicationRate" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <span class="top-title">串口</span>
          </div>
          <div class="right-top">
            <el-form-item label="服务端口">
              <el-input v-model="formInline.serviceport" placeholder="0" type="number" :disabled="connectionTypevalue !== 'webserver' && connectionTypevalue !== 'ipv6server'"></el-input>
            </el-form-item>
            <span class="top-title">网络服务器</span>
          </div>
          <div class="left-bottom">
            <el-form-item label="天线类型">
              <el-select v-model="antennatypevalue" placeholder="" class="resetselect">
                <el-option v-for="item in antennaType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <div class="l1l2">
              <el-form-item label="L1(mm)">
                <el-input v-model="formInline.l11" placeholder="" disabled></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="formInline.l12" placeholder="" disabled></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="formInline.l13" placeholder="" disabled></el-input>
              </el-form-item>
              <el-form-item label="L2(mm)">
                <el-input v-model="formInline.l21" placeholder="" disabled></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="formInline.l22" placeholder="" disabled></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input v-model="formInline.l23" placeholder="" disabled></el-input>
              </el-form-item>
            </div>

          </div>
        </div>
        <div class="middle-right">
          <el-form-item label="IP">
            <el-input v-model="formInline.ip" placeholder="" :disabled="connectionTypevalue !== 'webclient'&&connectionTypevalue !== 'ntripclient'&&connectionTypevalue !== 'ntripserver'&&connectionTypevalue !== 'topcontelnet'"></el-input>
          </el-form-item>
          <el-form-item label="Port">
            <el-input v-model="formInline.port" placeholder="" :disabled="connectionTypevalue !== 'webclient'&&connectionTypevalue !== 'ntripclient'&&connectionTypevalue !== 'ntripserver'&&connectionTypevalue !== 'topcontelnet'"></el-input>
          </el-form-item>
          <el-form-item label="Mount">
            <el-input v-model="formInline.mount" placeholder="" :disabled="connectionTypevalue !== 'ntripclient'&&connectionTypevalue !== 'ntripserver'"></el-input>
          </el-form-item>
          <el-form-item label="Login Name">
            <el-input v-model="formInline.loginname" placeholder="" :disabled="connectionTypevalue !== 'ntripclient'&&connectionTypevalue !== 'topcontelnet'"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="formInline.password" placeholder="" :disabled="connectionTypevalue !== 'ntripclient'&&connectionTypevalue !== 'ntripserver'&&connectionTypevalue !== 'topcontelnet'"></el-input>
          </el-form-item>
          <el-checkbox label="Send GGA" name="type" checked :disabled="connectionTypevalue !== 'ntripclient'"></el-checkbox>
          <span class="top-title">网络客户端</span>
        </div>
      </div>
      <div class="bottom-footer">
        <div class="footer-top">
          <el-form-item label="X(m)">
            <el-input v-model="formInline.x" placeholder="" :disabled="radio !== 1"></el-input>
          </el-form-item>
          <el-form-item label="B(DD.MMSS)">
            <el-input v-model="formInline.b" placeholder="" :disabled="radio === 1"></el-input>
          </el-form-item>
          <el-form-item label="NORTH(m)">
            <el-input v-model="formInline.north" placeholder="" disabled></el-input>
          </el-form-item>
          <el-form-item label="Y(m)">
            <el-input v-model="formInline.y" placeholder="" :disabled="radio !== 1"></el-input>
          </el-form-item>
          <el-form-item label="L(DD.MMSS)">
            <el-input v-model="formInline.l" placeholder="" :disabled="radio === 1"></el-input>
          </el-form-item>
          <el-form-item label="EAST(m)">
            <el-input v-model="formInline.east" placeholder="" disabled></el-input>
          </el-form-item>
          <el-form-item label="Z(m)">
            <el-input v-model="formInline.z" placeholder="" :disabled="radio !== 1"></el-input>
          </el-form-item>
          <el-form-item label="H(m)">
            <el-input v-model="formInline.h" placeholder="" :disabled="radio === 1"></el-input>
          </el-form-item>
          <el-form-item label="UP(m)">
            <el-input v-model="formInline.up" placeholder="" disabled></el-input>
          </el-form-item>
        </div>
        <div class="footer-bottom">
          <el-radio-group v-model="radio">
            <el-radio :label="1">XYZ</el-radio>
            <el-radio :label="2">BLH</el-radio>
          </el-radio-group>
          <!-- <el-checkbox label="XYZ" name="type" checked></el-checkbox>
          <el-checkbox label="BLH" name="type" ></el-checkbox> -->
          <el-checkbox label="基岩" name="type" disabled></el-checkbox>
          <el-checkbox label="自动获取" name="type" disabled></el-checkbox>
          <el-checkbox label="测试站" name="type" disabled></el-checkbox>
          <el-checkbox label="固定基站" name="type" checked disabled></el-checkbox>
        </div>
        <span class="top-title">天线情况</span>
      </div>
    </el-form>

    <div slot="footer" class="dialog-footer" style="text-align:center">
      <el-button disabled>
        <<</el-button>
          <el-button disabled>>></el-button>
          <el-button>新 增</el-button>
          <el-button disabled>删 除</el-button>
          <el-button disabled>备 份</el-button>
          <el-button>导 入</el-button>
          <el-button>启动停止</el-button>
          <el-button type="primary" @click="dialogManagement=false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'dialogManagement',
  methods: {},
  mounted() {
    //  箭头函数作用域
    bus.$on('changeManagement', reg => {
      this.dialogManagement = reg;
    });
  },
  data() {
    return {
      radio: 1,
      connectionTypevalue: 'serialport',
      commandtypevalue: 'Auto',
      serialportnumbervalue: '',
      communicationratevalue: '',
      antennatypevalue: '',
      test: true,
      dialogManagement: false,
      value: '',
      formInline: {
        user: '',
        region: '',
        serviceport: '',
        ip: '',
        port: '0',
        mount: '',
        loginname: '',
        password: '',
        x: '0',
        y: '0',
        z: '0',
        b: '0',
        l: '0',
        h: '0',
        north: '0',
        east: '0',
        up: '0',
        l11: 0,
        l12: 0,
        l13: 0,
        l21: 0,
        l22: 0,
        l23: 0
      },
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
      options: [
        {
          value: 'auto',
          label: 'auto'
        },
        {
          value: 'Novatel',
          label: 'Novatel'
        }
      ],
      connectionType: [
        {
          value: 'serialport',
          label: '串口'
        },
        {
          value: 'webserver',
          label: '网络服务端'
        },
        {
          value: 'webclient',
          label: '网络客户端'
        },
        {
          value: 'ntripclient',
          label: 'Ntrip客户端'
        },
        {
          value: 'ipv6server',
          label: 'IPV6服务端'
        },
        {
          value: 'ntripserver',
          label: 'Ntrip Server'
        },
        {
          value: 'topcontelnet',
          label: 'Topcon Telnet'
        }
      ],
      commandType: [
        {
          value: 'auto',
          label: 'Auto'
        },
        {
          value: 'trimblert27',
          label: 'Trimble RT27'
        },
        {
          value: 'novatel',
          label: 'Novatel'
        },
        {
          value: 'comnav',
          label: 'ComNav'
        },
        {
          value: 'unicore',
          label: 'UNICORE'
        },
        {
          value: 'topcon',
          label: 'TOPCON(Java)'
        },
        {
          value: 'hemisphere',
          label: 'Hemisphere'
        },
        {
          value: 'rtcm3.x',
          label: 'RTCM 3.X'
        },
        {
          value: 'southdataexchange',
          label: 'SOUTH DATA EXCHANGE'
        }
      ],
      serialportNumber: [
        {
          value: 'com2',
          label: 'COM2'
        }
      ],
      communicationRate: [
        {
          value: '9600',
          label: '9600'
        },
        {
          value: '19200',
          label: '19200'
        },
        {
          value: '38400',
          label: '384000'
        },
        {
          value: '57600',
          label: '57600'
        },
        {
          value: '115200',
          label: '115200'
        }
      ],
      antennaType: [
        {
          value: 'antnna_phase',
          label: 'Antnna_phase'
        }
      ],
      formLabelWidth: '120px'
    };
  }
};
</script>
<style>
.management .el-form-item__label {
  width: 80px;
}
.middle-content {
  width: 100%;
  height: 300px;
  display: flex;
}
.middle-content .middle-left {
  width: 60%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.middle-content .middle-left .left-top {
  width: 47%;
  height: 50%;
  border: 1px solid #ddd;
  padding-top: 26px;
  position: relative;
  margin-right: 3%;
}
.middle-content .middle-left .left-top .el-form-item__label {
  width: 72px;
}
.middle-content .middle-left .right-top {
  padding-top: 20px;
  padding-left: 23px;
  width: 50%;
  height: 50%;
  border: 1px solid #ddd;
  position: relative;
}
.middle-content .middle-left .left-top .el-input--medium .el-input__inner {
  width: 160px;
}
.middle-content .middle-left .right-top .el-input--medium .el-input__inner {
  width: 230px;
}
.middle-content .middle-left .left-bottom {
  width: 100%;
  height: 50%;
  padding-left: 60px;
  padding-top: 14px;
}

.left-bottom input {
  width: 383px;
}
.left-bottom .l1l2 input {
  width: 110px;
  margin-right: 23px;
}
.left-bottom .el-form-item {
  margin-bottom: 5px;
  margin-right: 0;
}

.middle-content .middle-right {
  width: 38%;
  height: 100%;
  border: 1px solid #ddd;
  margin-left: 2%;
  position: relative;
  padding-top: 14px;
}
.middle-content .middle-right label {
  width: 100px;
}
.middle-content .middle-right input {
  width: 230px;
}
.middle-content .middle-right .el-form-item {
  margin-bottom: 14px;
}
.middle-content .middle-right .el-checkbox {
  margin-left: 120px;
}
.bottom-footer {
  width: 100%;
  height: 200px;
  border: 1px solid #ddd;
  position: relative;
  padding-top: 14px;
  margin-top: 10px;
}
.bottom-footer .footer-top label {
  width: 90px;
  margin-right: 5px;
}
.bottom-footer .footer-top input {
  width: 182px;
  margin-right: 5px;
}
.bottom-footer .footer-top .el-form-item {
  margin-bottom: 10px;
}
.bottom-footer .footer-bottom {
  margin-left: 80px;
  margin-top: 8px;
}
.bottom-footer .footer-bottom .el-radio-group {
  margin-right: 60px;
}
.bottom-footer .footer-bottom .el-radio + .el-radio {
  margin-left: 50px;
}
.bottom-footer .el-checkbox {
  width: 90px;
}
.dialog-footer .el-button {
  width: 90px;
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
</style>