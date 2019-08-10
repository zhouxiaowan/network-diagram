// 串并案数据格式
res.send({
    "nodes": [{
            "id": "V00413b8e",
            "data": {
                "type": "case", //类型是案子
                "time": "2014.01.05",
                "address": "望京西地铁站附近",
                "ptype": "威胁他人人身安全",
                "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                "rname": "张正",
                "dname": "李强",
                "categories": [
                    "L0" //层级
                ]
            }
        },
        {
            "id": "133945620158",
            "data": {
                "type": "tel", // 连接案子之间的
                "categories": [
                    "L1" //层级
                ]
            }
        }
    ],
    "edges": [{
        "source": "V00413b8e",
        "target": "133945620158"
    }]
})

// 团伙分析数据格式
res.send({
    "nodes": [{
            "id": "V00413b8e",
            "data": {
                "type": "case",
                "time": "2014.01.05",
                "address": "望京西地铁站附近",
                "ptype": "威胁他人人身安全", //报警类型
                "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                "rname": "张正", //报警人
                "dname": "李强", //处警人
                "categories": [
                    "L0"
                ]
            }
        },
        {
            "id": "张正",
            "data": {
                "type": "person",
                "name": "张正",
                "ptype": "报警人",
                "idcard": "102533197301231254",
                "CM": "北京市朝阳区", //户籍所在地
                "serplace": "远方商务咨询有限公司", //服务处所
                "contactel": "15220131232", // 联系方式
                "categories": [
                    "L1"
                ]
            }
        }
    ],
    "edges": [{
        "source": "V00413b8e",
        "target": "张正",
        "data": {
            "type": "solid"
        }
    }]
})

// 团伙详情
res.send({
    "nodes": [{
            "id": "张正",
            "data": {
                "type": "person",
                "name": "张正",
                "ptype": "报警人",
                "idcard": "102533197301231254",
                "CM": "北京市朝阳区", //户籍所在地
                "serplace": "远方商务咨询有限公司", //服务处所
                "contactel": "15220131232", // 联系方式
                "categories": [
                    "L1"
                ]
            }
        },
        {
            "id": "V00413b8e",
            "data": {
                "type": "case", //类型是案子
                "time": "2014.01.05",
                "address": "望京西地铁站附近",
                "ptype": "威胁他人人身安全",
                "content": "张先生报，在望京西地铁站附近被讨债公司威胁",
                "rname": "张正",
                "dname": "李强",
                "categories": [
                    "L0" //层级
                ]
            }
        },
        {
            "id": "133945620158",
            "data": {
                "type": "tel", // 连接案子之间的
                "categories": [
                    "L1" //层级
                ]
            }
        }
    ],
    "edges": [{
        "source": "V00413b8e",
        "target": "133945620158",
        "data": {
            "type": "solid", //实线还是虚线
            "tel": "133945620158",
            "businesscard": "aaaaaa",
            "factory": "炼油厂"
            // 等等
        }
    }]
})