<template>
  <div>
    <div id="graph-team"></div>
    <div v-show="handleNode">
      <div>操作节点:{{sigleNode}}</div>
      <div class="teamAnaly" @click="teamAnaly">跳转到该节点团伙分析页面</div>
    </div>
    <div class="table-info">
      <table class="incorporate" cellspacing="0" cellpadding="0" border="0">
        <thead>
          <tr>
            <th>姓名</th>
            <th>人员类别</th>
            <th>公民身份号码</th>
            <th>户籍地</th>
            <th>服务处所</th>
            <th>联系方式</th>
            <th>现住址</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in nodesteam" :key="index">
            <td v-if="item.data.type === 'person'">{{item.data.name}}</td>
            <td v-if="item.data.type === 'person'">{{item.data.ptype}}</td>
            <td v-if="item.data.type === 'person'">{{item.data.idcard}}</td>
            <td v-if="item.data.type === 'person'">{{item.data.CM}}</td>
            <td v-if="item.data.type === 'person'">{{item.data.serplace}}</td>
            <td v-if="item.data.type === 'person'">{{item.data.contactel}}</td>
            <td v-if="item.data.type === 'person'">{{item.data.nowplace}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import ogma from "../../assets/js/ogma2.7.4.min.js";
import "../../assets/css/font-awesome/css/font-awesome.min.css";
export default {
  data() {
    return {
      graphteam: null,
      nodesteam: null,
      handleNode: false,
      sigleNode: "",
      sigleNodeId: "",
      defaultLayoutOptions: {
        direction: "LR", // Direction of the layout. Can be TB, BT, LR, or RL,
        // where T = top, B = bottom, L = left, and R = right.
        duration: 300, // Duration of the animation
        nodeDistance: 15, // Number of pixels that separate nodes horizontally in the layout.
        levelDistance: 50 // Number of pixels between each layer in the layout.
      }
    };
  },
  props: ["caseNum"],
  components: {},
  created() {
    this.initData();
  },
  watch: {},
  methods: {
    teamAnaly() {
      const params = {
        id: this.sigleNodeId
      };
      this.$router.push({
        path: "/teamDetails",
        query: params
      });
    },
    initData() {
      this.$axios({
        methods: "get",
        url: "/apis/findTeamAndPersonByRecord"
      })
        .then(res => {
          this.graphteam = res.data.result;
          this.nodesteam = res.data.result.nodes;
        })
        .then(res => {
          this.initOgma();
        })
        .catch(err => {});
    },
    initOgma() {
      this.ogma = new Ogma({
        container: "graph-team",
        renderer: "canvas"
      });
      this.ogma.setGraph(this.graphteam);
      this.runLayout(this.defaultLayoutOptions);
      // 加载节点和线的样式
      this.initDefaultNodes();
      this.initDefaultEage();
      // 加载一些默认事件
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
                case: "\uf0f6",
                tel: "\uf095",
                tool: "\uf085",
                person: "\uf2c0"
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
      this.ogma.events.onClick(evt => {
        if (evt.target && evt.target.isNode) {
          if (evt.target.getData("type") === "person") {
            this.handleNode = true;
            this.sigleNode = evt.target.getData("name");
            this.sigleNodeId = evt.target.getId();
          } else {
            this.handleNode = false;
          }

          // this.ogma.removeNode(evt.target.getId());
          // console.log(evt.target.getPosition());
        }
      });
    },

    runLayout(options) {
      const self = this;
      console.log(this.ogma.layouts);
      this.ogma.layouts.forceLink(options).then(function() {
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
#graph-team {
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
.teamAnaly {
  border: 1px solid #dcdfe6;
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  display: inline-block;
  padding: 5px 15px;
  cursor: pointer;
}
</style>

