// 导入
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();

// 导入内容并重命名
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator2 = new ZCV();

// 将整个模块导入到一个变量，并通过它来访问模块的导出部分
import * as validator from "./ZipCodeValidator";
let myValidator3 = new validator.ZipCodeValidator();


// 具有副作用的导入模块
// 尽管不推荐这么做，一些模块会设置一些全局状态供其它模块使用。
// 这些模块可能没有任何的导出或用户根本就不关注它的导出。 使用下面的方法来导入这类模块：
import "./my-module.js";

// 默认导出导入
// 导出
// declare let $: JQuery;
// export default $;
// // 导入
// import $ from "JQuery";
// $("button.continue").html( "Next Step..." );