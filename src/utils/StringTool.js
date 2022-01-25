import VueThis from "../main"
function showMessageTips (type,message) {
    VueThis.$message[type](message)
}
function showNotifyTips (type,title,message) {
    VueThis.$notification[type]({
        message: title,
        description:message,
    })
}
function checkStringNull(str){
    let isNull = true
    if (!(typeof(str) === "undefined")){
        //判断字符串是否为空串
        if ( str !== "" ){
            str = getHtmlText(str)
            //判断是否为空串
            isNull = !(str.length > 0)
        }
    }
    return isNull
}
function getHtmlText(str){
    let finalStr = ''
    if (str){
        //去掉html元素
        finalStr = str.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "")
        //去掉全部的空格
        finalStr =  finalStr.replace(/\s*/g,"")
        finalStr.trim()
    }
    return finalStr
}
export {
    showMessageTips,
    showNotifyTips,
    checkStringNull,
    getHtmlText
}
