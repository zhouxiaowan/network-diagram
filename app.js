const express = require('express');
const app = express();
app.get('/searchRelation', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://172.21.39.76:8080"); //项目上线后改成页面的地址
    // res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.send({
        "nodes": [{
                "id": 0,
                "data": {
                    "type": "device",
                    "name": "iPhone",
                    "categories": [
                        "level0"
                    ]
                }
            },
            {
                "data": {
                    "type": "part",
                    "part_type": "Accelerometer",
                    "categories": [
                        "level1"
                    ]
                },
                "id": "p0"
            },
            {
                "data": {
                    "type": "part",
                    "part_type": "Audio Chipset",
                    "categories": [
                        "level1"
                    ]
                },
                "id": "p1"
            },
            {
                "data": {
                    "type": "part",
                    "part_type": "Codec",
                    "categories": [
                        "level1"
                    ]
                },
                "id": "p2"
            },
            {
                "data": {
                    "type": "part",
                    "part_type": "Baseband processor",
                    "categories": [
                        "level1"
                    ]
                },
                "id": "p3"
            },
            {
                "data": {
                    "type": "part",
                    "part_type": "Battery",
                    "categories": [
                        "level1"
                    ]
                },
                "id": "p4"
            },
            {
                "data": {
                    "type": "part",
                    "part_type": "Controller chip",
                    "categories": [
                        "level1"
                    ]
                },
                "id": "p5"
            },
            {
                "id": "m0",
                "data": {
                    "type": "manufacturer",
                    "name": "Bosch",
                    "country": "de",
                    "categories": [
                        "levellast"
                    ],
                    "score": 0.1
                }
            },
            {
                "id": "m1",
                "data": {
                    "type": "manufacturer",
                    "name": "Invensense",
                    "country": "us",
                    "categories": [
                        "levellast"
                    ],
                    "score": 0.2
                }
            },
            {
                "id": "m2",
                "data": {
                    "type": "manufacturer",
                    "name": "Cirrus Logic",
                    "country": "us",
                    "categories": [
                        "levellast"
                    ],
                    "score": 0.3
                }
            },
            {
                "id": "m3",
                "data": {
                    "type": "manufacturer",
                    "name": "Qualcomm",
                    "country": "us",
                    "categories": [
                        "levellast"
                    ],
                    "score": 0.4
                }
            },
            {
                "id": "m5",
                "data": {
                    "type": "manufacturer",
                    "name": "Huizhou Desay Battery",
                    "country": "cn",
                    "categories": [
                        "levellast"
                    ],
                    "score": 0.5
                }
            },
            {
                "id": "m10",
                "data": {
                    "type": "manufacturer",
                    "name": "PMC Sierra",
                    "country": "us",
                    "categories": [
                        "levellast"
                    ],
                    "score": 0.5
                }
            },
            {
                "id": "m11",
                "data": {
                    "type": "manufacturer",
                    "name": "PMC Sierra2",
                    "country": "us",
                    "categories": [
                        "levellast"
                    ],
                    "score": 0.9
                }
            }
        ],
        "edges": [{
                "source": 0,
                "target": "p0",
                "data": {
                    "type": "has_part"
                }
            },
            {
                "source": 0,
                "target": "p1",
                "data": {
                    "type": "has_part"
                }
            },
            {
                "source": 0,
                "target": "p2",
                "data": {
                    "type": "has_part"
                }
            },
            {
                "source": 0,
                "target": "p3",
                "data": {
                    "type": "has_part"
                }
            },
            {
                "source": 0,
                "target": "p4",
                "data": {
                    "type": "has_part"
                }
            },
            {
                "source": 0,
                "target": "p5",
                "data": {
                    "type": "has_part"
                }
            },
            {
                "source": 0,
                "target": "m11",
                "data": {
                    "type": "has_part"
                }
            },
            {
                "source": "p0",
                "target": "m0",
                "data": {
                    "type": "produced_by"
                }
            },
            {
                "source": "p0",
                "target": "m1",
                "data": {
                    "type": "produced_by"
                }
            },
            {
                "source": "p1",
                "target": "m2",
                "data": {
                    "type": "produced_by"
                }
            },
            {
                "source": "p2",
                "target": "m2",
                "data": {
                    "type": "produced_by"
                }
            },
            {
                "source": "p3",
                "target": "m3",
                "data": {
                    "type": "produced_by"
                }
            },
            {
                "source": "p4",
                "target": "m5",
                "data": {
                    "type": "produced_by"
                }
            },
            {
                "source": "p5",
                "target": "m0",
                "data": {
                    "type": "produced_by"
                }
            },
            {
                "source": "p5",
                "target": "m10",
                "data": {
                    "type": "produced_by"
                }
            }
        ]
    })
})



app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});