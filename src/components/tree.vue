<template>
  <div>
    <chart :options="options"></chart>
  </div>
</template>

<script>
import chart from "vue-echarts";
import "echarts/lib/chart/tree";

export default {
  data() {
    return {};
  },
  props: ["children"],
  components: {
    chart
  },
  created() {
    // console.log("this.children:", this.children);
  },
  computed: {
    options() {
      return {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "tree",
            data: [this.children],
            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",

            symbolSize: 7,

            label: {
              normal: {
                position: "left",
                verticalAlign: "middle",
                align: "right",
                fontSize: 9
              }
            },

            leaves: {
              label: {
                normal: {
                  position: "right",
                  verticalAlign: "middle",
                  align: "left"
                }
              }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
