<template>
  <div id="app">
    <h1>人物网络关系图</h1>
    <!-- <network></network> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import network from "./components/network";
export default {
  name: "app",
  components: {
    // network
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: #2c3e50; */
}
.el-slider__runway .el-slider__bar {
  background: #e4e7ed !important;
}
.el-slider__runway {
  background: linear-gradient(to right, green, red) !important;
}
.el-slider__button {
  border: 2px solid green !important;
}
body {
  margin: 0;
  padding: 0;
}
</style>
