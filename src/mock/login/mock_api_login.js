import Mock from 'mockjs'
import userApi from '@/apis/login/api_login'

const mock_api_login = (options) => {
    console.log("请求参数："+JSON.stringify(options))
    return Mock.mock({
        access_token: '@guid',
        refresh_token: '@guid',
        token_type:'password'
    })
}


Mock.mock(userApi.Login.url, userApi.Login.method, mock_api_login)
