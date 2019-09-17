const express = require('express');
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.post('/findTeamAndPersonByRecord', function (req, res, next) {
    // 获取参数
    var query = req.body;
    console.log("post请求：参数", query);
    if (query.caseid == 123) {
        res.send({
            "result": {
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
            }
        })
    } else {
        res.send({
            "result": {
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
            }
        })
    }

});

app.get('/findPersonTeamByIdCard', function (req, res) {
    res.send({
        "result": {
            "nodes": [{
                    "data": {
                        "name": "刘东升",
                        "categories": 0,
                        "type": "person"
                    },
                    "id": "320281197801238577"
                },
                {
                    "data": {
                        "name": "江苏省无锡市江阴市黄山路大桥一村1号楼3单元501",
                        "categories": 1,
                        "type": "address"
                    },
                    "id": "address:江苏省无锡市江阴市黄山路大桥一村1号楼3单元501"
                },
                {
                    "data": {
                        "name": "江苏省无锡市江阴市黄山路大桥一村1号楼3单元501",
                        "categories": 1,
                        "type": "address"
                    },
                    "id": "address:江苏省无锡市江阴市黄山路大桥一村1号楼3单元501"
                },
                {
                    "data": {
                        "name": "山东省济南市万科中心12楼",
                        "categories": 1,
                        "type": "CM"
                    },
                    "id": "CM:山东省济南市万科中心12楼"
                },
                {
                    "data": {
                        "name": "J3202150107085274665",
                        "categories": "1",
                        "type": "case"
                    },
                    "id": "J3202150107085274665"
                },
                {
                    "data": {
                        "name": "J3202150101180933051",
                        "categories": "1",
                        "type": "case"
                    },
                    "id": "J3202150101180933051"
                },
                {
                    "data": {
                        "name": "J3202150131160711612",
                        "categories": "1",
                        "type": "case"
                    },
                    "id": "J3202150131160711612"
                },
                {
                    "data": {
                        "name": "J3202150211205416649",
                        "categories": 2,
                        "type": "case"
                    },
                    "id": "J3202150211205416649"
                },
                {
                    "data": {
                        "name": "J3202150521142720623",
                        "categories": 2,
                        "type": "case"
                    },
                    "id": "J3202150521142720623"
                },
                {
                    "data": {
                        "name": "J3202150514110260850",
                        "categories": 2,
                        "type": "case"
                    },
                    "id": "J3202150514110260850"
                },
                {
                    "data": {
                        "score": 0.37994896225522484,
                        "name": "居君彪",
                        "categories": 2,
                        "type": "person"
                    },
                    "id": "320281195509062409"
                },
                {
                    "data": {
                        "score": 0.19737532022490403,
                        "name": "王少波",
                        "categories": 3,
                        "type": "person"
                    },
                    "id": "320281198803027655"
                },
                {
                    "data": {
                        "score": 0.8853516482022624,
                        "name": "周峰",
                        "categories": 2,
                        "type": "person"
                    },
                    "id": "320281198011259607"
                },
                {
                    "data": {
                        "name": "江阴天胜康食品贸易有限公司",
                        "categories": 2,
                        "type": "serplace"
                    },
                    "id": "serplace:江阴天胜康食品贸易有限公司"
                },
                {
                    "data": {
                        "score": 0.1325487883908784,
                        "name": "陈林燕",
                        "categories": 3,
                        "type": "person"
                    },
                    "id": "320281199203045567"
                },
                {
                    "data": {
                        "score": 0.19737532022490403,
                        "name": "宋惠新",
                        "categories": 3,
                        "type": "person"
                    },
                    "id": "320281197909039988"
                },
                {
                    "data": {
                        "score": 0.19737532022490403,
                        "name": "任静霞",
                        "categories": 3,
                        "type": "person"
                    },
                    "id": "320281197809152377"
                },
                {
                    "data": {
                        "score": 0.8086365140907334,
                        "name": "陈晔",
                        "categories": 3,
                        "type": "person"
                    },
                    "id": "320281198312250960"
                },
                {
                    "data": {
                        "name": "山东省济南市",
                        "categories": 2,
                        "type": "CM"
                    },
                    "id": "CM:山东省济南市"
                },
                {
                    "data": {
                        "name": "山东省济南市万科中心11楼",
                        "categories": 2,
                        "type": "CM"
                    },
                    "id": "CM:山东省济南市万科中心11楼"
                }
            ],
            "edges": [{
                    "source": "320281197801238577",
                    "target": "J3202150107085274665"
                },
                {
                    "source": "320281197801238577",
                    "target": "J3202150101180933051"
                },
                {
                    "source": "320281197801238577",
                    "target": "J3202150131160711612"
                },
                {
                    "source": "J3202150107085274665",
                    "target": "320281195509062409"
                },
                {
                    "source": "J3202150131160711612",
                    "target": "J3202150514110260850"
                },
                {
                    "source": "J3202150101180933051",
                    "target": "320281198011259607"
                },
                {
                    "source": "address:江苏省无锡市江阴市黄山路大桥一村1号楼3单元501",
                    "target": "320281198011259607"
                },
                {
                    "source": "serplace:江阴天胜康食品贸易有限公司",
                    "target": "320281198011259607"
                },
                {
                    "source": "J3202150131160711612",
                    "target": "J3202150211205416649"
                },
                {
                    "source": "J3202150521142720623",
                    "target": "J3202150211205416649"
                },
                {
                    "source": "J3202150101180933051",
                    "target": "J3202150211205416649"
                },
                {
                    "source": "J3202150521142720623",
                    "target": "J3202150131160711612"
                },
                {
                    "source": "J3202150521142720623",
                    "target": "J3202150101180933051"
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
                    "target": "320281197809152377"
                },
                {
                    "source": "J3202150131160711612",
                    "target": "J3202150514110260850"
                },
                {
                    "source": "CM:山东省济南市万科中心12楼",
                    "target": "CM:山东省济南市"
                },
                {
                    "source": "CM:山东省济南市",
                    "target": "320281198312250960"
                },
                {
                    "source": "CM:山东省济南市万科中心12楼",
                    "target": "CM:山东省济南市万科中心11楼"
                },
                {
                    "source": "CM:山东省济南市万科中心11楼",
                    "target": "320281198312250960"
                },
                {
                    "source": "J3202150131160711612",
                    "target": "J3202150211205416649"
                },
                {
                    "source": "J3202150521142720623",
                    "target": "J3202150211205416649"
                },
                {
                    "source": "J3202150101180933051",
                    "target": "J3202150211205416649"
                },
                {
                    "source": "J3202150521142720623",
                    "target": "J3202150131160711612"
                },
                {
                    "source": "J3202150521142720623",
                    "target": "J3202150101180933051"
                },
                {
                    "source": "J3202150107085274665",
                    "target": "J3202150211205416649"
                },
                {
                    "source": "J3202150107085274665",
                    "target": "J3202150521142720623"
                }
            ]
        }
    })
});
app.get('/findRelevanceFacotr', (req, res) => {
    res.send({
        "result": {
            "nodes": [{
                    "data": {
                        "address": "申港申裕苑2期4幢103室",
                        "rname": "匿名",
                        "name": "J3202816717081573347",
                        "ptype": "260503",
                        "time": "20170815",
                        "dname": "827359,001617                     ",
                        "type": "case",
                        "content": "有一个人一直呆在我家不肯走，问其何事称因为债务纠纷，告知可跟对方好好协商或跟对方协商分期付款，协商不了可走司法途径，其称协商不了，向其解释不通。"
                    },
                    "id": "J3202816717081573347"
                },
                {
                    "data": {
                        "address": "申港申裕苑二期2栋",
                        "rname": "匿名",
                        "name": "J3202816717081259572",
                        "ptype": "260503",
                        "time": "20170812",
                        "dname": "003600,001617                     ",
                        "type": "case",
                        "content": "一大早有人开了车在放高音喇叭，欠债还钱之类的。应该是姓毛的人家。"
                    },
                    "id": "J3202816717081259572"
                },
                {
                    "data": {
                        "name": "姜亮亮",
                        "type": 0
                    },
                    "id": "factor0"
                },
                {
                    "data": {
                        "name": "341223199301014330",
                        "type": 6
                    },
                    "id": "factor1"
                }
            ],
            "edges": [{
                    "source": "J3202816717081573347",
                    "target": "factor0"
                },
                {
                    "source": "factor0",
                    "target": "J3202816717081259572"
                },
                {
                    "source": "J3202816717081573347",
                    "target": "factor1"
                },
                {
                    "source": "factor1",
                    "target": "J3202816717081259572"
                }
            ]
        }
    })
});
app.get('/findTeamByRecordId', function (req, res) {
    res.send({
        "result": {
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
        }
    })
});
// app.get('/findTeamAndPersonByRecord', function (req, res) {
//     res.send({
//         "result": {
//             "nodes": [{
//                     "data": {
//                         "serplace": "江阴天胜康食品贸易有限公司",
//                         "idcard": "320281197801238577",
//                         "name": "刘东升",
//                         "contactel": null,
//                         "CM": "江苏省江阴市",
//                         "type": "person"
//                     },
//                     "name": "刘东升",
//                     "id": "320281197801238577"
//                 },
//                 {
//                     "data": {
//                         "serplace": "江阴市得名暖通设备有限公司",
//                         "idcard": "320281198011259607",
//                         "name": "周峰",
//                         "contactel": null,
//                         "CM": "浙江省金华市",
//                         "type": "person"
//                     },
//                     "name": "周峰",
//                     "id": "320281198011259607"
//                 },
//                 {
//                     "data": {
//                         "serplace": "江阴翰志汽车服务有限公司",
//                         "idcard": "320281195509062409",
//                         "name": "居君彪",
//                         "contactel": null,
//                         "CM": "江苏省江阴市",
//                         "type": "person"
//                     },
//                     "name": "居君彪",
//                     "id": "320281195509062409"
//                 },
//                 {
//                     "data": {
//                         "serplace": "江苏铂格网络科技有限公司",
//                         "idcard": "320281197809152377",
//                         "name": "任静霞",
//                         "contactel": null,
//                         "CM": "江苏省江阴市",
//                         "type": "person"
//                     },
//                     "name": "任静霞",
//                     "id": "320281197809152377"
//                 },
//                 {
//                     "data": {
//                         "serplace": "江阴英杰体育文化有限公司",
//                         "idcard": "320281198312250960",
//                         "name": "陈晔",
//                         "contactel": null,
//                         "CM": "山东省济南市",
//                         "type": "person"
//                     },
//                     "name": "陈晔",
//                     "id": "320281198312250960"
//                 },
//                 {
//                     "data": {
//                         "serplace": "江苏垦乐节能环保科技有限公司",
//                         "idcard": "320281199203045567",
//                         "name": "陈林燕",
//                         "contactel": null,
//                         "CM": "河北省保定市",
//                         "type": "person"
//                     },
//                     "name": "陈林燕",
//                     "id": "320281199203045567"
//                 },
//                 {
//                     "data": {
//                         "serplace": "烟台味尚餐饮管理有限公司江阴分公司",
//                         "idcard": "320281197909039988",
//                         "name": "宋惠新",
//                         "contactel": null,
//                         "CM": "安徽省合肥市",
//                         "type": "person"
//                     },
//                     "name": "宋惠新",
//                     "id": "320281197909039988"
//                 },
//                 {
//                     "data": {
//                         "serplace": "上海中克世电子科技有限公司江阴分公司",
//                         "idcard": "320281198803027655",
//                         "name": "王少波",
//                         "contactel": null,
//                         "CM": "江苏省江阴市",
//                         "type": "person"
//                     },
//                     "name": "王少波",
//                     "id": "320281198803027655"
//                 },
//                 {
//                     "data": {
//                         "address": "市区昊柏往麦德龙大酒店方向十字路口处",
//                         "rname": null,
//                         "name": "J3202150101180933051",
//                         "ptype": "机动车与机动车",
//                         "time": "20190711",
//                         "dname": null,
//                         "categories": 0,
//                         "type": "case",
//                         "content": "宝马苏B865EQ撞出租车，人没事。"
//                     },
//                     "id": "J3202150101180933051"
//                 },
//                 {
//                     "data": {
//                         "address": "市区五星桥东桥堍",
//                         "rname": null,
//                         "name": "J3202150107085274665",
//                         "ptype": "机动车与机动车",
//                         "time": null,
//                         "dname": null,
//                         "type": "case",
//                         "content": "雪佛兰与大众相撞，人没事，我的车牌苏B665EJ。"
//                     },
//                     "id": "J3202150107085274665"
//                 },
//                 {
//                     "data": {
//                         "address": "市区人民路澄江街道门口",
//                         "rname": null,
//                         "name": "J3202150131160711612",
//                         "ptype": "机动车与机动车",
//                         "time": null,
//                         "dname": null,
//                         "type": "case",
//                         "content": "奔驰和出租车相撞，人没事，我的车牌是苏BE817V。"
//                     },
//                     "id": "J3202150131160711612"
//                 },
//                 {
//                     "data": {
//                         "address": "市区杏春桥西面红绿灯",
//                         "rname": null,
//                         "name": "J3202150211205416649",
//                         "ptype": "机动车与机动车",
//                         "time": null,
//                         "dname": null,
//                         "type": "case",
//                         "content": "我的轿车（苏BP2023）和出租车相撞，人没事。"
//                     },
//                     "id": "J3202150211205416649"
//                 },
//                 {
//                     "data": {
//                         "address": "市区文化路行政事业单位往西到江阴大桥桥下",
//                         "rname": null,
//                         "name": "J3202150521142720623",
//                         "ptype": "机动车与机动车",
//                         "time": null,
//                         "dname": null,
//                         "type": "case",
//                         "content": "出租车和普桑擦了，人没事，苏BE817V。"
//                     },
//                     "id": "J3202150521142720623"
//                 },
//                 {
//                     "data": {
//                         "address": "市区毗邻路虹桥南路口",
//                         "rname": null,
//                         "name": "J3202150514110260850",
//                         "ptype": "机动车与机动车",
//                         "time": null,
//                         "dname": null,
//                         "type": "case",
//                         "content": "两辆轿车相撞，人无事，车牌苏B5517X。"
//                     },
//                     "id": "J3202150514110260850"
//                 }
//             ],
//             "edges": [{
//                     "source": "J3202150101180933051",
//                     "target": "320281197801238577"
//                 },
//                 {
//                     "source": "J3202150101180933051",
//                     "target": "320281198011259607"
//                 },
//                 {
//                     "source": "J3202150107085274665",
//                     "target": "320281195509062409"
//                 },
//                 {
//                     "source": "J3202150107085274665",
//                     "target": "320281197801238577"
//                 },
//                 {
//                     "source": "J3202150131160711612",
//                     "target": "320281197809152377"
//                 },
//                 {
//                     "source": "J3202150131160711612",
//                     "target": "320281197801238577"
//                 },
//                 {
//                     "source": "J3202150211205416649",
//                     "target": "320281198312250960"
//                 },
//                 {
//                     "source": "J3202150211205416649",
//                     "target": "320281199203045567"
//                 },
//                 {
//                     "source": "J3202150521142720623",
//                     "target": "320281198312250960"
//                 },
//                 {
//                     "source": "J3202150521142720623",
//                     "target": "320281197909039988"
//                 },
//                 {
//                     "source": "J3202150514110260850",
//                     "target": "320281197809152377"
//                 },
//                 {
//                     "source": "J3202150514110260850",
//                     "target": "320281198803027655"
//                 },
//                 {
//                     "source": "J3202150101180933051",
//                     "target": "J3202150107085274665"
//                 },
//                 {
//                     "source": "J3202150101180933051",
//                     "target": "J3202150131160711612"
//                 },
//                 {
//                     "source": "J3202150101180933051",
//                     "target": "J3202150211205416649"
//                 },
//                 {
//                     "source": "J3202150101180933051",
//                     "target": "J3202150521142720623"
//                 },
//                 {
//                     "source": "J3202150107085274665",
//                     "target": "J3202150131160711612"
//                 },
//                 {
//                     "source": "J3202150107085274665",
//                     "target": "J3202150211205416649"
//                 },
//                 {
//                     "source": "J3202150107085274665",
//                     "target": "J3202150521142720623"
//                 },
//                 {
//                     "source": "J3202150131160711612",
//                     "target": "J3202150211205416649"
//                 },
//                 {
//                     "source": "J3202150131160711612",
//                     "target": "J3202150514110260850"
//                 },
//                 {
//                     "source": "J3202150131160711612",
//                     "target": "J3202150521142720623"
//                 },
//                 {
//                     "source": "J3202150211205416649",
//                     "target": "J3202150521142720623"
//                 },
//                 {
//                     "source": "J3202150521142720623",
//                     "target": "J3202150101180933051"
//                 },
//                 {
//                     "source": "J3202150521142720623",
//                     "target": "J3202150107085274665"
//                 },
//                 {
//                     "source": "J3202150521142720623",
//                     "target": "J3202150131160711612"
//                 },
//                 {
//                     "source": "J3202150521142720623",
//                     "target": "J3202150211205416649"
//                 },
//                 {
//                     "source": "J3202150514110260850",
//                     "target": "J3202150131160711612"
//                 }
//             ]
//         }
//     })
// });

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
})