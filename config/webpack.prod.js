const os = require("os");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取 css 文件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // css 压缩

const TerserWebpackPlugin = require("terser-webpack-plugin"); // webpack 内置压缩插件

const threads = os.cpus().length; // 获取 cpu 核数

// 获取处理样式的功能
function getStyleLoader(pre) {
  return [
    // 执行顺序：从右到左，从下到上
    // 'style-loader', // 将 js 中 css 样式通过 <style> 标签插入到 head 中
    MiniCssExtractPlugin.loader, // 提取 css 文件, 代替 style-loader
    "css-loader", // 将 css 文件转换为 js 模块
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 解决大多数样式兼容性
          ],
        },
      },
    },
    pre,
  ].filter(Boolean);
}

module.exports = {
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    path: path.resolve(__dirname, "../dist"), // 绝对路径
    // 入口文件打包后的文件名
    filename: "static/js/bundle.js",
    // 清除 dist 目录
    // 原理： 每次打包前先删除 dist 目录，再重新生成 dist 目录
    clean: true,
  },
  // 模式
  mode: "production",
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配所有以 .css 结尾的文件
        use: getStyleLoader(),
      },
      {
        test: /\.less$/i,
        use: getStyleLoader("less-loader"),
      },
      {
        test: /\.s[ac]ss$/i,
        use: getStyleLoader("sass-loader"),
      },
      {
        test: /\.styl$/,
        use: getStyleLoader("stylus-loader"),
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
        // include: path.resolve(__dirname, "../src"),  // include 和 exclude 二选一
        // loader: "babel-loader",
        // options: {
        //   cacheDirectory: true, // 开启 baabel 缓存
        //   cacheCompression: false, // 关闭缓存文件压缩
        // },
        use: [
          {
            loader: "thread-loader", // 开启多精彩
            options: {
              works: threads, // 进程数量
            },
          },
          {
            // 另一种写法
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              cacheDirectory: true, // 开启 baabel 缓存
              cacheCompression: false, // 关闭缓存文件压缩
            },
          },
        ],
      },
    ],
  },
  // 插件
  plugins: [
    // eslint 插件
    new ESLintPlugin({
      context: path.resolve(__dirname, "./src"),
      exclude: "node_modules", // node_module 这是默认值，可以不设置
      cache: true, // 开启缓存
      cacheLocation: path.resolve(
        // 配置缓存目录
        __dirname,
        "../node_modules/.cache/eslintcache"
      ),
      threads, // 开启多进程
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
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[hash:6].css",
    }), // 提取 css 文件
  ],
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      // 压缩 css
      new CssMinimizerPlugin(),
      // 压缩 js
      new TerserWebpackPlugin({
        parallel: threads, // 开启多进程和设置数量
      }),
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
