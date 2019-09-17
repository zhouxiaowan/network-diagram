<template>
  <div class="center-content">
    <h2 class="team-title">串并案模型</h2>
    <el-input class="search-input" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="caseid" @keyup.enter.native="caseSearch"></el-input>
    <div class="clear"></div>
    <h3 class="teaminfo" v-if="nodes&&caseid">以{{caseid}}为出发点的串并案社群</h3>
    <div id="graph-container"></div>
    <div class="line-introduced" v-if="edgeinfo">
      <p class="node-detaile">串并原因：</p>
      <dataGraphLine :edgeinfo="edgeinfo"></dataGraphLine>
    </div>
    <div class="table-info" v-if="nodes">
      <table class="incorporate" cellspacing="0" cellpadding="0" border="0">
        <thead>
          <tr>
            <th>警情编号</th>
            <th>报警时间</th>
            <th>事发地点</th>
            <th>报警类型</th>
            <th>报警内容</th>
            <th>报警人</th>
            <th>处警结果</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in nodes" :key="index">
            <td v-if="item.data.type === 'case'">{{item.id}}</td>
            <td v-if="item.data.type === 'case'">{{item.data.time}}</td>
            <td v-if="item.data.type === 'case'">{{item.data.address}}</td>
            <td v-if="item.data.type === 'case'">{{item.data.ptype}}</td>
            <td v-if="item.data.type === 'case'">{{item.data.content}}</td>
            <td v-if="item.data.type === 'case'">{{item.data.rname}}</td>
            <td v-if="item.data.type === 'case'">{{item.data.proceresult}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="teaminfo" v-if="showteamAnaly">涉案人员</h3>
    <involvedCase :caseNum="caseid" v-model="value" ref="mychild"></involvedCase>
  </div>
</template>
<script>
import ogma from "../../assets/js/ogma2.7.4.min.js";
import "../../assets/css/font-awesome/css/font-awesome.min.css";
import involvedCase from "./involvedCase";
import dataGraphLine from "./dataGraphLine";
export default {
  data() {
    return {
      caseid: "",
      showGraph: false,
      showteamAnaly: false,
      graph: null,
      nodes: null,
      edgeinfo: null,
      defaultLayoutOptions: {
        direction: "LR", // Direction of the layout. Can be TB, BT, LR, or RL,
        // where T = top, B = bottom, L = left, and R = right.
        duration: 300, // Duration of the animation
        nodeDistance: 15, // Number of pixels that separate nodes horizontally in the layout.
        levelDistance: 50 // Number of pixels between each layer in the layout.
      },
      value: false
    };
  },
  props: ["graphData"],
  components: {
    involvedCase,
    dataGraphLine
  },
  created() {
    // this.initData();
  },
  mounted() {},
  watch: {},
  methods: {
    caseSearch() {
      this.initData();
      this.showteamAnaly = true;
      this.value = true;
      this.$refs.mychild.graphteam = "";
      this.$refs.mychild.nodesteam = "";
      this.$refs.mychild.initData(this.caseid);
    },
    initData() {
      this.$axios
        .post("http://50.64.129.46:8030/findTeamByRecordId", { recordId: this.caseid })
        // this.$axios({
        //   methods: "get",
        //   url: "/apis/findTeamByRecordId"
        // })
        .then(res => {
          this.graph = res.data.result;
          this.nodes = res.data.result.nodes;
          this.showGraph = true;
        })
        .then(res => {
          this.initOgma();
        })
        .then(res => {
          this.filterHandler();
        })
        .catch(err => {});
    },
    initOgma() {
      this.ogma = new Ogma({
        container: "graph-container",
        renderer: "canvas"
      });
      this.ogma.setGraph(this.graph);
      this.runLayout(this.defaultLayoutOptions);
      // 加载节点和线的样式
      this.initDefaultNodes();
      this.initDefaultEage();
      // 加载一些默认事件
      this.onChange();
      this.initDefaultListeners();
      this.filterHandler();
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
                case: "\uf0f6",
                tel: "\uf095",
                tool: "\uf085"
              }
            }),
            color: "#fff"
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
              return node.getData("name");
            }
          }
        }
      });
    },
    // 添加事件
    initDefaultListeners() {
      // this.ogma.events.onClick(evt=> {
      //   if (evt.target && evt.target.isNode) {
      //     self.ogma.removeNode(evt.target.getId());
      //     nodeIntroduced.innerHTML = "节点的信息是：" + evt.target.getId();
      //   }
      // });
      this.ogma.events.onClick(evt => {
        this.edgeinfo = null;
        if (evt.target && !evt.target.isNode) {
          const params = {
            source: evt.target.getSource().getId(),
            target: evt.target.getTarget().getId()
          };
          this.$axios
            .post("http://50.64.129.46:8030/findRelevanceFacotr", params)
            // this.$axios({
            //   methods: "get",
            //   url: "/apis/findRelevanceFacotr"
            // })
            .then(res => {
              this.edgeinfo = res.data.result;
            })
            .catch({});
        }
      });
    },

    // 设立层级关系
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
    },
    filterHandler(value, row, column) {
      return row.data.type === value;
    }
  }
};
</script>
<style scoped>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
#graph-container {
  width: 80%;
  height: 530px;
}
.search-input {
  width: 300px;
  float: left;
  margin-left: 30px;
}
.line-introduced {
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
}
.teaminfo {
  text-align: left;
  margin-left: 30px;
  margin-top: 20px;
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

