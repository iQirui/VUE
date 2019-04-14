module.exports = {
    publicPath: "/",
    //outputDir:"dist" //构建输出目录
    //assetsDir:'assets',//静态资源目录
    // lineOnSave: false,//是否开启eslint保存检查
    devServer: {
        open: false,
        host: "localhost",
        port: 8888,
        https: false,
        hotOnly: false,
        proxy: {
            '/apis': {
                target: "http://www.thenewstep.cn/",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/apis': ''
                }
            },
            '/koas': {
                target: "http://localhost:8081/",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/koas': ''
                }
            }
        },
        before(app) {
            //app.get("/app/goo")
        }
    }
}