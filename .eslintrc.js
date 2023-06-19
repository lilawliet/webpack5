module.exports = {
    // 继承 Eslint 规则
    extends: ['eslint:recommended'],
    env: {
        node: true, // 启用 node 环境全局变量
        browser: true, // 启用浏览器环境全局变量
    },
    parserOptions: {
        ecmaVersion: 12, // ECMAScript 版本
        sourceType: 'module', // 模块类型
        ecmaFeatures: {
            jsx: true, // 启用 JSX
        },
    },
    rules: {
        "no-var": "error", // 禁止使用 var
    },
};