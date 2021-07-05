// 合并接口
// 如果两个接口中同时声明了同名的非函数成员且它们的类型不同，则编译器会报错。
// interface Box {
//     height: number;
//     width: number;
// }
//
// interface Box {
//     scale: number;
// }
//
// let box: Box = {height: 5, width: 6, scale: 10};


// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。
// 同时需要注意，当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级。
// interface Cloner {
//     clone(animal: Animal): Animal;
// }
//
// interface Cloner {
//     clone(animal: Sheep): Sheep;
// }
//
// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
// }



// 合并命名空间
// 与接口相似，同名的命名空间也会合并其成员。
// namespace Animals {
//     export class Zebra { }
// }
//
// namespace Animals {
//     export interface Legged { numberOfLegs: number; }
//     export class Dog { }
// }

// 命名空间与类和函数和枚举类型合并
// 命名空间可以与其它类型的声明进行合并。 只要命名空间的定义符合将要合并类型的定义。合并结果包含两者的声明类型。
// TypeScript使用这个功能去实现一些JavaScript里的设计模式。
// 合并命名空间和类
// 合并结果是一个类并带有一个内部类。 你也可以使用命名空间为类增加一些静态属性。
// class Album {
//     label: Album.AlbumLabel;
// }
// namespace Album {
//     export class AlbumLabel { }
// }

// 命名空间扩展枚举型
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}

// 非法的合并
// TypeScript并非允许所有的合并。 目前，类不能与其它类或变量合并。 想要了解如何模仿类的合并

// 模块扩展
// observable.js
// export class Observable<T> {
//     // ... implementation left as an exercise for the reader ...
// }
//
// // map.js
// import { Observable } from "./observable";
// Observable.prototype.map = function (f) {
//     // ... another exercise for the reader
// }

// observable.ts stays the same
// map.ts
// import { Observable } from "./observable";
// declare module "./observable" {
//     interface Observable<T> {
//         map<U>(f: (x: T) => U): Observable<U>;
//     }
// }
// Observable.prototype.map = function (f) {
//     // ... another exercise for the reader
// }
//
//
// // consumer.ts
// import { Observable } from "./observable";
// import "./map";
// let o: Observable<number>;
// o.map(x => x.toFixed());

// 全局扩展
// observable.ts
// export class Observable<T> {
//     // ... still no implementation ...
// }
//
// declare global {
//     interface Array<T> {
//         toObservable(): Observable<T>;
//     }
// }
//
// Array.prototype.toObservable = function () {
//     // ...
// }