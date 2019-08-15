<template>
  <div>
    <div id="typechart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/component/visualMap");
require("echarts/lib/component/dataZoom");
export default {
  data() {
    return {
      option: {
        visualMap: {
          show: false,
          min: 0,
          max: 30,
          inRange: {
            colorLightness: [0.4, 0.85]
          }
        },
        series: [
          {
            name: "节点类型",
            type: "pie",
            radius: "31%",
            center: ["53%", "50%"],
            data: [
              { value: 0.252, name: "手机应用信息：252万" },
              { value: 0.0007, name: "银行卡信息：0.7万" },
              { value: 49.918, name: "通话记录：49918万" },
              { value: 0.01, name: "车辆信息：10万" },
              { value: 13.637, name: "通讯录：13637万" },
              { value: 15.678, name: "短信：15678万" },
              { value: 6.394, name: "浏览器历史记录：6394万" },
              { value: 0.0007, name: "qq账号：0.7万" },
              { value: 0.003, name: "qq群：3万" },
              { value: 0.002, name: "微信：2万" },
              { value: 0.043, name: "微信群：43万" }
            ],
            itemStyle: {
              normal: {
                color: "#0C4DAF"
              }
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var myChart = echarts.init(document.getElementById("typechart"));
      myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
#typechart {
  width: 400px;
  height: 350px;
  justify-content: center;
  margin-top: 0px;
  margin-left: 15px;
}
</style>
