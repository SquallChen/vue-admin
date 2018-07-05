<template>
  <div class="footer-content">
    <a @click="togglefold(status)" :class="{ active: status  }"></a>
    <ul>
      <li>
        <span>2018/04/18</span>
        <span>8:38:4</span>
        <span>Load C:\\Users\PC8791\Desktop\NRS_STATION\NET\\SP3\gli19973_00.sp3 OK From 222.73.18.15</span>
      </li>
      <li>
        <span>2018/04/18</span>
        <span>8:38:4</span>
        <span>Load C:\\Users\PC8791\Desktop\NRS_STATION\NET\\SP3\gli19973_00.sp3 OK From 222.73.18.15</span>
      </li>
      <li>
        <span>2018/04/18</span>
        <span>8:38:4</span>
        <span>Load C:\\Users\PC8791\Desktop\NRS_STATION\NET\\SP3\gli19973_00.sp3 OK From 222.73.18.15</span>
      </li>
      <li>
        <span>2018/04/18</span>
        <span>8:38:4</span>
        <span>Load C:\\Users\PC8791\Desktop\NRS_STATION\NET\\SP3\gli19973_00.sp3 OK From 222.73.18.15</span>
      </li>
      <li>
        <span>2018/04/18</span>
        <span>8:38:4</span>
        <span>Load C:\\Users\PC8791\Desktop\NRS_STATION\NET\\SP3\gli19973_00.sp3 OK From 222.73.18.15</span>
      </li>
      <li>
        <span>2018/04/18</span>
        <span>8:38:4</span>
        <span>Load C:\\Users\PC8791\Desktop\NRS_STATION\NET\\SP3\gli19973_00.sp3 OK From 222.73.18.15</span>
      </li>

    </ul>
  </div>
</template>

<script>
import bus from '@/store/eventbus';
export default {
  name: 'footerContent',
  data() {
    return {
      status: false
    };
  },
  methods: {
    // 根据默认status值判断要传什么值到bus中间件
    togglefold(v) {
      if (v === true) {
        bus.$emit('togglefold', false);
        this.status = !v;
      } else {
        bus.$emit('togglefold', true);
        this.status = !v;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 40px;
}
.footer-content {
  width: 100%;
  height: 100%;
  padding-top: 15px;
  overflow: auto;
  a {
    position: absolute;
    display: block;
    width: 60px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 0 0 5px 5px;
    cursor: pointer;
    left: 50%;
    top: -1px;
    background: white url('../../../assets/img/fold.png') no-repeat center;
    z-index: 10000;
    background-size: 20px 20px;
  }
  .active {
    transform: rotate(180deg);
    top: -18px;
  }
  span:nth-child(1) {
    margin-right: 10px;
  }
  span:nth-child(2) {
    margin-right: 50px;
  }
  li {
    margin-bottom: 5px;
  }
}
</style>
