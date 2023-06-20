/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/count.js
function count(x, y) {
  return x - y;
}
;// CONCATENATED MODULE: ./src/js/sum.js
function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.reduce((p, c) => p + c, 0);
}
;// CONCATENATED MODULE: ./src/main.js



// 想要 webpack 打包资源，必须引入






// var a = 1;  // eslint 报错
console.log(count(1, 2));
console.log(sum(1, 2, 3, 4));
/******/ })()
;