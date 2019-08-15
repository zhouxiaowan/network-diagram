<template>
  <div id="graph-lineinfo"></div>
</template>
<script>
import ogma from "../../assets/js/ogma2.7.4.min.js";
import "../../assets/css/font-awesome/css/font-awesome.min.css";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      lineinfo: null,
      defaultLayoutOptions: {
        direction: "LR", // Direction of the layout. Can be TB, BT, LR, or RL,
        // where T = top, B = bottom, L = left, and R = right.
        duration: 300, // Duration of the animation
        nodeDistance: 15, // Number of pixels that separate nodes horizontally in the layout.
        levelDistance: 50 // Number of pixels between each layer in the layout.
      }
    };
  },
  components: {},
  created() {
    this.initData();
  },
  props: ["edgeinfo"],
  methods: {
    initData() {
      if (this.edgeinfo) {
        setTimeout(() => {
          this.initOgma(this.edgeinfo);
        }, 0);
      }
    },
    initOgma(data) {
      this.ogma = new Ogma({
        container: "graph-lineinfo",
        renderer: "canvas"
      });

      this.ogma.setGraph(data);
      this.runLayout(this.defaultLayoutOptions);
      // 加载节点和线的样式
      this.initDefaultNodes();
      this.initDefaultEage();
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
              person: "#1989fa",
              manufacturer: "limegreen",
              device: "orangered"
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
#graph-lineinfo {
  width: 80%;
  height: 500px;
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
.table-info {
  margin-left: 30px;
  margin-top: 50px;
}
.incorporate {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  font-size: 14px;
  color: #606266;
}
.incorporate th {
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  padding: 12px 10px;
  text-overflow: ellipsis;
  vertical-align: middle;
  text-align: center;
  background-color: #f5f7fa;
}
.incorporate td {
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  padding: 12px 10px;
  text-overflow: ellipsis;
  vertical-align: middle;
  text-align: left;
}
.teaminfo {
  text-align: left;
  margin-left: 30px;
  margin-top: 50px;
}
</style>

