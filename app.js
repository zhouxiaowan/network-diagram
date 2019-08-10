const express = require('express');
const app = express();
app.get('/searchRelation', function (req, res) {
        res.header("Access-Control-Allow-Origin", "http://192.168.0.104:8080"); //项目上线后改成页面的地址
        // res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.send({
            "nodes": [{
                    "id": "zhangsan",
                    "data": {
                        "name": "张三",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "L0"
                        ]
                    }
                },
                {
                    "id": "J00003c8b",
                    "data": {
                        "name": "J00003c8b",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "V00413b8e",
                    "data": {
                        "name": "V00413b8e",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "K01420v6l",
                    "data": {
                        "name": "K01420v6l",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "13210205415",
                    "data": {
                        "name": "13210205415",
                        "type": "tel",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "card",
                    "data": {
                        "name": "北京市海淀区",
                        "type": "card",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "factory",
                    "data": {
                        "name": "北京市海淀区",
                        "type": "factory",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "D12503ve4",
                    "data": {
                        "name": "D12503ve4",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L2"
                        ]
                    }
                },
                {
                    "id": "K20325v8g",
                    "data": {
                        "name": "K20325v8g",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L2"
                        ]
                    }
                },
                {
                    "id": "J10020e5f",
                    "data": {
                        "name": "J10020e5f",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L2"
                        ]
                    }
                },
                {
                    "id": "wangyiming",
                    "data": {
                        "name": "王一鸣",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "Last"
                        ]
                    }
                },
                {
                    "id": "chensijia",
                    "data": {
                        "name": "陈思佳",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "Last"
                        ]
                    }
                },
                {
                    "id": "liuyuming",
                    "data": {
                        "name": "刘玉明",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "Last"
                        ]
                    }
                },
                {
                    "id": "zhangchangsheng",
                    "data": {
                        "name": "张昌盛",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "Last"
                        ]
                    }
                },
                {
                    "id": "wulida",
                    "data": {
                        "name": "吴利达",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "Last"
                        ]
                    }
                },

            ],
            "edges": [{
                    "source": "zhangsan",
                    "target": "J00003c8b",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "zhangsan",
                    "target": "V00413b8e",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "zhangsan",
                    "target": "K01420v6l",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "zhangsan",
                    "target": "13210205415",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "zhangsan",
                    "target": "card",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "zhangsan",
                    "target": "factory",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "J00003c8b",
                    "target": "wangyiming",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "J00003c8b",
                    "target": "D12503ve4",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "V00413b8e",
                    "target": "D12503ve4",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "V00413b8e",
                    "target": "K20325v8g",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "K01420v6l",
                    "target": "J10020e5f",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "13210205415",
                    "target": "wulida",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "card",
                    "target": "zhangchangsheng",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "factory",
                    "target": "chensijia",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "D12503ve4",
                    "target": "wangyiming",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "D12503ve4",
                    "target": "chensijia",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "K20325v8g",
                    "target": "wangyiming",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "K20325v8g",
                    "target": "liuyuming",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "J10020e5f",
                    "target": "chensijia",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "J10020e5f",
                    "target": "liuyuming",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "J10020e5f",
                    "target": "zhangchangsheng",
                    "data": {
                        "type": "solid"
                    }
                },

            ]

        })
    }),
    app.get('/searchcase', function (req, res) {
        res.header("Access-Control-Allow-Origin", "http://192.168.0.104:8080"); //项目上线后改成页面的地址
        // res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.send({
            "nodes": [{
                    "id": "V00413b8e",
                    "data": {
                        "name": "V00413b8e",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L0"
                        ]
                    }
                },
                {
                    "id": "133945620158",
                    "data": {
                        "name": "133945620158",
                        "type": "tel",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "qianzi",
                    "data": {
                        "name": "钳子",
                        "type": "tool",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "V00523r3e",
                    "data": {
                        "name": "V00523r3e",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L2"
                        ]
                    }
                },
                {
                    "id": "K01420v6l",
                    "data": {
                        "name": "K01420v6l",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L2"
                        ]
                    }
                },
                {
                    "id": "H24163c5e",
                    "data": {
                        "name": "H24163c5e",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L2"
                        ]
                    }
                },
                {
                    "id": "C32541e8s",
                    "data": {
                        "name": "C32541e8s",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L2"
                        ]
                    }
                },
                {
                    "id": "caidao",
                    "data": {
                        "name": "菜刀",
                        "type": "tool",
                        "categories": [
                            "L3"
                        ]
                    }
                },
                {
                    "id": "121927301893",
                    "data": {
                        "name": "121927301893",
                        "type": "tel",
                        "categories": [
                            "L3"
                        ]
                    }
                },
                {
                    "id": "F20453e2f",
                    "data": {
                        "name": "F20453e2f",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L4"
                        ]
                    }
                },
                {
                    "id": "C03222e8f",
                    "data": {
                        "name": "C03222e8f",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "proceresult": "-",
                        "categories": [
                            "L4"
                        ]
                    }
                }
            ],
            "edges": [{
                    "source": "V00413b8e",
                    "target": "133945620158",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "V00413b8e",
                    "target": "qianzi",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "133945620158",
                    "target": "V00523r3e",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "133945620158",
                    "target": "K01420v6l",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "133945620158",
                    "target": "H24163c5e",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "qianzi",
                    "target": "H24163c5e",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "qianzi",
                    "target": "C32541e8s",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "V00523r3e",
                    "target": "caidao",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "H24163c5e",
                    "target": "121927301893",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "C32541e8s",
                    "target": "121927301893",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "caidao",
                    "target": "F20453e2f",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "121927301893",
                    "target": "F20453e2f",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "121927301893",
                    "target": "C03222e8f",
                    "data": {
                        "type": "solid"
                    }
                },

            ]
        })
    }),
    app.get('/teamanalysis', function (req, res) {
        res.header("Access-Control-Allow-Origin", "http://192.168.0.104:8080"); //项目上线后改成页面的地址
        res.send({
            "nodes": [{
                    "id": "zhangzheng",
                    "data": {
                        "name": "张正",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "V00413b8e",
                    "data": {
                        "name": "V00413b8e",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "categories": [
                            "L0"
                        ]
                    }
                },
                {
                    "id": "V00523r3e",
                    "data": {
                        "name": "V00523r3e",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "categories": [
                            "L0"
                        ]
                    }
                },
                {
                    "id": "lisi",
                    "data": {
                        "name": "李四",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "zhangsan",
                    "data": {
                        "name": "张三",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "C32541e8s",
                    "data": {
                        "name": "C32541e8s",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "categories": [
                            "L0"
                        ]
                    }
                },
                {
                    "id": "H24163c5e",
                    "data": {
                        "name": "H24163c5e",
                        "type": "case",
                        "time": "2014.01.05",
                        "address": "望京西地铁站附近",
                        "ptype": "威胁他人人身安全",
                        "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                        "rname": "张正",
                        "dname": "李强",
                        "categories": [
                            "L0"
                        ]
                    }
                },
                {
                    "id": "wangwu",
                    "data": {
                        "name": "王五",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "L1"
                        ]
                    }
                },
                {
                    "id": "liuming",
                    "data": {
                        "name": "刘明",
                        "type": "person",
                        "ptype": "报警人",
                        "idcard": "102533197301231254",
                        "CM": "北京市朝阳区",
                        "serplace": "远方商务咨询有限公司",
                        "contactel": "15220131232",
                        "nowplace": "北京",
                        "categories": [
                            "L1"
                        ]
                    }
                },

            ],
            "edges": [{
                    "source": "zhangzheng",
                    "target": "V00413b8e",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "zhangzheng",
                    "target": "V00523r3e",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "V00413b8e",
                    "target": "V00523r3e",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "V00413b8e",
                    "target": "lisi",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "V00523r3e",
                    "target": "zhangsan",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "V00413b8e",
                    "target": "C32541e8s",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "V00413b8e",
                    "target": "H24163c5e",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "V00523r3e",
                    "target": "H24163c5e",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "lisi",
                    "target": "C32541e8s",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "zhangsan",
                    "target": "H24163c5e",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "C32541e8s",
                    "target": "wangwu",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "C32541e8s",
                    "target": "H24163c5e",
                    "data": {
                        "type": "dashed"
                    }
                },
                {
                    "source": "H24163c5e",
                    "target": "wangwu",
                    "data": {
                        "type": "solid"
                    }
                },
                {
                    "source": "H24163c5e",
                    "target": "liuming",
                    "data": {
                        "type": "solid"
                    }
                }
            ]
        })
    })

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
})