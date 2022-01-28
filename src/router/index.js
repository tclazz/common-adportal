import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {isIE} from '@/utils/tool.js'
import {
    loginRouter,
    indexRouter
} from './otherRouters'

Vue.use(VueRouter)
// 配置NProgress进度条选项
NProgress.configure({ease: 'ease', speed: 500})
// 解决vue.$router.push重复推当前路由报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const defaultIcoUrl = "/favicon.ico"
const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    loginRouter,
    indexRouter,
]

const router = new VueRouter({
    routes
})

router.beforeEach(function (to, from, next) {
    NProgress.start()
    if (!isIE()){
        dynamicSetFavicon(to.meta.favicon ? to.meta.favicon : defaultIcoUrl)
        document.title = to.meta.title ? to.meta.title : '通用后台管理系统'
        next()
    } else {
        window.location.href = '/notSupport.html'
    }
})

function dynamicSetFavicon(favicon) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = favicon
    document.getElementsByTagName('head')[0].appendChild(link)
}

router.afterEach(function (to, from) {
    NProgress.done()
    window.scrollTo(0, 0)
})
export default router

