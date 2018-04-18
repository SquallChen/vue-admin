<template>
  <div class="container">
    <p>SNR</p>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: 'satelliteSignal'
};
</script>
<style lang="scss" scoped>
  .container{
    width:100%;
    height:100%;
    overflow: auto;
    p{
      margin-left: 50px;
      font-size: 30px;
    }
    .main{
      width:85%;
      height:500px;
      margin-left: 50px;
      border:1px solid black;
    }
  }
</style>