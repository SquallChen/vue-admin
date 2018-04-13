<template>
  <div class="ephemeris-container">
    <div class="content">
      <div class="main">
        <span></span>
      </div>
      <div class="main">
        <span></span>
      </div>
    </div>
     <div class="content">
      <div class="main">
        <span></span>
      </div>
      <div class="main">
        <span></span>
      </div>
    </div>
     <div class="content">
      <div class="main">
        <span></span>
      </div>
      <div class="main">
        <span></span>
      </div>
    </div>
     <div class="content">
      <div class="main">
        <span></span>
      </div>
      <div class="main">
        <span></span>
      </div>
    </div>
     <div class="content">
      <div class="main">
        <span></span>
      </div>
      <div class="main">
        <span></span>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ephemeris'
};
</script>
<style scoped>
  .ephemeris-container{
    width: 100%;
    height:100%;
    overflow: auto;
  }
  .content{
    width:100%;
    display: flex;
  }
.main{
  position: relative;
  min-width:550px;
  max-width:650px;
  min-height:50px;
  border:1px solid #ddd;
  padding: 5px 5px;
}
</style>