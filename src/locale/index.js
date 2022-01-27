import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCn from './lang/cn'
import enUS from './lang/en'
Vue.use(VueI18n)
const i18n = new VueI18n({
    // set locale
    locale: localStorage.getItem("lang") || 'cn',
    messages: {
        // 中文语言包
        cn: {
            ...zhCn
        },
        // 英文语言包
        en: {
            ...enUS
        }
    }
})

export default i18n
