<template>
  <div>
    <el-dialog title="基站管理" :visible.sync="dialogManagement" width="960px" top="10vh">
      <el-form :inline="true" class="demo-form-inline management">
        <el-form-item label="基站名">
          <el-input v-model="baseStationName" placeholder="" :disabled="disabledstate !== 0"></el-input>
        </el-form-item>
        <el-form-item label="连接类型">
          <el-select v-model="mode" placeholder="" :disabled="disabledstate !== 0">
            <el-option v-for="item in modeType" :key="item.value" :label="item.label" :value="item.value">
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
          <!-- 正则限制中文输入，只能输入字母和数字 -->
          <el-input v-model="stationId" placeholder="" :disabled="disabledstate !== 0" maxlength="4" type="string" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"></el-input>
        </el-form-item>
        <el-form-item label="子网ID">
          <el-select v-model="SubnetIDvalue" placeholder="" :disabled="disabledstate !== 0">
            <el-option v-for="item in SubnetID" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <div class="middle-content">
          <div class="middle-left">
            <div class="left-top">
              <el-form-item label="串口号">
                <el-select v-model="serialportnumbervalue" placeholder="" :disabled="mode !== 0">
                  <el-option v-for="item in serialportNumber" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="通讯率">
                <el-select v-model="communicationratevalue" placeholder="" :disabled="mode !== 0">
                  <el-option v-for="item in communicationRate" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <span class="top-title">串口</span>
            </div>
            <div class="right-top">
              <el-form-item label="服务端口">
                <el-input v-model="serverPort" placeholder="0" type="number" :disabled="mode !== 1 && mode !== 4"></el-input>
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
              <!-- :disabled根据连接类型select的值判断其他输入框的状态 -->
              <el-input v-model="clientIp" placeholder="" :disabled="mode !== 2&&mode !== 3&&mode !== 5&&mode !== 6"></el-input>
            </el-form-item>
            <el-form-item label="Port">
              <el-input v-model="clientPort" placeholder="" :disabled="mode !== 2&&mode !== 3&&mode !== 5&&mode !== 6"></el-input>
            </el-form-item>
            <el-form-item label="Mount">
              <el-input v-model="formInline.mount" placeholder="" :disabled="mode !== 3&&mode !== 5"></el-input>
            </el-form-item>
            <el-form-item label="Login Name">
              <el-input v-model="formInline.loginname" placeholder="" :disabled="mode !== 3&&mode !== 6"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input v-model="formInline.password" placeholder="" :disabled="mode !== 3&&mode !== 5&&mode !== 6"></el-input>
            </el-form-item>
            <el-checkbox label="Send GGA" name="type" checked :disabled="mode !== 3"></el-checkbox>
            <span class="top-title">网络客户端</span>
          </div>
        </div>
        <div class="bottom-footer">
          <div class="footer-top">
            <el-form-item label="X(m)">
              <el-input v-model="x" placeholder="" :disabled="radio !== 1||disabledstate!==0"></el-input>
            </el-form-item>
            <el-form-item label="B(DD.MMSS)">
              <el-input v-model="b" placeholder="" :disabled="radio === 1"></el-input>
            </el-form-item>
            <el-form-item label="NORTH(m)">
              <el-input v-model="formInline.north" placeholder="" :disabled="disabledstate !== 0"></el-input>
            </el-form-item>
            <el-form-item label="Y(m)">
              <el-input v-model="y" placeholder="" :disabled="radio !== 1||disabledstate!==0"></el-input>
            </el-form-item>
            <el-form-item label="L(DD.MMSS)">
              <el-input v-model="l" placeholder="" :disabled="radio === 1"></el-input>
            </el-form-item>
            <el-form-item label="EAST(m)">
              <el-input v-model="formInline.east" placeholder="" :disabled="disabledstate !== 0"></el-input>
            </el-form-item>
            <el-form-item label="Z(m)">
              <el-input v-model="z" placeholder="" :disabled="radio !== 1||disabledstate!==0"></el-input>
            </el-form-item>
            <el-form-item label="H(m)">
              <el-input v-model="h" placeholder="" :disabled="radio === 1"></el-input>
            </el-form-item>
            <el-form-item label="UP(m)">
              <el-input v-model="formInline.up" placeholder="" :disabled="disabledstate !== 0"></el-input>
            </el-form-item>
          </div>
          <div class="footer-bottom">
            <el-radio-group v-model="radio">
              <el-radio :label="1">XYZ</el-radio>
              <el-radio :label="2">BLH</el-radio>
            </el-radio-group>
            <el-checkbox label="基岩" name="type" :disabled="disabledstate !== 0"></el-checkbox>
            <el-checkbox label="自动获取" name="type" :disabled="disabledstate !== 0"></el-checkbox>
            <el-checkbox label="测试站" name="type" :disabled="disabledstate !== 0"></el-checkbox>
            <el-checkbox label="固定基站" name="type" checked :disabled="disabledstate !== 0"></el-checkbox>
          </div>
          <span class="top-title">天线情况</span>
        </div>
      </el-form>

      <div slot="footer" class="dialog-footer" style="text-align:center">
        <!-- 如果当前listIndex大于0，上一页按钮可点击 -->
        <el-button :disabled="listIndex <= 0" @click="previousstation">
          &#60;&#60;</el-button>
            <!-- 如果返回数据大于1（按钮可点击）并且当前listIndex不大于listlength - 2，下一页按钮可点击 -->
            <el-button :disabled="rightBtnStatus !== 0&&listIndex >listlength - 2" @click="nextstation">&#62;&#62;</el-button>
            <el-button @click="isDisabled">新 增</el-button>
            <el-button :disabled="elementstatus !== 0" @click="delectdialogVisible = true">删 除</el-button>
            <el-button :disabled="elementstatus !== 0">备 份</el-button>
            <el-button>导 入</el-button>
            <el-button>启动停止</el-button>
            <el-button type="primary" @click="isUpdated">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 再次确认删除弹窗 -->
    <el-dialog title="提示" :visible.sync="delectdialogVisible" width="30%">
      <span>确定删除该基站？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delectdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteOperation(Id)">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 再次确认新增弹窗 -->
    <el-dialog title="提示" :visible.sync="adddialogVisible" width="30%">
      <span>确定新增该基站？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="adddialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOperation(baseStationName, stationId, serverPort, x, y, z, clientIp, clientPort, b, l, h, status, netId, mode)">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 再次确认更新弹窗 -->
    <el-dialog title="提示" :visible.sync="UpdateddialogVisible" width="30%">
      <span>确定修改基站信息？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="UpdateddialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="UpdatedOperation(baseStationName, Id,stationId, serverPort, x, y, z, clientIp, clientPort, b, l, h, netId, mode)">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import bus from '@/store/eventbus';
