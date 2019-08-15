<template>
  <div class="center-content">
    <h2 class="team-title">团伙分析模型</h2>
    <el-input style="width:300px" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="idcard" @keyup.enter.native="idSearch"></el-input>
    <div id="graph-container"></div>
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
import ogma from "../assets/js/ogma2.7.4.min.js";
import "../assets/css/font-awesome/css/font-awesome.min.css";
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
      //   console.log("transformations", this.ogma.transformations);
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
          // console.log(evt.target.getData());
          //   this.$axios({
          //     methods: "get",
          //     url: "http://192.168.0.104:5000/nodeinfo"
          //   })
          //     .then(res => {
          //       console.log(res.data.nodeDetail);
          //     })
          //     .catch({});
          //   this.ogma.removeNode(evt.target.getId());
          //   nodeIntroduced.innerHTML = "节点的信息是：" + evt.target.getId();
        }
      });
      this.ogma.events.onClick(evt => {
        if (evt.target && !evt.target.isNode) {
          console.log("边1到边2", evt.target.getExtremities().getId());
          console.log("边1", evt.target.getSource().getId());
          console.log("边2", evt.target.getTarget().getId());

          const params = {
            source: evt.target.getSource().getId(),
            target: evt.target.getTarget().getId()
          };
          console.log("params:", params);
          this.$axios({
            methods: "get",
            url: "/apis/lineinfo"
          })
            .then(res => {
              this.edgeinfo = res.data;
            })
            .catch({});
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
</style>

