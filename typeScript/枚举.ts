// 枚举
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }

// 枚举使用
// enum Response2 {
//     No = 0,
//     Yes = 1,
// }
// function respond(recipient: string, message: Response2): void {
//     // ...
// }
// respond("Princess Caroline", Response2.Yes)


// 错误举例
// function getSomeValue() {
//     return 1
// }
// enum E {
//     A = getSomeValue(),
//     B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }


// 字符串枚举
// enum Direction {
//     Up = "UP",
//     Down = "1",
//     Left = "LEFT",
//     Right = "RIGHT",
// }

// 异构枚举
// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES",
// }

// 计算的和常量成员
// enum FileAccess {
//     // constant members
//     None,
//     Read    = 1 << 1,   // 位运算符
//     Write   = 1 << 2,   // 位运算
//     ReadWrite  = Read | Write, // OR，按位或处理两个长度相同的二进制数，两个相应的二进位中只要有一个为 1，该位的结果值为 1。
//     // computed member
//     G = "123".length
// }


// 联合枚举与枚举成员的类型
// enum ShapeKind {
//     Circle,
//     Square,
// }
//
// interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
// }
//
// interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
// }
//
// let c: Circle = {
//     kind: ShapeKind.Square,
//     //    ~~~~~~~~~~~~~~~~ Error!
//     radius: 100,
// }


// enum E {
//     Foo,
//     Bar,
// }
//
// function f(x: E) {
//     if (x !== E.Foo || x !== E.Bar) {
//         //             ~~~~~~~~~~~
//         // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//     }
// }

// 运行时的枚举
// enum E {
//     X, Y, Z
// }
// function f(obj: { X: number }) {
//     return obj.X;
// }
//
// // Works, since 'E' has a property named 'X' which is a number.
// f(E);

// 反向映射
// enum Enum {
//     A
// }
// let a = Enum.A;
// let nameOfA = Enum[a]; // "A"


// const 枚举
// const enum Enum {
//     A = 1,
//     B = A * 2
// }
// console.log(Enum.A)

// 外部枚举(todo)
// declare enum Enum {
//     A = 1,
//     B,
//     C = 2
// }
// var a = Enum.A;

// declare function func(str: string): void;
//
// declare var ant:string