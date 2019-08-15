<template>
  <div style="width:100%;">
    <my-header></my-header>
    <div class="header">
      <img src="../assets/img/head.png" alt />
      <div style="text-align: left;">
        <p>
          <span class="name">刘洋</span>
          <span class="identity"></span>
        </p>
        <p class="address">登录时间：{{this.logTime}}</p>
      </div>
      <div class="collection">
        <div class="collect" @click="showCanvasList('收藏夹','collectCanvasList/')">
          <p class="collect_total">0</p>
          <span>收藏夹</span>
        </div>
        <div class="history" @click="showCanvasList('历史研判','canvasList/')">
          <p class="history_total">0</p>
          <span>历史研判</span>
        </div>
      </div>
    </div>
    <div class="content">
      <!--左侧flex-->
      <div class="left-content">
        <p>智能模型</p>
        <div class="models">
          <div class="model m1" @click="jumpToCanvas()">
            <span>通联关系模型</span>
          </div>
          <div class="model m2" @click="jumpToRelation()">
            <span>串并案模型</span>
          </div>
          <div class="model m3" @click="jumpToExternalLink()">
            <span>团伙分析模型</span>
          </div>
          <div class="model m4 model-in-dev">
            <span>共同联系人模型(建设中)</span>
          </div>
          <div class="model m4 model-in-dev">
            <span>同住模型（建设中）</span>
          </div>
          <div class="model m4 model-in-dev">
            <span>......</span>
          </div>
        </div>
      </div>
      <!--右侧flex-->
      <div class="right-content">
        <div class="line"></div>
        <div class="right">
          <p>节点概览</p>
          <div class="new-co">
            <span>收藏研判新增连接</span>
            <span id="num-new">
              2
              <i class="iconfont">></i>
            </span>
          </div>
          <div class="data">
            <span>接入wifi终端总量</span>
            <span id="sum">954亿+</span>
          </div>
          <div class="data">
            <span>热点总量</span>
            <span id="new-node">218亿+</span>
          </div>
          <p>节点类型图</p>
          <index-chart-type></index-chart-type>
          <p>节点递增图</p>
          <index-chart-increse></index-chart-increse>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from "./header.vue";
