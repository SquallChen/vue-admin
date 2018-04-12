<template>
  <div class="TableContent">
    <el-table :data="list" border style="width: 100%" height="100%" tooltip-effect="dark"  v-loading="false"
          element-loading-text="加载中...">
      <el-table-column fixed prop="stationName" label="基站名" min-width="70" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="clientIp" label="ClientIp" min-width="80" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="clientPort" label="ClientPort" min-width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="b" label="基站纬度" min-width="144" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="h" label="基站高程" min-width="77" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="id" label="ID" min-width="295" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="l" label="基站经度" min-width="148" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="location" label="Location" min-width="250" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="mode" label="Mode" min-width="60" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="netId" label="子网ID" min-width="64" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="x" label="空间坐标X" min-width="126" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="y" label="空间坐标Y" min-width="126" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="z" label="空间坐标Z" min-width="126" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="status" label="基站状态" min-width="60" show-overflow-tooltip>
      </el-table-column>
       <el-table-column prop="serverPort" label="SeverPort" min-width="80" show-overflow-tooltip>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="50" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="text" size="small">管理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <dialogManagement></dialogManagement>
    <dialogParameterSet></dialogParameterSet>
  </div>

</template>

<script>
import { BaseInfo } from "@/api/app.js";
import dialogManagement from '@/components/dialog/dialogManagement';
import dialogParameterSet from '@/components/dialog/dialogParameterSet';
export default {
  name: "ComponentsOne",
  methods: {
    getList() {
      this.listLoading = true;
      BaseInfo(this.listQuery.page_num, this.listQuery.num_per_page).then(response => {
        this.list = response.recordList;
        this.listLoading = false;
      },reject=>{
        console.log("请求失败！")
      });
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page_num: 1,
        num_per_page: 10
      },
      dialogVisible: false,
      tableData: [
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        },
        {
          name: "虎门",
          epochnumber:
            "23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)",
          epochtime: "09：01：56",
          receivedata: "0(M)1862",
          Datadelay: "52(ms)",
          sn: "S48F27107059144/1223015596/0024581445",
          sw: "T8B14208/0049300493/1.25s-1.10A-1",
          id: "ESHA",
          mode: "网络客户端"
        }
      ]
    };
  },
  created() {
    this.getList();
  },
   components: {
    dialogManagement,
    dialogParameterSet
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
.el-table {
  /* height:700px !important; */
}
</style>