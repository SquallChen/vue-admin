<template>
  <el-dialog title="参数设置" :visible.sync="dialogSystemParameterSet" width="800px">
    <el-form :model="form">
      <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="NRS参数设置" name="first">
          <div class="NRSSet">
            <div class="NRSSet-top">
              <div>
                <el-form-item label="NRS边最大距离" :label-width="formLabelWidth">
                  <el-input v-model="paramSetting.nrsMaxDistance" auto-complete="off" step="5"></el-input>
                </el-form-item>
                <span>Km</span>
              </div>
              <div>
                <el-form-item label="网内物理基站距离" :label-width="formLabelWidth">
                  <el-input v-model="form.distance1" auto-complete="off" step="5"></el-input>
                </el-form-item>
                <span>Km</span>
              </div>
              <div>
                <el-form-item label="NRS边最小距离" :label-width="formLabelWidth">
                  <el-input v-model="paramSetting.nrsMinDistance" auto-complete="off" step="5"></el-input>
                </el-form-item>
                <span>Km</span>
              </div>
              <div>
                <el-form-item label="网外物理基站距离" :label-width="formLabelWidth">
                  <el-input v-model="paramSetting.inRealStationDistance" auto-complete="off" step="5"></el-input>
                </el-form-item>
                <span>Km</span>
              </div>
              <div>
                <el-form-item label="DEEP-NRS边最大距离" :label-width="formLabelWidth">
                  <el-input v-model="paramSetting.deepMaxDistance" auto-complete="off" step="5"></el-input>
                </el-form-item>
                <span>Km</span>
              </div>
              <div>
                <el-form-item label="平移距离" :label-width="formLabelWidth">
                  <el-input v-model="paramSetting.translationDistance" auto-complete="off" step="5"></el-input>
                </el-form-item>
                <span>Km</span>
              </div>
              <div>
                <el-form-item label="DEEP-NRS边最小距离" :label-width="formLabelWidth">
                  <el-input v-model="paramSetting.deepMinDistance" auto-complete="off" step="5"></el-input>
                </el-form-item>
                <span>Km</span>
              </div>
              <span class="top-title">服务设置</span>
            </div>
            <div class="NRSSet-middle">
              <div>
                <span>测站异常</span>
                <el-input-number v-model="stationAbnormalSecond" controls-position="right" @change="handleChange" :min="0" :max="20"></el-input-number>
                <span>秒</span>
                <span class="top-title">重构网</span>
              </div>
              <div>
                <el-checkbox label="启用" name="type" disabled v-model="isIntelligenceContruct"></el-checkbox>
                <el-input auto-complete="off" step="5" disabled v-model="paramSetting.intelligenceContructParam"></el-input>
                <span class="top-title">智能组网</span>
              </div>
            </div>
            <div class="NRSSet-bottom">
              <el-form-item label="电离层模型">
                <el-select v-model="paramSetting.ionosphereMode" placeholder="">
                  <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="对流模型">
                <el-select v-model="paramSetting.troposphericMode" placeholder="">
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <span class="bottom-title">模式选择与基线固定相关，如需修改，请验证</span>
              <span class="top-title">解算设置</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="星历参数设置" name="second">
          <div class="parameterset">
            <el-checkbox label="优先使用SP3" name="type" checked></el-checkbox>
          </div>
        </el-tab-pane>
        <el-tab-pane label="存储设置" name="third">
          <div class="storageLocation">
            <div class="rinex">
              <span>Rinex存储路径</span>
              <input type="file" webkitdirectory directory multiple/>
            </div>
            <div class="log">
              <div>
                <span>Rinex存储路径</span>
                <input type="file" webkitdirectory directory multiple/>
              </div>
              <div>
                <span>日志保存设置</span>
                <el-checkbox label="错误" name="type" checked></el-checkbox>
                <el-checkbox label="警告" name="type" checked></el-checkbox>
                <el-checkbox label="提示" name="type"></el-checkbox>
              </div>
              <span class="top-title">文本日志</span>
            </div>
            <div class="DBlog">
              <el-checkbox label="运行日志" name="type" checked></el-checkbox>
              <el-checkbox label="参数变换日志" name="type"></el-checkbox>
              <span class="top-title">数据库日志</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="updateNRS">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import bus from '@/store/eventbus';
