module.exports = {
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 关闭eslint
    //去掉.js.map
    productionSourceMap: false,
    devServer:{
        proxy:{
            '/':{
                target:'http://localhost:9100/',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/':''
                }
            },
        }
    }
};

