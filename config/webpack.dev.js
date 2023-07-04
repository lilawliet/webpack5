<<<<<<< HEAD
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/main.js',
=======
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口文件
  entry: "./src/main.js",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
  // 出口文件
  output: {
    path: undefined, // 开发模式不需要输出
    // 入口文件打包后的文件名
<<<<<<< HEAD
    filename: 'static/js/bundle.js',
  },
  // 模式
  mode: 'development',
=======
    filename: "static/js/bundle.js",
  },
  // 模式
  mode: "development",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配所有以 .css 结尾的文件
        use: [
          // 执行顺序：从右到左，从下到上
<<<<<<< HEAD
          'style-loader', // 将 js 中 css 样式通过 <style> 标签插入到 head 中
          'css-loader', // 将 css 文件转换为 js 模块
=======
          "style-loader", // 将 js 中 css 样式通过 <style> 标签插入到 head 中
          "css-loader", // 将 css 文件转换为 js 模块
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
<<<<<<< HEAD
          'style-loader',
          'css-loader',
          'less-loader',
=======
          "style-loader",
          "css-loader",
          "less-loader",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
<<<<<<< HEAD
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
=======
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
        ],
      },
      {
        test: /\.styl$/,
<<<<<<< HEAD
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: 'asset',
=======
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
        parser: {
          // 小于 20kb 的图片会被转换成 base64 编码
          // 大于 20kb 的图片会被单独打包成文件
          // 优点：减少 http 请求，缺点：打包后的文件体积会变大
          dataUrlCondition: {
            maxSize: 20 * 1024, // 2kb
          },
        },
        generator: {
<<<<<<< HEAD
          filename: 'static/images/[name].[hash:6][ext][query]',
=======
          filename: "static/images/[name].[hash:6][ext][query]",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
        },
      },
      // 处理字体图标资源
      {
        test: /\.(ttf|woff2?|mp3|mp4|avi|rmvb)$/,
<<<<<<< HEAD
        type: 'asset/resource',
        generator: {
          filename: 'static/medias/[name].[hash:6][ext][query]',
=======
        type: "asset/resource",
        generator: {
          filename: "static/medias/[name].[hash:6][ext][query]",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/, // 排除 node_modules 目录
<<<<<<< HEAD
        loader: 'babel-loader',
        options: {
          // npm i @babel/plugin-transform-runtime @babel/runtime -D
          plugins: ['@babel/plugin-transform-runtime'], // 减少冗余代码
=======
        loader: "babel-loader",
        options: {
          cacheDirectory: true, // 开启 baabel 缓存
          cacheCompression: false, // 关闭缓存文件压缩
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
        },
        // use: {   // 另一种写法
        //     loader: 'babel-loader',
        //     options: {
        //         presets: ['@babel/preset-env']
        //     }
        // }
      },
    ],
  },
  // 插件
  plugins: [
    // eslint 插件
    new ESLintPlugin({
<<<<<<< HEAD
      context: path.resolve(__dirname, '../src'),
=======
      context: path.resolve(__dirname, "../src"),
      cache: true, // 开启缓存
      cacheLocation: path.resolve(
        // 配置缓存目录
        __dirname,
        "../node_modules/.cache/eslintcache"
      ),
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
    }),
    // html 自动引入
    new HtmlWebpackPlugin({
      // 新的 html 文件会基于 index.html 模板文件来创建
      // 特点：1.结构一致 2.自动引入打包后的资源文件
<<<<<<< HEAD
      template: './public/index.html', // 模板文件
      filename: 'index.html', // 打包后的文件名
      title: 'webpack5', // html 文件的 title 标签
=======
      template: "./public/index.html", // 模板文件
      filename: "index.html", // 打包后的文件名
      title: "webpack5", // html 文件的 title 标签
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
      minify: {
        // 压缩 html 文件
        collapseWhitespace: true, // 去除空格
        removeComments: true, // 去除注释
      },
    }),
  ],
  devServer: {
    //   static: {
    //     directory: path.join(__dirname, 'public'),
    //   },
<<<<<<< HEAD
    host: 'localhost',
=======
    host: "localhost",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
    port: 9000,
    open: true,
    //   compress: true, // 开启 gzip 压缩
    client: {
<<<<<<< HEAD
      logging: 'info',
=======
      logging: "info",
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
      overlay: true, // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
      // 如果只想现实错误： errors=true, warnings=false
      // errors: true,
      // warnings: false,
      progress: true, // 编译进度
    },
  },
<<<<<<< HEAD
}
=======
};
>>>>>>> cc944a664f40c8cb27b9c98da8085267819ca918
