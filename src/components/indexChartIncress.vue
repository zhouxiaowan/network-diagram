<template>
  <div>
    <div id="chart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/visualMap");
require("echarts/lib/component/dataZoom");
export default {
  data() {
    return {
      // dataAxis : ['45M', '47M', '48M', '49M', '52M', '54M', '58M', '59M'],
      data: [45, 47, 48, 49, 52, 54, 58, 59],
      yMax: 60,
      dataShadow: [],
      option: {
        xAxis: {
          data: ["45M", "47M", "48M", "49M", "52M", "54M", "58M", "59M"],
          axisLabel: {
            inside: false,
            textStyle: {
              color: "#188df0"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#188df0"
            }
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              normal: { color: "rgba(0,0,0,0.05)" }
            },
            barGap: "-100%",
            barCategoryGap: "70%",
            data: [],
            animation: false
          },
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#83bff6" }, { offset: 0.5, color: "#188df0" }, { offset: 1, color: "#188df0" }])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#2378f7" }, { offset: 0.7, color: "#2378f7" }, { offset: 1, color: "#83bff6" }])
              }
            },
            data: [45, 47, 48, 49, 52, 54, 58, 59]
          }
        ]
      }
    };
  },
  mounted() {
    for (let i = 0; i < this.data.length; i++) {
      this.option.series[0].data.push(this.yMax);
    }
    this.drawChart();
  },
  methods: {
    drawChart() {
      var myChart = echarts.init(document.getElementById("chart"));
      myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
#chart {
  width: 350px;
  height: 350px;
  justify-content: center;
  margin-top: 0;
  margin-left: 30px;
}
</style>
