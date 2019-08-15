<template>
  <div>
    <div class="header">
      <router-link :to="{ name: 'index'}" class="react-area">
        <img src="../assets/img/logo.png" alt="Logo" />
        <span class="header-title">涉黑恶团伙分析</span>
      </router-link>
      <span class="sub-title">{{subTitle}}</span>
      <i class="iconfont icon-dianyuan"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    subTitle: {
      required: false,
      default: ""
    }
  },
  data() {
    return {};
  },
  mounted: function() {
    console.log(this.subTitle);
  }
};
</script>

<style scoped>
.react-area {
  display: flex;
  align-items: center;
}
.header {
  width: 100%;
  height: 65px;
  background: rgba(29, 41, 53, 1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 999;
}
.header img {
  margin-left: 40px;
  margin-right: 20px;
  height: 33px;
  width: 45px;
}
.header span {
  width: auto;
  font-size: 20px;
  font-family: NotoSansHans-Medium;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  /*letter-spacing:5px;*/
}
.header-title {
  letter-spacing: 2px;
}
.header i {
  font-size: 25px;
  color: rgba(255, 255, 255, 1);
  margin-left: auto;
  margin-right: 38px;
  cursor: pointer;
}
.header /deep/ .sub-title {
  padding-left: 9px;
  font-size: 20px;
  width: auto;
  font-weight: lighter;
  letter-spacing: 2px;
  color: #ededed;
}
.header {
  display: flex;
  align-items: center;
}
</style>