import { BaseInfo, AddBaseStation, DeleteBaseStation, UpdatedBaseStation } from '@/api/app.js';
export default {
  name: 'dialogManagement',
  methods: {
    // 发出请求获取接口数据
    getList() {
      BaseInfo(this.listQuery.page_num, this.listQuery.num_per_page).then(
        response => {
          this.list = response.recordList;
          this.listlength = this.list.length;
          // 获取数据后，调用方法赋予表单元素默认参数，绑定this避免调用的方法内部this的undefind
          // this.$options.methods.assignment.bind(this)();
          // 如果返回的数组长度大于1，>>按钮处于可点击状态
          if (this.listlength >= 1) {
            this.$options.methods.assignment.bind(this)();
            this.rightBtnStatus = 0;
          } else if (this.listlength <= 0) {
            this.$options.methods.clearElement.bind(this)();
            this.rightBtnStatus = 1;
            this.disabledstate = 1;
          }
          // 已经存在基站数据并成功获取,更改表单元素的状态
          if (this.listlength > 0) {
            this.elementstatus = 0;
            this.disabledstate = 0;
          }
        },
        reject => {
          console.log('请求失败！');
        }
      );
    },
    // 表单元素赋予默认值方法
    assignment() {
      this.baseStationName = this.list[this.listIndex].stationName;
      this.Id = this.list[this.listIndex].id;
      this.stationId = this.list[this.listIndex].stationId;
      this.serverPort = this.list[this.listIndex].serverPort;
      this.clientIp = this.list[this.listIndex].clientIp;
      this.clientPort = this.list[this.listIndex].clientPort;
      this.x = this.list[this.listIndex].x;
      this.y = this.list[this.listIndex].y;
      this.z = this.list[this.listIndex].z;
      this.b = this.list[this.listIndex].b;
      this.l = this.list[this.listIndex].l;
      this.h = this.list[this.listIndex].h;
      this.mode = this.list[this.listIndex].mode;
    },
    // 如果listlength为0，清空表单元素
    clearElement() {
      this.baseStationName = '';
      this.Id = '';
      this.stationId = '';
      this.serverPort = '';
      this.clientIp = '';
      this.clientPort = '';
      this.x = '';
      this.y = '';
      this.z = '';
      this.b = '';
      this.l = '';
      this.h = '';
      this.mode = '';
    },
    // “>>按钮” ：如果后面还有数据，则listIndex+1.如果是最后一项，则禁用>>按钮； rightBtnStatus判断该按钮是否处于可用状态
    nextstation() {
      if (this.listIndex < this.listlength - 2) {
        this.listIndex += 1;
        this.rightBtnStatus = 0;
        // listIndex点击更改后，赋予表单元素新的默认参数
        this.$options.methods.assignment.bind(this)();
      } else if (this.listIndex === this.listlength - 2) {
        this.listIndex += 1;
        // listIndex点击更改后，赋予表单元素新的默认参数
        this.$options.methods.assignment.bind(this)();
        this.rightBtnStatus = 1;
      } else {
        this.rightBtnStatus = 1;
      }
    },
    // “<<按钮”：如果当前listIndex>0,可点击；
    previousstation() {
      if (this.listIndex > 0) {
        this.listIndex -= 1;
        // listIndex点击更改后，赋予表单元素新的默认参数
        this.$options.methods.assignment.bind(this)();
      }
    },
    // 如果之前不存在基站数据，首次点击‘新增’按钮将元素改为可用状态；再次点击调用表单验证方法，验证全通过弹出再次确认窗口
    isDisabled() {
      if (this.disabledstate !== 0) {
        this.disabledstate = 0;
      } else {
        // this.adddialogVisible = true;
        this.$options.methods.verification.bind(this)();
      }
    },
    // 表单验证方法
    verification() {
      for (var i = 0; i < this.list.length; i++) {
        if (this.stationId === this.list[i].stationId) {
          alert('ID重复，请重新输入！');
          this.adddialogVisible = false;
          return;
        }
      }
      if (this.stationId.length !== 4) {
        alert('ID长度必须为4！');
        this.adddialogVisible = false;
        return;
      }
      if (this.baseStationName === '') {
        alert('基站名不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.serverPort === '') {
        alert('服务端口不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.clientIp === '') {
        alert('网络客户端IP不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.clientPort === '') {
        alert('网络客户端Port不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.x === '') {
        alert('空间坐标x不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.y === '') {
        alert('空间坐标y不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.z === '') {
        alert('空间坐标z不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.xb === '') {
        alert('基站纬度b不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.l === '') {
        alert('基站经度l不能为空！');
        this.adddialogVisible = false;
        return;
      }
      if (this.h === '') {
        alert('基站高度h不能为空！');
        this.adddialogVisible = false;
        return;
      }
      // 验证全通过后，弹出再次确认窗口
      this.adddialogVisible = true;
    },
    // 如果按钮处于禁用状态（因为没有获取到远程数据；1为禁用，0为可用；），首次点击‘新增’将其改为可用状态，再次点击进行新增基站操作
    addOperation(station_name, station_id, server_port, x, y, z, client_ip, client_port, b, l, h, status, net_id, mode) {
      // 调用添加基站的请求方法
      AddBaseStation(station_name, station_id, server_port, x, y, z, client_ip, client_port, b, l, h, status, net_id, mode).then(
        response => {
          alert('新增基站成功！');
          bus.$emit('RefreshAfterAdd', true);
          this.listIndex = 0;
          // 删除后隐藏弹窗
          this.adddialogVisible = false;
          this.dialogManagement = false;
        },
        reject => {
          console.log('请求失败！');
        }
      );
    },

    UpdatedOperation(station_name, id, station_id, server_port, x, y, z, client_ip, client_port, b, l, h, net_id, mode) {
      UpdatedBaseStation(station_name, id, station_id, server_port, x, y, z, client_ip, client_port, b, l, h, net_id, mode).then(
        response => {
          alert('更新基站成功！');
          bus.$emit('RefreshAfterUpdated', true);
          this.listIndex = 0;
          // 删除后隐藏弹窗
          this.UpdateddialogVisible = false;
          this.dialogManagement = false;
        },
        reject => {
          console.log('请求失败！');
        }
      );
    },
    // 判断内容是否有所修改，并弹出确定框
    isUpdated() {
      if (this.baseStationName === this.list[this.listIndex].stationName &&
      this.Id === this.list[this.listIndex].id &&
      this.stationId === this.list[this.listIndex].stationId &&
      this.serverPort === this.list[this.listIndex].serverPort &&
      this.clientIp === this.list[this.listIndex].clientIp &&
      this.clientPort === this.list[this.listIndex].clientPort &&
      this.x === this.list[this.listIndex].x &&
      this.y === this.list[this.listIndex].y &&
      this.z === this.list[this.listIndex].z &&
      this.b === this.list[this.listIndex].b &&
      this.l === this.list[this.listIndex].l &&
      this.h === this.list[this.listIndex].h &&
      this.mode === this.list[this.listIndex].mode) {
        // 如果内容没有更新，点击‘确定’直接关闭窗口
        this.dialogManagement = false;
      } else {
        // 如果内容更新，点击‘确定’弹出再次确认修改窗口
        this.UpdateddialogVisible = true;
      }
    },
    // 删除基站操作
    deleteOperation(id) {
      DeleteBaseStation(id).then(
        response => {
          alert('删除成功！');
          bus.$emit('RefreshAfterDeletion', true);
          // 将listIndex重置，避免删除最后一项时造成undefined出现
          this.listIndex = 0;
          // 删除后隐藏弹窗
          this.delectdialogVisible = false;
          this.dialogManagement = false;
        },
        reject => {
          console.log('删除失败！');
        }
      );
    }
  },
  created() {
    // 创建实例时请求数据
    this.getList();
  },
  mounted() {
    // 根据sidebaritem或basesituation传过来的值更改当前dialog展示状态
    bus.$on('changeManagement', reg => {
      this.dialogManagement = reg;
      // 在页面更新完成后再请求一次数据，避免双向绑定数据误修改本地数据与远程数据产生差别
      this.$nextTick(this.getList());
    });
    // 如果从‘管理’按钮打开dialog,更改当前listIndex为被点击的基站index
    bus.$on('management', reg => {
      this.listIndex = reg;
    });
  },
  data() {
    return {
      baseStationName: '',
      Id: '',
      stationId: '',
      serverPort: '',
      clientIp: '',
      clientPort: '',
      x: '',
      y: '',
      z: '',
      b: '',
      l: '',
      h: '',
      status: 0,
      mode: 0,
      netId: 9527,
      data: '',
      list: [{}],
      listIndex: 0,
      listlength: '',
      rightBtnStatus: 1,
      leftBtnStatus: 1,
      elementstatus: 1,
      disabledstate: 1,
      delectdialogVisible: false,
      adddialogVisible: false,
      UpdateddialogVisible: false,
      radio: 1,
      commandtypevalue: 'Auto',
      SubnetIDvalue: 'Auto',
      serialportnumbervalue: '',
      communicationratevalue: '',
      antennatypevalue: 'antnna_phase',
      dialogManagement: false,
      listQuery: {
        page_num: 1,
        num_per_page: 10
      },
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
      modeType: [
        {
          value: 0,
          label: '串口'
        },
        {
          value: 1,
          label: '网络服务端'
        },
        {
          value: 2,
          label: '网络客户端'
        },
        {
          value: 3,
          label: 'Ntrip客户端'
        },
        {
          value: 4,
          label: 'IPV6服务端'
        },
        {
          value: 5,
          label: 'Ntrip Server'
        },
        {
          value: 6,
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
      SubnetID: [
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
.left-bottom .el-input__suffix{
  right: 5px;
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