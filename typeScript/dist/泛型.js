"use strict";
// 泛型
// function identity(arg: any): any {
//     return arg;
// }
// function identity<T>(arg: T): T {
//     return arg
// }
// let output1=identity<string>('myString');
// let output2=identity('myString');
// let output3:number=identity<number>(100);
// let output4:string=identity(200);
// 使用泛型变量
// 使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。
// 换句话说，你必须把这些参数当做是任意或所有类型。
// 我们想操作T类型的数组而不直接是T
// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);  // Array has a .length, so no more error
//     return arg;
// }
// 也可以
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);  // Array has a .length, so no more error
//     return arg;
// }
// 泛型类型
// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
// function identity<T>(arg: T): T {
//     return arg;
// }
// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
// let myIdentity: <T>(arg: T) => T = identity;
// 可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
// let myIdentity2: <U>(arg: U) => U = identity;
// 使用带有调用签名的对象字面量来定义泛型函数：
// let myIdentity3: {<T>(arg: T): T} = identity;
// 这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口
// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }
//
// function identity<T>(arg: T): T {
//     return arg;
// }
//
// let myIdentity: GenericIdentityFn = identity;
// 定义泛型函数
// 泛型函数
// function identity<T>(arg:T):T{
//     return arg;
// }
// let myIdentity:{<T>(arg:T):T}=identity;
// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);  // Array has a .length, so no more error
//     return arg;
// }
