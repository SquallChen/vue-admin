<template>
  <div class="TableContent">
    <el-table :data="tableData" border style="width: 100%" height="100%" tooltip-effect="dark">
      <el-table-column fixed prop="name" label="Name" min-width="60" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="epochnumber" label="历元数" min-width="240" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="epochtime" label="历元时间" min-width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="receivedata" label="接收数据" min-width="110" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="Datadelay" label="数据延迟" min-width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="sn" label="S/N" min-width="240" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="sw" label="SW" min-width="240" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="id" label="ID" min-width="60" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="mode" label="Mode" min-width="80" show-overflow-tooltip>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="50" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="text" size="small">管理</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  name: 'ComponentsOne',
  methods: {
    handleClick(row) {
      console.log(row);
    },
    popup_page1() {
      document.getElementById('basestationManagement').style.display = 'block';
    }
  },
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        },
        {
          name: '虎门',
          epochnumber:
            '23-100%-100%-98.74%(G10-R6-C8)23-100%-100%-98.74%(G10-R6-C8)',
          epochtime: '09：01：56',
          receivedata: '0(M)1862',
          Datadelay: '52(ms)',
          sn: 'S48F27107059144/1223015596/0024581445',
          sw: 'T8B14208/0049300493/1.25s-1.10A-1',
          id: 'ESHA',
          mode: '网络客户端'
        }
      ]
    };
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
.el-table{
  /* height:700px !important; */
}
</style>