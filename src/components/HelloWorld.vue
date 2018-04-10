<template>
  <div class="hello">
    <test></test>
    <h1>{{ msg }}</h1>
    <h1>{{ testMsg }}</h1>
    <router-link to="/404">404</router-link>
    <router-link to="/layout">layout</router-link>
  </div>
</template>

<script>
import Test from './test/test';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  components: {
    Test
  },
  computed: {
    testMsg() {}
  },
  created() {
    console.log(this.$store);
  }
};
</script>

<style scoped>
</style>
