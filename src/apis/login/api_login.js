import request from '@/utils/request'
const userApi = {
    Login: {
        url:'/api/login',
        method:'post'
    },
}
export default userApi

export function login (parameter) {
    return request({
        url: userApi.Login.url,
        method: userApi.Login.method,
        data: parameter,
        transformRequest: [
            function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                ret = ret.substring(0, ret.lastIndexOf('&'))
                return ret
            }
        ],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

