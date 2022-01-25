import axios from 'axios'
import VueThis from '../main'
// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: process.env.VUE_APP_API_BASE_URL,
    // 请求超时时间
    timeout: 60 * 1000,
    withCredentials: false,
})
// 异常拦截处理器
const errorHandler = (error) => {
    if (error.response) {
        if (error.response.status === 403) {
            VueThis.$router.push('/error/403')
        }
        if (error.response.status === 500) {
            VueThis.$router.push('/error/500')
        }
        if (error.response.status === 401) {
            // 从 localstorage 获取 token
            const token = localStorage.getItem('access_token')
            if (token) {
                const token_type = localStorage.getItem('token_type')
                const refresh_token = localStorage.getItem('refresh_token')
                //清除本地token，并跳转登录
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                localStorage.removeItem('token_type')
            }
            VueThis.$router.push('/login')
        }
    }
    return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token')
    const tokenType = localStorage.getItem('token_type')
    // 如果 token 存在,让每个请求携带自定义 token
    if (token && tokenType) {
        config.headers['Authorization'] = tokenType + ' ' + token
    } else {
        //没有token，跳转登录
        //VueThis.$router.push('/login')
    }
    return config
}, errorHandler)

// 响应拦截器
request.interceptors.response.use((response) => {
    return response.data
}, errorHandler)
export default request
export {
    request as axios
}
