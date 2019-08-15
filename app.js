const express = require('express');
const app = express();
app.get('/searchRelation', function (req, res) {
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
                    "categories": 0
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
                    "categories": 1
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
                    "categories": 1
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
                    "categories": 1
                }
            },
            {
                "id": "13210205415",
                "data": {
                    "name": "13210205415",
                    "type": "tel",
                    "categories": 1
                }
            },
            {
                "id": "card",
                "data": {
                    "name": "北京市海淀区",
                    "type": "card",
                    "categories": 1
                }
            },
            {
                "id": "factory",
                "data": {
                    "name": "北京市海淀区",
                    "type": "factory",
                    "categories": 1
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
                    "categories": 2
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
                    "categories": 2
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
                    "categories": 2
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
                    "categories": 3,
                    "score": 0.3
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
                    "categories": 3,
                    "score": 0.8
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
                    "categories": 3,
                    "score": 0.5
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
                    "categories": 3,
                    "score": 0.9
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
                    "categories": 3,
                    "score": 0.7
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
});
app.get('/findRelevanceFacotr', (req, res) => {
    res.send({
        "nodes": [{
                "data": {
                    "address": "市区丽都花园148幢503室",
                    "rname": null,
                    "name": "J3202150516223683515",
                    "ptype": "其他日常生活求助",
                    "time": null,
                    "dname": null,
                    "type": "case",
                    "content": "早上我报过警的，现我的车子在辽宁找到了，那边已经立案，这边也需要报警立案。我现在新华三村20幢405室。"
                },
                "id": "J3202150516223683515"
            },
            {
                "data": {
                    "address": "市区丽都花园148幢503室",
                    "rname": null,
                    "name": "J3202150516094076349",
                    "ptype": "其他经济纠纷",
                    "time": null,
                    "dname": null,
                    "type": "case",
                    "content": "我的车子被人偷走了，被人开到山东去了，我老公告诉我车子里有40万。经查此号码昨天多次报警老公欠人钱有经济纠纷。"
                },
                "id": "J3202150516094076349"
            },
            {
                "data": {
                    "name": "丽都城市花园148幢503室",
                    "type": 7
                },
                "id": "factor0"
            },
            {
                "data": {
                    "name": "涂以兰",
                    "type": 7
                },
                "id": "factor1"
            },
            {
                "data": {
                    "name": "5月15日21时02分",
                    "type": 11
                },
                "id": "factor2"
            },
            {
                "data": {
                    "name": "苏BV052G",
                    "type": 4
                },
                "id": "factor3"
            },
            {
                "data": {
                    "name": "丽都城市花园148幢503室",
                    "type": 7
                },
                "id": "factor4"
            },
            {
                "data": {
                    "name": "涂以兰",
                    "type": 7
                },
                "id": "factor5"
            },
            {
                "data": {
                    "name": "5月15日21时02分",
                    "type": 11
                },
                "id": "factor6"
            },
            {
                "data": {
                    "name": "苏BV052G",
                    "type": 4
                },
                "id": "factor7"
            },
            {
                "data": {
                    "name": "丽都城市花园148幢503室",
                    "type": 7
                },
                "id": "factor8"
            },
            {
                "data": {
                    "name": "涂以兰",
                    "type": 7
                },
                "id": "factor9"
            },
            {
                "data": {
                    "name": "5月15日21时02分",
                    "type": 11
                },
                "id": "factor10"
            },
            {
                "data": {
                    "name": "苏BV052G",
                    "type": 4
                },
                "id": "factor11"
            },
            {
                "data": {
                    "name": "孙磊",
                    "type": 0
                },
                "id": "factor12"
            },
            {
                "data": {
                    "name": "王绍君",
                    "type": 0
                },
                "id": "factor13"
            },
            {
                "data": {
                    "name": "屈小强",
                    "type": 0
                },
                "id": "factor14"
            },
            {
                "data": {
                    "name": "丽都城市花园148幢503室",
                    "type": 7
                },
                "id": "factor15"
            },
            {
                "data": {
                    "name": "涂以兰",
                    "type": 7
                },
                "id": "factor16"
            },
            {
                "data": {
                    "name": "5月15日21时02分",
                    "type": 11
                },
                "id": "factor17"
            },
            {
                "data": {
                    "name": "苏BV052G",
                    "type": 4
                },
                "id": "factor18"
            }
        ],
        "edges": [{
                "source": "J3202150516223683515",
                "target": "factor0"
            },
            {
                "source": "factor0",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor1"
            },
            {
                "source": "factor1",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor2"
            },
            {
                "source": "factor2",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor3"
            },
            {
                "source": "factor3",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor4"
            },
            {
                "source": "factor4",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor5"
            },
            {
                "source": "factor5",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor6"
            },
            {
                "source": "factor6",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor7"
            },
            {
                "source": "factor7",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor8"
            },
            {
                "source": "factor8",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor9"
            },
            {
                "source": "factor9",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor10"
            },
            {
                "source": "factor10",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor11"
            },
            {
                "source": "factor11",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor12"
            },
            {
                "source": "factor12",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor13"
            },
            {
                "source": "factor13",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor14"
            },
            {
                "source": "factor14",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor15"
            },
            {
                "source": "factor15",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor16"
            },
            {
                "source": "factor16",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor17"
            },
            {
                "source": "factor17",
                "target": "J3202150516094076349"
            },
            {
                "source": "J3202150516223683515",
                "target": "factor18"
            },
            {
                "source": "factor18",
                "target": "J3202150516094076349"
            }
        ]

    })
});
app.get('/findTeamByRecordId', function (req, res) {
    res.send({
        "nodes": [{
                "data": {
                    "address": "市区昊柏往麦德龙大酒店方向十字路口处",
                    "rname": null,
                    "name": "J3202150101180933051",
                    "ptype": "机动车与机动车",
                    "time": null, //时间字段很可能是 20190711 这个格式的所以前端可能需要处理一下
                    "dname": null,
                    "categories": 0,
                    "type": "case",
                    "content": "宝马苏B865EQ撞出租车，人没事。"
                },
                "id": "J3202150101180933051"
            },
            {
                "data": {
                    "address": "市区五星桥东桥堍",
                    "rname": null,
                    "name": "J3202150107085274665",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "categories": 1,
                    "type": "case",
                    "content": "雪佛兰与大众相撞，人没事，我的车牌苏B665EJ。"
                },
                "id": "J3202150107085274665"
            },
            {
                "data": {
                    "address": "市区人民路澄江街道门口",
                    "rname": null,
                    "name": "J3202150131160711612",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "categories": 1,
                    "type": "case",
                    "content": "奔驰和出租车相撞，人没事，我的车牌是苏BE817V。"
                },
                "id": "J3202150131160711612"
            },
            {
                "data": {
                    "address": "市区杏春桥西面红绿灯",
                    "rname": null,
                    "name": "J3202150211205416649",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "categories": 1,
                    "type": "case",
                    "content": "我的轿车（苏BP2023）和出租车相撞，人没事。"
                },
                "id": "J3202150211205416649"
            },
            {
                "data": {
                    "address": "市区文化路行政事业单位往西到江阴大桥桥下",
                    "rname": null,
                    "name": "J3202150521142720623",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "categories": 1,
                    "type": "case",
                    "content": "出租车和普桑擦了，人没事，苏BE817V。"
                },
                "id": "J3202150521142720623"
            },
            {
                "data": {
                    "address": "市区毗邻路虹桥南路口",
                    "rname": null,
                    "name": "J3202150514110260850",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "categories": 2,
                    "type": "case",
                    "content": "两辆轿车相撞，人无事，车牌苏B5517X。"
                },
                "id": "J3202150514110260850"
            }
        ],
        "edges": [{
                "source": "J3202150101180933051",
                "target": "J3202150107085274665"
            },
            {
                "source": "J3202150101180933051",
                "target": "J3202150131160711612"
            },
            {
                "source": "J3202150101180933051",
                "target": "J3202150211205416649"
            },
            {
                "source": "J3202150101180933051",
                "target": "J3202150521142720623"
            },
            {
                "source": "J3202150107085274665",
                "target": "J3202150131160711612"
            },
            {
                "source": "J3202150107085274665",
                "target": "J3202150211205416649"
            },
            {
                "source": "J3202150107085274665",
                "target": "J3202150521142720623"
            },
            {
                "source": "J3202150131160711612",
                "target": "J3202150211205416649"
            },
            {
                "source": "J3202150131160711612",
                "target": "J3202150514110260850"
            },
            {
                "source": "J3202150131160711612",
                "target": "J3202150521142720623"
            },
            {
                "source": "J3202150211205416649",
                "target": "J3202150521142720623"
            },
            {
                "source": "J3202150521142720623",
                "target": "J3202150101180933051"
            },
            {
                "source": "J3202150521142720623",
                "target": "J3202150107085274665"
            },
            {
                "source": "J3202150521142720623",
                "target": "J3202150131160711612"
            },
            {
                "source": "J3202150521142720623",
                "target": "J3202150211205416649"
            },
            {
                "source": "J3202150514110260850",
                "target": "J3202150131160711612"
            }
        ]
    })
});
app.get('/findTeamAndPersonByRecord', function (req, res) {
    res.send({
        "nodes": [{
                "data": {
                    "serplace": "江阴天胜康食品贸易有限公司",
                    "idcard": "320281197801238577",
                    "name": "刘东升",
                    "contactel": null,
                    "CM": "江苏省江阴市",
                    "type": "person"
                },
                "name": "刘东升",
                "id": "320281197801238577"
            },
            {
                "data": {
                    "serplace": "江阴市得名暖通设备有限公司",
                    "idcard": "320281198011259607",
                    "name": "周峰",
                    "contactel": null,
                    "CM": "浙江省金华市",
                    "type": "person"
                },
                "name": "周峰",
                "id": "320281198011259607"
            },
            {
                "data": {
                    "serplace": "江阴翰志汽车服务有限公司",
                    "idcard": "320281195509062409",
                    "name": "居君彪",
                    "contactel": null,
                    "CM": "江苏省江阴市",
                    "type": "person"
                },
                "name": "居君彪",
                "id": "320281195509062409"
            },
            {
                "data": {
                    "serplace": "江苏铂格网络科技有限公司",
                    "idcard": "320281197809152377",
                    "name": "任静霞",
                    "contactel": null,
                    "CM": "江苏省江阴市",
                    "type": "person"
                },
                "name": "任静霞",
                "id": "320281197809152377"
            },
            {
                "data": {
                    "serplace": "江阴英杰体育文化有限公司",
                    "idcard": "320281198312250960",
                    "name": "陈晔",
                    "contactel": null,
                    "CM": "山东省济南市",
                    "type": "person"
                },
                "name": "陈晔",
                "id": "320281198312250960"
            },
            {
                "data": {
                    "serplace": "江苏垦乐节能环保科技有限公司",
                    "idcard": "320281199203045567",
                    "name": "陈林燕",
                    "contactel": null,
                    "CM": "河北省保定市",
                    "type": "person"
                },
                "name": "陈林燕",
                "id": "320281199203045567"
            },
            {
                "data": {
                    "serplace": "烟台味尚餐饮管理有限公司江阴分公司",
                    "idcard": "320281197909039988",
                    "name": "宋惠新",
                    "contactel": null,
                    "CM": "安徽省合肥市",
                    "type": "person"
                },
                "name": "宋惠新",
                "id": "320281197909039988"
            },
            {
                "data": {
                    "serplace": "上海中克世电子科技有限公司江阴分公司",
                    "idcard": "320281198803027655",
                    "name": "王少波",
                    "contactel": null,
                    "CM": "江苏省江阴市",
                    "type": "person"
                },
                "name": "王少波",
                "id": "320281198803027655"
            },
            {
                "data": {
                    "address": "市区昊柏往麦德龙大酒店方向十字路口处",
                    "rname": null,
                    "name": "J3202150101180933051",
                    "ptype": "机动车与机动车",
                    "time": "20190711",
                    "dname": null,
                    "categories": 0,
                    "type": "case",
                    "content": "宝马苏B865EQ撞出租车，人没事。"
                },
                "id": "J3202150101180933051"
            },
            {
                "data": {
                    "address": "市区五星桥东桥堍",
                    "rname": null,
                    "name": "J3202150107085274665",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "type": "case",
                    "content": "雪佛兰与大众相撞，人没事，我的车牌苏B665EJ。"
                },
                "id": "J3202150107085274665"
            },
            {
                "data": {
                    "address": "市区人民路澄江街道门口",
                    "rname": null,
                    "name": "J3202150131160711612",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "type": "case",
                    "content": "奔驰和出租车相撞，人没事，我的车牌是苏BE817V。"
                },
                "id": "J3202150131160711612"
            },
            {
                "data": {
                    "address": "市区杏春桥西面红绿灯",
                    "rname": null,
                    "name": "J3202150211205416649",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "type": "case",
                    "content": "我的轿车（苏BP2023）和出租车相撞，人没事。"
                },
                "id": "J3202150211205416649"
            },
            {
                "data": {
                    "address": "市区文化路行政事业单位往西到江阴大桥桥下",
                    "rname": null,
                    "name": "J3202150521142720623",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "type": "case",
                    "content": "出租车和普桑擦了，人没事，苏BE817V。"
                },
                "id": "J3202150521142720623"
            },
            {
                "data": {
                    "address": "市区毗邻路虹桥南路口",
                    "rname": null,
                    "name": "J3202150514110260850",
                    "ptype": "机动车与机动车",
                    "time": null,
                    "dname": null,
                    "type": "case",
                    "content": "两辆轿车相撞，人无事，车牌苏B5517X。"
                },
                "id": "J3202150514110260850"
            }
        ],
        "edges": [{
                "source": "J3202150101180933051",
                "target": "320281197801238577"
            },
            {
                "source": "J3202150101180933051",
                "target": "320281198011259607"
            },
            {
                "source": "J3202150107085274665",
                "target": "320281195509062409"
            },
            {
                "source": "J3202150107085274665",
                "target": "320281197801238577"
            },
            {
                "source": "J3202150131160711612",
                "target": "320281197809152377"
            },
            {
                "source": "J3202150131160711612",
                "target": "320281197801238577"
            },
            {
                "source": "J3202150211205416649",
                "target": "320281198312250960"
            },
            {
                "source": "J3202150211205416649",
                "target": "320281199203045567"
            },
            {
                "source": "J3202150521142720623",
                "target": "320281198312250960"
            },
            {
                "source": "J3202150521142720623",
                "target": "320281197909039988"
            },
            {
                "source": "J3202150514110260850",
                "target": "320281197809152377"
            },
            {
                "source": "J3202150514110260850",
                "target": "320281198803027655"
            },
            {
                "source": "J3202150101180933051",
                "target": "J3202150107085274665"
            },
            {
                "source": "J3202150101180933051",
                "target": "J3202150131160711612"
            },
            {
                "source": "J3202150101180933051",
                "target": "J3202150211205416649"
            },
            {
                "source": "J3202150101180933051",
                "target": "J3202150521142720623"
            },
            {
                "source": "J3202150107085274665",
                "target": "J3202150131160711612"
            },
            {
                "source": "J3202150107085274665",
                "target": "J3202150211205416649"
            },
            {
                "source": "J3202150107085274665",
                "target": "J3202150521142720623"
            },
            {
                "source": "J3202150131160711612",
                "target": "J3202150211205416649"
            },
            {
                "source": "J3202150131160711612",
                "target": "J3202150514110260850"
            },
            {
                "source": "J3202150131160711612",
                "target": "J3202150521142720623"
            },
            {
                "source": "J3202150211205416649",
                "target": "J3202150521142720623"
            },
            {
                "source": "J3202150521142720623",
                "target": "J3202150101180933051"
            },
            {
                "source": "J3202150521142720623",
                "target": "J3202150107085274665"
            },
            {
                "source": "J3202150521142720623",
                "target": "J3202150131160711612"
            },
            {
                "source": "J3202150521142720623",
                "target": "J3202150211205416649"
            },
            {
                "source": "J3202150514110260850",
                "target": "J3202150131160711612"
            }
        ]
    })
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
})