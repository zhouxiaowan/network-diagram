<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleMenue" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">案件详情</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-setting"></i>
          <span slot="title">团伙详情</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>


<script>
export default {
  methods: {
    handleMenue(key, keyPath) {
      if (key === "2") {
        this.$router.push({
          path: "/network"
        });
      }
      if (key === "1") {
        this.$router.push({
          path: "/detailsCase"
        });
      }
    }
  }
};
</script>

<style scoped>
.nav .tac ul {
  height: 100%;
}
</style>
