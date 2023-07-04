## webpack5 查漏补缺

### Css 提取 MiniCssExtractPlugin
` npm i mini-css-extract-plugin -D `
- webpack.prod.js: MiniCssExtractPlugin.loader 代替 style-loader

### 样式兼容性处理
` npm i postcss-loader postcss postcss-preset-env -D `
- webpack.prod.js: 配置加在 css-loader 和其他（less/sass）loader之间
- package.json: browserslist 配置浏览器兼容版本

### 压缩图片
`npm i image-minimizer-webpack-plugin imagemin -D`

无损压缩
`npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D`

有损压缩
`npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D`
