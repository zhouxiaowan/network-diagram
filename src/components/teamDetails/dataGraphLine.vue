<template>
  <div>
    <div id="graph-lineinfo"></div>
    <div class="table-info">
      <table class="incorporate" cellspacing="0" cellpadding="0" border="0">
        <tr v-for="(item,index) in edgeinfo.nodes" :key="index">
          <td style="background-color: #f5f7fa;" v-if="item.data.type==='case'">警情编号</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===0">人名</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===1">电子邮件</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===2">手机号码</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===3">固定电话</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===4">车牌号</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===5">网址</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===6">身份证</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===7">地名</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===8">机构名</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===9">出版物及物品名</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===10">公司名</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===11">时间</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===12">地址类别</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===13">报案人姓名</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===14">金额</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===15">银行卡号</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===16">微信号</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===17">QQ号</td>
          <td style="background-color: #f5f7fa;" v-if="item.data.type===18">支付宝账号</td>
          <td>{{item.data.name}}</td>
        </tr>
      </table>
    </div>
  </div>
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
  watch: {
    edgeinfo() {
      this.initData();
    }
  },
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
            font: "iconfont",
            content: this.ogma.rules.map({
              field: "type",
              values: {
                case: "\ue72f",
                0: "\ue62d",
                1: "\ue6b0",
                2: "\ue602",
                3: "\ue621",
                4: "\ue625",
                5: "\ue62b",
                6: "\ue674",
                7: "\ue732",
                8: "\ue660",
                9: "\ue685",
                10: "\ue802",
                11: "\ue72d",
                12: "\ue7f9",
                13: "\ue62a",
                14: "\ue84f",
                15: "\ue64c",
                16: "\ue645",
                17: "\ue62e",
                18: "\ue647"
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
  width: 50%;
  height: 400px;
  float: left;
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
  float: left;
  height: 400px;
  overflow: auto;
  display: flex;
  align-items: center;
}
.incorporate {
  box-sizing: border-box;
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
  word-break: keep-all;
}
.teaminfo {
  text-align: left;
  margin-left: 30px;
  margin-top: 50px;
}
</style>

