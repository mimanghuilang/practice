// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
// 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
// function f() {
//     console.log("f(): evaluated");
//     console.log(this,'f')
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log(this,'fcalled')
//         console.log("f(): called");
//     }
// }
//
// function g() {
//     console.log("g(): evaluated");
//     console.log(this,'g')
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log(this,'gcalled')
//         console.log("g(): called");
//     }
// }
//
// class C1 {
//     @f()
//     @g()
//     method() {
//         console.log('method')
//     }
// }
// var c123 = new C1();
// console.log('-------------------------------')
// console.log(c123.method())
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @sealed被执行的时候，它将密封此类的构造函数和原型
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());
