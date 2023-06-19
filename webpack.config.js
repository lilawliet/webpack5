const path = require('path');

module.exports = {
    // 入口文件
    entry: './src/main.js',
    // 出口文件
    output: {
        path: path.resolve(__dirname, './dist'), // 绝对路径
        // 入口文件打包后的文件名
        filename: 'static/js/bundle.js',
        // 清除 dist 目录
        // 原理： 每次打包前先删除 dist 目录，再重新生成 dist 目录
        clean: true, 
    },
    // 模式
    mode: 'development',
    // 加载器
    module: {
        rules: [
            {
                test: /\.css$/, // 匹配所有以 .css 结尾的文件
                use: [ // 执行顺序：从右到左，从下到上
                    'style-loader', // 将 js 中 css 样式通过 <style> 标签插入到 head 中
                    'css-loader' // 将 css 文件转换为 js 模块
                ]
            },
            {
                test: /\.less$/i,
                use: [
                // compiles Less to CSS
                'style-loader',
                'css-loader',
                'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // 将 JS 字符串生成为 style 节点
                'style-loader',
                // 将 CSS 转化成 CommonJS 模块
                'css-loader',
                // 将 Sass 编译成 CSS
                'sass-loader',
                ],
            },
            {
              test: /\.styl$/,
              use: [
              'style-loader',
              'css-loader',
              "stylus-loader",
              ],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                type: 'asset',
                parser: {
                    // 小于 20kb 的图片会被转换成 base64 编码
                    // 大于 20kb 的图片会被单独打包成文件
                    // 优点：减少 http 请求，缺点：打包后的文件体积会变大
                  dataUrlCondition: {
                    maxSize: 20 * 1024 // 2kb
                  }
                },
                generator: {
                    filename: 'static/images/[name].[hash:6][ext][query]'
                }
            },
            // 处理字体图标资源
            {
                test: /\.(ttf|woff2?|mp3|mp4|avi|rmvb)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/medias/[name].[hash:6][ext][query]'
                }
            }
        ]
    },
    // 插件
    plugins: [
    ]
}