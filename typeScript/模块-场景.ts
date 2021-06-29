// 有时候，你只想在某种条件下才加载某个模块。
// 编译器会检测是否每个模块都会在生成的JavaScript中用到。 如果一个模块标识符只在类型注解部分使用，并且完全没有在表达式中使用时，就不会生成 require这个模块的代码。
// 省略掉没有用到的引用对性能提升是很有益的，并同时提供了选择性加载模块的能力。

// 动态模块加载
// 示例：Node.js里的动态模块加载
// const needZipValidation = true;
// declare function require(moduleName: string): any;
//
// import { ZipCodeValidator as Zip } from "./模块-导出2";
// const needZipValidation = true;
//
// if (needZipValidation) {
//     let ZipCodeValidator: typeof Zip = require("./模块-导出2");
//     let validator = new ZipCodeValidator();
//     if (validator.isAcceptable("...")) { /* ... */ }
// }


// 示例：require.js里的动态模块加载
// const needZipValidation = true;
// declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;
// import * as Zip from "./模块-导出2";
//
// if (needZipValidation) {
//     require(["./模块-导出2"], (ZipCodeValidator: typeof Zip) => {
//         let validator = new ZipCodeValidator.ZipCodeValidator();
//         if (validator.isAcceptable("...")) { /* ... */ }
//     });
// }

// 示例：System.js里的动态模块加载
// declare const System: any;
// const needZipValidation = true;
// import { ZipCodeValidator as Zip } from "./模块-导出2";
//
// if (needZipValidation) {
//     System.import("./模块-导出2").then((ZipCodeValidator: typeof Zip) => {
//         var x = new ZipCodeValidator();
//         if (x.isAcceptable("...")) { /* ... */ }
//     });
// }