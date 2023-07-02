const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    path: undefined, // 开发模式不需要输出
    // 入口文件打包后的文件名
    filename: "static/js/bundle.js",
  },
  // 模式
  mode: "development",
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配所有以 .css 结尾的文件
        use: [
          // 执行顺序：从右到左，从下到上
          "style-loader", // 将 js 中 css 样式通过 <style> 标签插入到 head 中
          "css-loader", // 将 css 文件转换为 js 模块
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset",
        parser: {
          // 小于 20kb 的图片会被转换成 base64 编码
          // 大于 20kb 的图片会被单独打包成文件
          // 优点：减少 http 请求，缺点：打包后的文件体积会变大
          dataUrlCondition: {
            maxSize: 20 * 1024, // 2kb
          },
        },
        generator: {
          filename: "static/images/[name].[hash:6][ext][query]",
        },
      },
      // 处理字体图标资源
      {
        test: /\.(ttf|woff2?|mp3|mp4|avi|rmvb)$/,
        type: "asset/resource",
        generator: {
          filename: "static/medias/[name].[hash:6][ext][query]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/, // 排除 node_modules 目录
        loader: "babel-loader",
        options: {
          cacheDirectory: true, // 开启 baabel 缓存
          cacheCompression: false, // 关闭缓存文件压缩
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
      context: path.resolve(__dirname, "../src"),
      cache: true, // 开启缓存
      cacheLocation: path.resolve(
        // 配置缓存目录
        __dirname,
        "../node_modules/.cache/eslintcache"
      ),
    }),
    // html 自动引入
    new HtmlWebpackPlugin({
      // 新的 html 文件会基于 index.html 模板文件来创建
      // 特点：1.结构一致 2.自动引入打包后的资源文件
      template: "./public/index.html", // 模板文件
      filename: "index.html", // 打包后的文件名
      title: "webpack5", // html 文件的 title 标签
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
    host: "localhost",
    port: 9000,
    open: true,
    //   compress: true, // 开启 gzip 压缩
    client: {
      logging: "info",
      overlay: true, // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
      // 如果只想现实错误： errors=true, warnings=false
      // errors: true,
      // warnings: false,
      progress: true, // 编译进度
    },
  },
};
