<template>
  <div class="center-content">
    <h3 class="teaminfo" v-if="nodes">以{{nodes[0].id}}为出发点的串并案社群</h3>
    <div id="graph-container"></div>
    <div class="table-info">
      <table class="incorporate" cellspacing="0" cellpadding="0" border="0">
        <thead>
          <tr>
            <th>警情编号</th>
            <th>报警时间</th>
            <th>事发地点</th>
            <th>报警类型</th>
            <th>报警内容</th>
            <th>报警人</th>
            <th>处警人</th>
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
            <td v-if="item.data.type === 'case'">{{item.data.dname}}</td>
            <td v-if="item.data.type === 'case'">{{item.data.proceresult}}</td>
          </tr>
        </tbody>
      </table>
      <!-- <el-table :data="nodes" border style="width: 90%">
        <el-table-column prop="data.type" label="类型" :filters="[{text:'case',value:'case'},{text:'tel',value:'tel'},{text:'tool',value:'tool'}]" :filter-method="filterHandler"></el-table-column>
        <el-table-column prop="data.name" label="警情编号"></el-table-column>
        <el-table-column prop="data.time" label="报警时间"></el-table-column>
        <el-table-column prop="data.address" label="事发地点"></el-table-column>
        <el-table-column prop="data.ptype" label="报警类型"></el-table-column>
        <el-table-column prop="data.content" label="报警内容"></el-table-column>
        <el-table-column prop="data.rname" label="报警人"></el-table-column>
        <el-table-column prop="data.dname" label="处警人"></el-table-column>
        <el-table-column prop="data.proceresult" label="处警结果"></el-table-column>
      </el-table>-->
    </div>
    <h3 class="teaminfo">团伙分析</h3>
    <teamAnalysis></teamAnalysis>
  </div>
</template>
<script>
import ogma from "../assets/js/ogma2.7.4.min.js";
import "../assets/css/font-awesome/css/font-awesome.min.css";
import teamAnalysis from "./teamAnalysis";
export default {
  data() {
    return {
      graph: null,
      nodes: null,
      defaultLayoutOptions: {
        direction: "LR", // Direction of the layout. Can be TB, BT, LR, or RL,
        // where T = top, B = bottom, L = left, and R = right.
        duration: 300, // Duration of the animation
        nodeDistance: 15, // Number of pixels that separate nodes horizontally in the layout.
        levelDistance: 50 // Number of pixels between each layer in the layout.
      }
    };
  },
  props: ["graphData"],
  components: {
    teamAnalysis
  },
  created() {
    this.initData();
  },
  mounted() {},
  watch: {},
  methods: {
    initData() {
      this.$axios({
        methods: "get",
        url: "http://192.168.0.104:5000/searchcase"
      })
        .then(res => {
          this.graph = res.data;
          this.nodes = res.data.nodes;
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
    // initDefaultListeners() {
    //   const self = this;
    //   const nodeIntroduced = document.getElementsByClassName("node-introduced")[0];
    //   this.ogma.events.onClick(function(evt) {
    //     if (evt.target && evt.target.isNode) {
    //       //   self.ogma.removeNode(evt.target.getId());
    //       nodeIntroduced.innerHTML = "节点的信息是：" + evt.target.getId();
    //     }
    //   });
    //   const lineIntroduced = document.getElementsByClassName("line-introduced")[0];
    //   this.ogma.events.onClick(function(evt) {
    //     if (evt.target && !evt.target.isNode) {
    //       lineIntroduced.innerHTML = "边的信息是：" + evt.target.getData().type;
    //     }
    //   });
    // },
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
#graph-container {
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: 0;
  overflow: hidden;
  margin-left: 200px;
  height: 80%; */
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
}
.teaminfo {
  text-align: left;
  margin-left: 30px;
  margin-top: 50px;
}
</style>

