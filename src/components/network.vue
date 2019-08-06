<template>
  <div>
    <div id="graph-container"></div>
    <div>
      <button id="neighbor-generation-toggle-button" onclick="toggleNeighborGeneration()">Show countries</button>
      <button id="node-collapsing-toggle-button" disabled onclick="toggleNodeCollapsing()">
        Collapse
        manufacturers
      </button>
      <button id="layout-button" onclick="runLayout()">Run layout</button>
    </div>
    <div id="line-introduced"></div>
  </div>
</template>
<script>
import ogma from "../assets/js/ogma2.7.4.min.js";
import "../assets/css/font-awesome/css/font-awesome.min.css";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initOgma();
  },
  methods: {
    initOgma() {
      var self = this;
      this.ogma = new Ogma({
        container: "graph-container",
        renderer: "canvas"
      });
      // 基本节点的样式规则
      this.ogma.styles.addRule({
        nodeAttributes: {
          icon: {
            font: "FontAwesome",
            content: ogma.rules.map({
              field: "type",
              values: {
                part: "\uf013",
                manufacturer: "\uf2c0",
                device: "\uf2bd"
              }
            })
          },
          color: ogma.rules.map({
            field: "type",
            values: {
              part: "orange",
              manufacturer: "limegreen",
              device: "orangered"
            }
          }),
          text: {
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
            // position: function (node) {
            //   return 'top'
            // },
          },
          image: {
            url: function(node) {
              if (node.getData("type") === "country") {
                return "../flags/" + node.getData("iso") + ".svg";
              }
            }
          }
        }
      });
      // 生成邻近节点的样式规则
      ogma.styles.addRule({
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
      // Enable the legend
      this.ogma.tools.legend.enable({
        titleFontSize: 14,
        fontSize: 12,
        titleTextAlign: "center",
        titleFunction: function(propertyPath) {
          var str = propertyPath.toString();
          return str.charAt(0).toUpperCase() + str.substring(1);
        }
      });
      //   this.ogma.setOptions({ backgroundColor: null });
      //   this.ogma.setContainer($(".canvas-panel")[0]);
      //   this.ogma.setOptions({
      //     // renderer:'webgl',
      //     backgroundColor: "rgba(255, 255, 255, 0)",
      //     detect: () => {
      //       if (self.fastMode) {
      //         return {
      //           // disable the detection of edges and texts, making them impossible to hover or select.
      //           // this improves performances for large graphs
      //           nodeTexts: true,
      //           edgeTexts: false
      //         };
      //       } else return {};
      //     },
      //     interactions: () => {
      //       if (self.fastMode) {
      //         return;
      //         {
      //           drag: {
      //             enabled: false; // disable node dragging
      //           }
      //           // selection: {
      //           //   enable: false,
      //           // }
      //         }
      //       } else return {};
      //     }
      //   });
      this._initDefaultRules();
      this._initDefaultListeners();
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
}
#line-introduced {
  position: absolute;
  top: 85%;
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
</style>