import indexcharttype from "./indexChartType.vue";
import indexchartincrese from "./indexChartIncress.vue";
import "../assets/iconfont/iconfont.css";
export default {
  data() {
    return {
      searchWord: "",
      logTime: ""
    };
  },
  components: {
    "my-header": header,
    "index-chart-type": indexcharttype,
    "index-chart-increse": indexchartincrese
  },
  methods: {
    searchToCanvas() {
      let self = this;
      let { href } = this.$router.resolve({ path: `/nodeTel/${self.searchWord}` });
      window.open(href, "_blank");
    },
    jumpToCanvas() {},
    jumpToRelation() {
      this.$router.push({ path: "/caseDetails" });
    },
    jumpToExternalLink(href) {
      this.$router.push({ path: "/teamDetails" });
    }
  },
  mounted: function() {
    Date.prototype.Format = function(fmt) {
      var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      return fmt;
    };
    this.logTime = new Date().Format("yyyy-MM-dd HH:mm:ss");
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 130px;
  background: rgba(255, 255, 255, 1);
  -webkit-box-shadow: 0px 0px 11px 0px rgba(10, 36, 92, 0.15);
  box-shadow: 0px 0px 11px 0px rgba(10, 36, 92, 0.15);
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
}
.header img {
  width: 66px;
  height: 66px;
  margin-left: 40px;
  margin-right: 29px;
}
.header .address {
  width: 400px;
  height: 14px;
  font-size: 14px;
  font-family: NotoSansHans-Regular;
  color: rgba(167, 176, 194, 1);
  line-height: 21px;
  margin-top: 10px;
}
.collection {
  margin-left: auto;
  text-align: center;
  /* display: -webkit-box; */
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  -ms-flex-align: center;
}
.collection p {
  width: 60px;
  height: 28px;
  font-size: 28px;
  margin-top: 0;
  font-family: NotoSansHans-Regular;
  color: rgba(29, 41, 53, 1);
  line-height: 42px;
  margin-bottom: 16px;
}
.collection span {
  width: 60px;
  height: 20px;
  font-size: 20px;
  font-family: NotoSansHans-Regular;
  color: rgba(103, 115, 141, 1);
  line-height: 30px;
}
.header .name {
  width: 60px;
  height: 20px;
  font-size: 20px;
  font-family: NotoSansHans-Regular;
  color: rgba(29, 41, 53, 1);
  line-height: 30px;
}
.header .identity {
  width: 32px;
  height: 16px;
  font-size: 16px;
  font-family: NotoSansHans-Regular;
  color: rgba(103, 115, 141, 1);
  line-height: 24px;
  margin-left: 10px;
}
.history {
  margin-left: 74px;
  margin-right: 40px;
}
.content {
  width: 100%;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.left-content {
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  flex: 1;
}
.search-input {
  font-size: 16px;
  font-family: NotoSansHans-Regular;
  color: rgba(103, 115, 141, 1);
  position: relative;
}
.content p {
  width: 100px;
  height: 18px;
  font-size: 18px;
  font-family: NotoSansHans-Regular;
  color: rgba(29, 41, 53, 1);
  line-height: 27px;
  margin-left: 40px;
  margin-bottom: 20px;
  display: block;
}

.content input {
  width: 430px;
  height: 50px;
  border-radius: 2px;
  border: 1px solid rgba(29, 41, 53, 1);
  font-size: 16px;
  font-family: NotoSansHans-Regular;
  padding-left: 20px;
  margin-top: 35px;
  margin-left: 40px;
}
.search-input .i1 {
  font-size: 20px;
  position: absolute;
  left: 440px;
  top: 47px;
  cursor: pointer;
  display: inline-block;
  color: #1d2935;
}
.search-input span {
  cursor: pointer;
  margin-left: 10px;
  position: absolute;
  top: 47px;
  color: #67738d;
}
.search-input ul {
  font-size: 14px;
  font-family: NotoSansHans-Regular;
  color: rgba(167, 176, 194, 1);
  line-height: 21px;
  margin-left: 40px;
  margin-top: 15px;
  margin-bottom: 28px;
}
.search-input ul li {
  display: inline;
}
.models {
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  margin-left: 40px;
}
.model {
  width: 30%;
  height: 140px;
  font-size: 20px;
  font-family: NotoSansHans-Medium;
  color: rgba(103, 115, 141, 1);
  margin-right: 20px;
  margin-top: 10px;
  background: rgba(241, 245, 251, 1);
  border-radius: 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.m1:hover {
  color: rgba(241, 245, 251, 1);
  background: url("../assets/img/main1.png");
  animation: ttt 0.5s 1 forwards;
  background-size: cover;
  background-position: center center;
}
.m2:hover {
  color: rgba(241, 245, 251, 1);
  background-image: url("../assets/img/main2.png");
  background-repeat: no-repeat;
  animation: ttt 0.5s 1 forwards;
  background-size: cover;
  background-position: center center;
}
.m3:hover {
  color: rgba(241, 245, 251, 1);
  background-image: url("../assets/img/main3.png");
  background-repeat: no-repeat;
  animation: ttt 0.5s 1 forwards;
  background-size: cover;
  background-position: center center;
}
.m4:hover {
  color: rgba(241, 245, 251, 1);
  background-image: url("../assets/img/main4.png");
  background-repeat: no-repeat;
  animation: ttt 0.5s 1 forwards;
  background-size: cover;
  background-position: center center;
}
@keyframes ttt {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
.right-content {
  width: 480px;
  height: auto;
  margin-left: auto;
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.right-content .line {
  width: 1px;
  height: calc(100% - 50px);
  background-color: rgba(235, 236, 240, 1);
  display: inline;
}
.right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.new-co {
  margin-left: 40px;
  width: 349px;
  height: 42px;
  background-color: rgba(90, 141, 255, 0.05);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.new-co span {
  width: 162px;
  height: 42px;
  line-height: 42px;
  font-size: 16px;
  font-family: NotoSansHans-Regular;
  color: rgba(29, 41, 53, 1);
  margin-left: 16px;
  margin-right: 16px;
}
.model-in-dev {
  color: lightgrey;
}
#num-new {
  width: 30px;
  height: 42px;
  font-size: 18px;
  font-family: NotoSansHans-Regular;
  color: rgba(234, 77, 40, 1);
  line-height: 42px;
}
#num-new .iconfont {
  font-size: 22px;
  font-weight: 700;
  color: rgba(167, 176, 194, 1);
  margin-left: 10px;
  width: 30px;
  height: 42px;
  line-height: 42px;
}
.data {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 10px;
  font-size: 16px;
  font-family: NotoSansHans-Regular;
  color: rgba(103, 115, 141, 1);
}
#sum {
  font-size: 24px;
  font-family: NotoSansHans-Regular;
  color: rgba(29, 41, 53, 1);
  line-height: 24px;
}
#new-node {
  font-size: 24px;
  font-family: NotoSansHans-Regular;
  color: rgba(29, 41, 53, 1);
  line-height: 24px;
  margin-bottom: 10px;
}
</style>
