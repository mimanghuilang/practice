// var 声明
// 1、不能赋值不同类型的值
// var hai ='hai'
// hai=234 // 报错
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
// let 声明
// 1、块作用域
// 2、不能重复声明
// const 声明
// 1、不能重新赋值
// 2、块级作用域
// 3、不能增加属性
// const kitty = {
//     name: "Aurora",
//     numLives: '123',
// }
// 解构
// 数组解构，对象解构
var input = [1, 2];
// let [first, second] = input; // 数组解构赋值
// let xixi,haha;
// [xixi,haha] = input;   // 数组解构赋值
// [first, second] = [second,first] // 交换变量
// -------
// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]
// -------
// let [, second, , fourth] = [1, 2, 3, 4];
// 对象解构
var obj = {
    a: "foo",
    b: 12,
    c: "bar"
};
var haha2, xixi2;
(_a = { haha2: "baz", xixi2: 101 }, haha2 = _a.haha2, xixi2 = _a.xixi2);
// let { a, ...passthrough } = obj;
// let {a, b}: {a: string, b: number} = obj;
// 函数声明
// type C = { a: string, b?: number }
// function f({ a, b }: C): void {
//     // ...
// }
// function f({ a, b = 0 } = { a: "" }): void {
//     // ...
// }
// f({ a: "yes" }); // ok, default b = 0
// 展开运算符,略
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
    };
    return C;
}());
// 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：
var c = new C();
var clone = __assign({}, c);
console.log(clone);
// clone.p; // ok
// clone.m(); // error!
