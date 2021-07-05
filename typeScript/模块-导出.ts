// 模块
// “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”，
// 这是为了与 ECMAScript 2015里的术语保持一致，(也就是说 module X { 相当于现在推荐的写法 namespace X {)。

// 导出声明
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// 导出语句
// 导出语句很便利，因为我们可能需要对导出的部分重命名，所以上面的例子可以这样改写
// class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }
// export { ZipCodeValidator };
// export { ZipCodeValidator as mainValidator };


// 重新导出
export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

// 导出原先的验证器但做了重命名
export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";


// 或者一个模块可以包裹多个模块，并把他们导出的内容联合在一起通过语法：export * from "module"
// export * from "./StringValidator"; // exports interface StringValidator
// export * from "./LettersOnlyValidator"; // exports class LettersOnlyValidator
// export * from "./ZipCodeValidator";  // exports class ZipCodeValidator


// 默认导出
// declare let $: JQuery;
// export default $;

// 或则
// const numberRegexp = /^[0-9]+$/;
// export default function (s: string) {
//     return s.length === 5 && numberRegexp.test(s);
// }

// export = 和 import = require()
// CommonJS和AMD的环境里都有一个exports变量，这个变量包含了一个模块的所有导出内容。
// CommonJS和AMD的exports都可以被赋值为一个对象, 这种情况下其作用就类似于 es6 语法里的默认导出，即 export default语法了。
// 虽然作用相似，但是 export default 语法并不能兼容CommonJS和AMD的exports。
// let numberRegexp = /^[0-9]+$/;
// class ZipCodeValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }
// export = ZipCodeValidator;


// import zip = require("./ZipCodeValidator");
// // Some samples to try
// let strings = ["Hello", "98052", "101"];
// // Validators to use
// let validator = new zip();
// // Show whether each string passed each validator
// strings.forEach(s => {
//     console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
// });


// 生成模块代码
// 根据编译时指定的模块目标参数，编译器会生成相应的供Node.js (CommonJS)，Require.js (AMD)，UMD，SystemJS或ECMAScript 2015 native modules (ES6)模块加载系统使用的代码。 想要了解生成代码中 define，require 和 register的意义，请参考相应模块加载器的文档。

// 动态模块加载
//  如果一个模块标识符只在类型注解部分使用，并且完全没有在表达式中使用时，就不会生成 require这个模块的代码。
// 示例：Node.js里的动态模块加载
// declare function require(moduleName: string): any;
// import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
// if (needZipValidation) {
//     let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
//     let validator = new ZipCodeValidator();
//     if (validator.isAcceptable("...")) { /* ... */ }
// }


// 例：require.js里的动态模块加载
// declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;
// import * as Zip from "./ZipCodeValidator";
// if (needZipValidation) {
//     require(["./ZipCodeValidator"], (ZipCodeValidator: typeof Zip) => {
//         let validator = new ZipCodeValidator.ZipCodeValidator();
//         if (validator.isAcceptable("...")) { /* ... */ }
//     });
// }

// 示例：System.js里的动态模块加载
// declare const System: any;
// import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
// if (needZipValidation) {
//     System.import("./ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {
//         var x = new ZipCodeValidator();
//         if (x.isAcceptable("...")) { /* ... */ }
//     });
// }

// 使用其它的JavaScript库
// 我们叫它声明因为它不是“外部程序”的具体实现。 它们通常是在 .d.ts文件里定义的。 如果你熟悉C/C++，你可以把它们当做 .h文件。
// todo 略


// 创建模块结构指导
// 1、如果仅导出单个 class 或 function，使用 export default
// 2、如果要导出多个对象，把它们放在顶层里导出
// 3、明确地列出导入的名字
// 4、使用重新导出进行扩展
// 5、模块里不要使用命名空间
