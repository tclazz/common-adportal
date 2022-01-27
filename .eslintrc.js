module.exports = {
	"env": {
		"browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 10,
        "sourceType": "module",
        "parser":'babel-eslint'
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'space-before-function-paren': 0,
        "arrow-body-style": [0, "never"],
        /*"linebreak-style": [
            "error",
            "windows"
        ],*/
        // "semi": [
        //     "error",
        //     // 改成代码结尾不再加分号，加了分号报错，不加分号不报错
        //     "never"
        // ],
        // 0 相当于 off，表示关闭规则，相当于不再校验这条规则：变量定义了必须使用
        "no-unused-vars": 1,
        //禁止使用console
        "no-console": 0,
        //禁止使用alert confirm prompt
        "no-alert": 1,
        //禁止在条件中使用常量表达式 if(true) if(1)
        "no-constant-condition": 2,
        //switch中的case标签不能重复
        "no-duplicate-case": 2,
        //块语句中的内容不能为空
        "no-empty": 2,
        //禁止对null使用==或!=运算符
        "no-eq-null": 2,
        //禁止使用eval
        "no-eval": 1,
        //禁止给catch语句中的异常参数赋值
        "no-ex-assign": 2,
        //禁止行内备注
        "no-inline-comments": 1,
        //禁止无效的this，只能用在构造器，类，对象字面量
        "no-invalid-this": 1,
        //强制驼峰法命名
        "camelcase": 0,
        //this别名
        "consistent-this": [1, "that"],
        "multi-word-component-names":0
    }
}

