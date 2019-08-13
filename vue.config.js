module.exports = {
    devServer: {
        proxy: {
            '/apis': {
                target: 'http://192.168.0.104:5000', // 接口域名
                ws: true, // 是否跨域 
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/apis': '' // 重写
                }
            },
        }

    },
    lintOnSave: false //是否开启eslint 保存检测，有效值：true
}