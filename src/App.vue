<template>
  <div id="app">
    <div class="graph">
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isRouterAlive: true
    };
  },
  components: {},
  mounted() {
    this.$bus.$on("reload", () => {
      this.reload();
    });
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
html {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100%;
}
.nav {
  width: 200px;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.el-menu {
  border-right: none !important;
}
.graph {
  flex: 1;
  overflow: scroll;
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
  height: 100%;
}
.nav .tac ul {
  height: 100%;
}
.el-menu-item {
  text-align: left !important;
}
.clear {
  clear: both;
}
</style>
