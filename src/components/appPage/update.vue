<template>
  <div class="update app-container" style="width: 60%; margin-left:15%;">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="App名称">
        <el-select style="width: 100%;" class="filter-item" placeholder="请选择App" v-model="checkApp" @change="toggleApp">
          <el-option v-for="v in appArr" :key="v.id" :label="v.appName" :value="v.id + '-' + v.type" :type="v.type"></el-option>
       </el-select>
      </el-form-item>
      <el-form-item label="App版本">
        <el-input v-model="form.version"></el-input>
      </el-form-item>
      <el-form-item label="更新说明">
        <el-input type="textarea" :rows="6" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="更新方式">
        {{updateDes}}
      </el-form-item>
      <el-form-item label="重大更新">
        (客户端判断是否需要强制更新)
        <el-radio-group v-model="form.is_important">
          <el-radio label="1" style="margin-left: 20px;">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="APP更新包">
        <el-upload class="upload-demo" ref="upload" drag :action="updateUrl" :multiple="false" :auto-upload="false" :data="form" :on-success="handleSuccess" :on-error="error">
          <i class="el-icon-upload" :data="form" :accept="form.fileType" ></i>
          <div class="el-upload__text">将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitUpload" style="width: 200px">立即创建</el-button>
        <el-button style="width: 200px">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { appList } from '@/api/app.js';
import { mapGetters } from 'vuex';

export default {
  name: 'update',
  data() {
    return {
      appArr: '',
      checkApp: '',
      updateDes: '整包更新',
      updateUrl: 'http://lbs.southgnss.com:81/app/upload_update_item',
      form: {
        user_name: '',
        token: '',
        app_id: '',
        version: '',
        description: '',
        is_important: '1'
      }
    };
  },
  methods: {
    toggleApp() {
      const arr = this.checkApp.split('-');
      this.form.app_id = arr[0];
      if (arr[1] === '0') {
        this.updateDes = '整包更新';
      } else {
        this.updateDes = '增量更新,上传文件必须为 zip 格式！';
      }
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleSuccess(response, file, fileList) {
      if (response.status === 0) {
        this.$router.push({ path: '/updateList' });
        this.$message({
          type: 'success',
          message: '上传成功!'
        });
      } else {
        this.$message({
          type: 'error',
          message: '上传失败!'
        });
      }
    },
    error(err, file, fileList) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters(['name', 'token'])
  },
  created() {
    appList(1, 500).then(res => {
      this.appArr = res.recordList;
      this.checkApp = res.recordList[0].id + '-' + res.recordList[0].type;
    });
    this.form.user_name = this.name;
    this.form.token = this.token;
  }
};
</script>

<style scoped lang="stylus">
</style>