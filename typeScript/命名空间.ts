// 命名空间
// namespace Validation {
//     export interface StringValidator {
//         isAcceptable(s: string): boolean;
//     }
//
//     const lettersRegexp = /^[A-Za-z]+$/;
//     const numberRegexp = /^[0-9]+$/;
//
//     export class LettersOnlyValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return lettersRegexp.test(s);
//         }
//     }
//
//     export class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }
// }
//
// // Some samples to try
// let strings = ["Hello", "98052", "101"];
//
// // Validators to use
// let validators: { [s: string]: Validation.StringValidator; } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();
//
// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
//     }
// }

// 多文件中的命名空间
// 略

// 别名
// 略

// 使用其它的JavaScript库
// 为了描述不是用TypeScript编写的类库的类型，我们需要声明类库导出的API。 由于大部分程序库只提供少数的顶级对象，命名空间是用来表示它们的一个好办法。
declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}

declare var d3: D3.Base;