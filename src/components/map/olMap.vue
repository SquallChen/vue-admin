<template>
  <div class="">
    <div id="map" class="map" style="width: 100%; height: 100%; border: 2px solid black; background-color: white"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import { olMap } from './olMap';
import $ from 'jquery';
export default {
  name: '',
  data() {
    return {};
  },
  props: {},
  components: {},
  computed: {},
  filters: {},
  methods: {},
  created() {
    this.$nextTick(() => {
      olMap();
    });
  }
};

</script>

<style scoped lang="stylus">
</style>