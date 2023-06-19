import count from './js/count';
import sum from './js/sum';

// 想要 webpack 打包资源，必须引入
import "./css/index.css";
import "./css/iconfont.css";
import "./less/index.less";
import "./scss/index.scss";
import "./stylus/index.styl";

// var a = 1;  // eslint 报错
console.log(count(1, 2));
console.log(sum(1, 2, 3, 4));