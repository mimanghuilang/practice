// 我们需要一种方法使返回值的类型与传入参数的类型是相同的。
// function identity<T>(arg: T): T {
//     console.log(arg)
//     return arg;
// }
// let output = identity<string>("myString");  // type of output will be 'string'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 使用泛型变量
// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);  // Array has a .length, so no more error
//     console.log(arg);
//     return arg;
// }
// loggingIdentity([1,2,3,'string'])
// 也可以写成
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);  // Array has a .length, so no more error
//     return arg;
// }
// 泛型类型
// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }
// function identity<T>(arg: T): T {
//     return arg;
// }
// let myIdentity: GenericIdentityFn<number> = identity;
// 泛型类
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };
// 泛型约束
// interface Lengthwise {
//     length: number;
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }
// 在泛型约束中使用类型参数
// https://blog.csdn.net/zhangda89/article/details/82263198?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162503494516780255295496%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162503494516780255295496&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-1-82263198.pc_search_result_control_group&utm_term=ts+%E5%9C%A8%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0&spm=1018.2226.3001.4187
// todo
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key]
// }
//
// let x = {a:1, b:2, c:3, d:4};
// getProperty(x, "a"); // 正常
// getProperty(x, "m"); // 异常
// 在泛型里使用类类型
// 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
function create(c) {
    return new c();
}
// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
