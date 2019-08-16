<template>
  <table class="incorporate" cellspacing="0" cellpadding="0" border="0">
    <thead>
      <tr v-if="nodeinfo.type === 'person'">
        <th>姓名</th>
        <th>人员类别</th>
        <th>公民身份号码</th>
        <th>户籍地</th>
        <th>服务处所</th>
        <th>联系方式</th>
        <th>现住址</th>
      </tr>
      <tr v-else-if="nodeinfo.type === 'case'">
        <th>警情编号</th>
        <th>报警时间</th>
        <th>事发地点</th>
        <th>报警类型</th>
        <th>报警内容</th>
        <th>报警人</th>
        <th>处警人</th>
        <th>处警结果</th>
      </tr>
      <tr v-else-if="nodeinfo.type === 'tel'">
        <th>电话</th>
      </tr>
      <tr v-else-if="nodeinfo.type === 'factory'">
        <th>名称</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="nodeinfo.type === 'case'">
        <td>{{nodeinfo.name}}</td>
        <td>{{nodeinfo.time}}</td>
        <td>{{nodeinfo.address}}</td>
        <td>{{nodeinfo.ptype}}</td>
        <td>{{nodeinfo.content}}</td>
        <td>{{nodeinfo.rname}}</td>
        <td>{{nodeinfo.dname}}</td>
        <td>{{nodeinfo.proceresult}}</td>
      </tr>
      <tr v-else-if="nodeinfo.type === 'person'">
        <td>{{nodeinfo.name}}</td>
        <td>{{nodeinfo.ptype}}</td>
        <td>{{nodeinfo.idcard}}</td>
        <td>{{nodeinfo.CM}}</td>
        <td>{{nodeinfo.serplace}}</td>
        <td>{{nodeinfo.contactel}}</td>
        <td>{{nodeinfo.nowplace}}</td>
      </tr>
      <tr v-else-if="nodeinfo.type === 'tel'">
        <td>{{nodeinfo.name}}</td>
      </tr>
      <tr v-else-if="nodeinfo.type === 'factory'">
        <td>{{nodeinfo.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["nodeinfo"],
  created() {},
  methods: {}
};
</script>

<style scoped>
.table-info {
  margin-left: 30px;
  margin-top: 50px;
}
.incorporate {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  font-size: 14px;
  color: #606266;
  margin-left: 30px;
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
</style>
