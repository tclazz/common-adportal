if (process.env.NODE_ENV === 'development') {
    console.log('mock mounting');
    // 首先引入Mock
    const Mock = require('mockjs');
    //登录api
    require('./login/mock_api_login');

    // 设置拦截ajax请求的相应时间
    Mock.setup({
        timeout: '1'
    });
    console.log('mock mounted');
}
