<template>
  <div class="center-content">
    <h2 class="team-title">团伙分析模型</h2>
    <el-input style="width:300px" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="idcard" @keyup.enter.native="idSearch"></el-input>
    <div id="graph-container"></div>
    <div class="degree-team" v-if="graph">
      <h3 style="margin-left:35px">团伙置信度</h3>
      <ul>
        <li :key="index" v-for="(item,index) in graph.nodes">
          <p v-if="item.data.score">{{item.data.name}}:{{item.data.score*100}}</p>
        </li>
      </ul>
    </div>
    <div style="clear:both"></div>
    <!-- <div class="block">
      <span class="demonstration">置信度筛选</span>
      <el-slider v-model="degree" :step="10"></el-slider>
    </div>-->
    <div class="node-introduced" v-if="nodeinfo">
      <p class="node-detaile">节点详情：</p>
      <dataTableCase :nodeinfo="nodeinfo"></dataTableCase>
    </div>
    <div class="line-introduced" v-if="edgeinfo">
      <p class="node-detaile">边的信息是：</p>
      <dataGraphLine :edgeinfo="edgeinfo"></dataGraphLine>
    </div>
  </div>
</template>
<script>
import ogma from "../../assets/js/ogma2.7.4.min.js";
import "../../assets/css/font-awesome/css/font-awesome.min.css";
import dataTableCase from "./dataTableCase";
import dataGraphLine from "./dataGraphLine";
export default {
  data() {
    return {
      idcard: "",
      graph: null,
      degree: 0,
      nodeinfo: null,
      edgeinfo: null
    };
  },
  created() {
    if (this.$route.query.id) {
      this.idcard = this.$route.query.id;
      this.initData();
    }
  },
  mounted() {
    console.log(this.$route.query.id);
  },
  components: {
    dataTableCase,
    dataGraphLine
  },
  watch: {
    degree() {
      const level = this.degree;
      var filter;
      filter = this.ogma.transformations.addNodeFilter(function(n) {
        return !n.getData("score") || (n.getData("score") && n.getData("score") >= level / 100);
      });
      console.log("filter.getNodes:", filter._module._ogma.getNodes());
      console.log("filter:", filter);
      filter.whenApplied(function() {
        console.log("Filter done!");
      });
    }
  },
  methods: {
    idSearch() {
      this.initData();
    },
    initData() {
      this.$axios({
        methods: "get",
        url: "/apis/searchRelation"
      })
        .then(res => {
          this.graph = res.data;
        })
        .then(res => {
          this.initOgma();
        })
        .catch(err => {});
    },
    initOgma() {
      this.ogma = new Ogma({
        container: "graph-container",
        renderer: "canvas"
      });
      this.ogma.setGraph(this.graph);
      this.runLayout();
      // 加载节点和线的样式
      this.initDefaultNodes();
      this.initDefaultEage();
      // 加载一些默认事件
      this.onChange();
      this.initDefaultListeners();
    },
    // 线的样式规则
    initDefaultEage() {
      this.ogma.getEdges().forEach(edg => {
        if (edg.getData("type")) {
          if (edg.getData("type") === "dashed") {
            edg.setAttributes({
              shape: {
                style: "dashed"
              }
            });
          } else {
            edg.setAttributes({
              shape: {
                style: "plain"
              }
            });
          }
        } else {
          edg.setAttributes({
            color: "#333",
            width: 1
          });
        }
      });
    },
    initDefaultNodes() {
      // 基本节点颜色设置
      this.ogma.getNodes().forEach(node => {
        if (node.getData("score") >= 0.7) {
          node.setAttribute("color", "red");
        } else if (node.getData("score") < 0.7 && node.getData("score") >= 0.5) {
          node.setAttribute("color", "yellow");
        } else if (node.getData("score")) {
          node.setAttribute("color", "green");
        }
      });
      // 基本节点的样式规则
      this.ogma.styles.addRule({
        nodeAttributes: {
          icon: {
            font: "FontAwesome",
            content: this.ogma.rules.map({
              field: "type",
              values: {
                person: "\uf2c0",
                case: "\uf0f6",
                tel: "\uf095",
                card: "\uf2c3",
                factory: "\uf275"
              }
            }),
            color: "#fff"
          },
          color: this.ogma.rules.map({
            field: "type",
            values: {
              person: "#1989fa"
            }
          }),
          text: {
            position: "bottom",
            content: function(node) {
              return node.getData("name");
            }
          }
        }
      });
    },
    // 添加事件
    initDefaultListeners() {
      const self = this;
      this.ogma.events.onClick(evt => {
        if (evt.target && evt.target.isNode) {
          console.log("节点", evt);
          this.nodeinfo = evt.target.getData();
        }
      });
      this.ogma.events.onClick(evt => {
        if (evt.target && !evt.target.isNode) {
          const params = {
            source: evt.target.getSource().getId(),
            target: evt.target.getTarget().getId()
          };
          this.$axios({
            methods: "get",
            url: "/apis/findRelevanceFacotr"
          })
            .then(res => {
              this.edgeinfo = res.data;
            })
            .catch({});
          // this.$axios
          //   .post("/apis/findRelevanceFacotr", params)
          //   .then(res => {
          //     this.edgeinfo = res.data;
          //   })
          //   .catch(err => {});
        }
      });
    },
    // 目标人显示在同一列上
    onChange() {
      var defaultLayoutOptions = {
        direction: "LR", // Direction of the layout. Can be TB, BT, LR, or RL,
        // where T = top, B = bottom, L = left, and R = right.
        duration: 300, // Duration of the animation
        nodeDistance: 15, // Number of pixels that separate nodes horizontally in the layout.
        levelDistance: 50 // Number of pixels between each layer in the layout.
      };

      this.ogma.getNodes().fillData("layer", null);
      var sinks = [];

      this.ogma.getNodes().forEach(function(node) {
        var layer = node.getData("categories");
        if (typeof layer === "number") {
          node.setData("layer", layer);
        }
      });
      // create fresh new options
      var newOptions = {};
      for (var prop in defaultLayoutOptions) {
        newOptions[prop] = defaultLayoutOptions[prop];
      }
      // save the sinks in the layout options
      newOptions.sinks = sinks;
      this.runLayout(newOptions);
    },

    runLayout(options) {
      const self = this;
      this.ogma.layouts.hierarchical(options).then(function() {
        self.ogma.view.locateGraph({
          easing: "linear",
          duration: 300
        });
      });
    }
  }
};
</script>
<style scoped>
#graph-container {
  width: 80%;
  height: 500px;
  float: left;
}
.line-introduced {
}
.node-introduced {
}
button {
  position: absolute;
  width: 160px;
}

#neighbor-generation-toggle-button {
  left: 10px;
  top: 10px;
}

#node-collapsing-toggle-button {
  left: 10px;
  top: 40px;
}

#layout-button {
  right: 10px;
  top: 10px;
}
.block {
  position: absolute;
  width: 150px;
  left: 50px;
}
.team-title {
  text-align: left;
  margin-left: 50px;
}
.node-detaile {
  text-align: left;
  margin-left: 30px;
}
.degree-team {
  box-sizing: border-box;
  border: 1px solid #333;
  float: left;
  width: 18%;
  text-align: left;
  border-radius: 5px;
  padding: 10px;
  max-height: 500px;
  overflow: scroll;
}
.degree-team ul li {
  list-style: none;
}
</style>

