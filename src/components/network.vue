<template>
  <div class="center-content">
    <div id="graph-container"></div>
    <div class="block">
      <span class="demonstration">置信度筛选</span>
      <el-slider v-model="degree" :step="10"></el-slider>
    </div>
    <div class="node-introduced">节点详情：</div>
    <div class="line-introduced">边的信息是：</div>
  </div>
</template>
<script>
import ogma from "../assets/js/ogma2.7.4.min.js";
import "../assets/css/font-awesome/css/font-awesome.min.css";
import { debuglog } from "util";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      graph: null,
      degree: 0
    };
  },
  created() {
    this.initData();
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
    initData() {
      this.$axios({
        methods: "get",
        url: "http://172.21.39.76:5000/searchRelation"
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
      var self = this;
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
      this.ogma.getEdges().setAttributes(
        {
          color: "#333",
          width: 1
        },
        5000
      );
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
                part: "\uf013",
                manufacturer: "\uf2c0",
                device: "\uf2bd"
              }
            })
          },
          color: this.ogma.rules.map({
            field: "type",
            values: {
              part: "orange",
              manufacturer: "limegreen",
              device: "orangered"
            }
          }),
          text: {
            position: "bottom",
            content: function(node) {
              var type = node.getData("type");

              if (type === "device") {
                return node.getData("name");
              } else if (type === "part") {
                return node.getData("part_type");
              } else if (type === "manufacturer") {
                return node.getData("name");
              }
            }
          }
        }
      });
      // 生成邻近节点的样式规则
      this.ogma.styles.addRule({
        nodeSelector: function(node) {
          return node.getData("type") === "country";
        },
        nodeAttributes: {
          image: function(node) {
            return "../flags/" + node.getData("iso") + ".svg";
          },
          text: function(node) {
            return node.getData("iso");
          },
          radius: function(node) {
            return 5 + node.getData("nb_parts_produced");
          },
          innerStroke: {
            color: "black"
          }
        }
      });
    },
    // 添加事件
    initDefaultListeners() {
      const self = this;
      const nodeIntroduced = document.getElementsByClassName("node-introduced")[0];
      this.ogma.events.onClick(function(evt) {
        if (evt.target && evt.target.isNode) {
          //   self.ogma.removeNode(evt.target.getId());
          nodeIntroduced.innerHTML = "节点的信息是：" + evt.target.getId();
        }
      });
      const lineIntroduced = document.getElementsByClassName("line-introduced")[0];
      this.ogma.events.onClick(function(evt) {
        if (evt.target && !evt.target.isNode) {
          lineIntroduced.innerHTML = "边的信息是：" + evt.target.getData().type;
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

      var mode = 2;

      var modes = {
        // you can mix layering and roots/sinks definitions
        1: {
          Concept: 0,
          Table: "sink"
        },
        // or control the layer by layer as well
        2: {
          level0: 0,
          level1: 1,
          level2: 2,
          level3: 3,
          level4: 4,
          level5: 5,
          level6: 6,
          level7: 7,
          level8: 8,
          level9: 9,
          level10: 10,
          level11: 11,
          levellast: 12
        }
      };
      this.ogma.getNodes().fillData("layer", null);
      var sinks = [];
      // check if it's a supported mode
      if (mode in modes) {
        var customLogic = modes["2"];
        // pick the sinks first
        sinks = this.ogma.getNodes().filter(function(node) {
          var category = node.getData("categories")[0];
          return customLogic[category] === "sink";
        });
        // now set the custom layering
        this.ogma.getNodes().forEach(function(node) {
          var category = node.getData("categories")[0];

          var layer = customLogic[category];
          if (typeof layer === "number") {
            // save the layer in the node data
            node.setData("layer", layer);
          }
        });
      }
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: 0;
  overflow: hidden;
  width: 80%;
  height: 80%;
  margin-top: 65px;
  z-index: -1;
}
.line-introduced {
  position: absolute;
  top: 85%;
  left: 20%;
}
.node-introduced {
  position: absolute;
  top: 80%;
  left: 20%;
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
</style>