import { getNRSData,updateNRSData } from '@/api/app.js';
export default {
  name: 'dialogSystemParameterSet',
  data() {
    return {
      dialogSystemParameterSet: false,
      activeName2: 'first',
      num8: 10,
      value1: 'Auto',
      form: {
        smtp: '0',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        distance1: '200'
      },
      options1: [
        {
          value: 0,
          label: 'Auto'
        },
        {
          value: 1,
          label: 'Klobuchar'
        },
        {
          value: 2,
          label: 'Neil'
        },
        {
          value: 3,
          label: 'Advance IONO'
        }
      ],
      options2: [
        {
          value: 0,
          label: 'Auto'
        },
        {
          value: 1,
          label: 'Saastamoine'
        },
        {
          value: 2,
          label: 'Hopfield'
        }
      ],
      formLabelWidth: '160px',
      paramSetting:'',
      isIntelligenceContruct:'',
      stationAbnormalSecond:'',
    };
  },
  methods: {
    NRSdata(){
      getNRSData().then(response=>{
        if(response.status===0){
          this.paramSetting = response.paramSetting;
          this.isIntelligenceContruct = this.paramSetting.isIntelligenceContruct === 1 ? true : false;
          this.stationAbnormalSecond = this.paramSetting.stationAbnormalSecond;
        }
      },
      reject=>{
        console.log(reject);
      })
    },
    updateNRS(){
      updateNRSData(this.paramSetting.nrsMaxDistance,this.paramSetting.nrsMinDistance,this.paramSetting.deepMaxDistance,this.paramSetting.deepMinDistance,this.paramSetting.inRealStationDistance,this.paramSetting.outRealStationDistance,this.paramSetting.translationDistance,this.paramSetting.ionosphereMode,this.paramSetting.troposphericMode,this.stationAbnormalSecond,transform(this.isIntelligenceContruct),this.paramSetting.intelligenceContructParam,).then(
        response=>{
          if(response.status===0){
            this.dialogSystemParameterSet= false;
            this.isSuccess('更新');
          }
        },
        relect=>{
           this.dialogSystemParameterSet= false;
           this.isFalse('更新');
        }
      )
    },
    isSuccess(v) {
      this.$message({
        showClose: true,
        message: v + '成功!',
        type: 'success',
        duration: 2000
      });
    },
    isFalse(v) {
      this.$message({
        showClose: true,
        message: v + '失败!',
        type: 'error',
        duration: 2000
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(value) {
      console.log(value);
    }
  },
  mounted() {
    //  箭头函数作用域
    bus.$on('changeSystemParameterSet', reg => {
      this.dialogSystemParameterSet = reg;
      this.NRSdata();
    });
  }
};
//布尔值转换
function transform(v) {
  return v ? 1 : 0;
}
</script>
<style lang="scss" scoped>
.NRSSet {
  width: 100%;
  .NRSSet-top {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ddd;
    padding-top: 10px;
    padding-left: 10px;
    > div {
      display: flex;
      margin-right: 20px;
      span {
        margin-left: 10px;
        position: relative;
        top: 6px;
      }
    }

    .el-form-item__content {
      margin-left: 10px;
    }
    .el-input {
      width: 144px;
    }
    .el-form-item {
      margin-bottom: 10px;
    }
  }
  .NRSSet-middle {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    > div {
      text-align: center;
      padding: 20px;
      position: relative;
      width: 49%;
      border: 1px solid #ddd;
      min-height: 80px;
      .el-input-number {
        width: 160px;
      }
      .el-input {
        width: 140px;
      }
      label {
        margin-right: 30px;
      }
    }
  }
  .NRSSet-bottom {
    position: relative;
    border: 1px solid #ddd;
    min-height: 80px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 36px;
    padding-top: 20px;
    .el-select {
      width: 220px;
    }
    .el-form-item {
      min-width: 340px;
    }
    .el-form-item__label {
      width: 120px;
    }
    .bottom-title {
      position: relative;
      top: -14px;
    }
  }
}
.parameterset {
  padding: 30px;
}
.storageLocation {
  > div {
    position: relative;
    min-height: 80px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
  }
  .rinex {
    padding-top: 30px;
    padding-left: 30px;
    span {
      margin-right: 20px;
    }
  }
  .log {
    padding-top: 20px;
    padding-left: 30px;
    div {
      padding-bottom: 10px;
    }
    span {
      margin-right: 20px;
    }
  }
  .DBlog {
    padding-top: 26px;
    padding-left: 30px;
  }
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