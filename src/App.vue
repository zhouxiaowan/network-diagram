<template>
  <div id="app">
    <h1>人物网络关系图</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  mounted() {
    console.log(this.$router);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
