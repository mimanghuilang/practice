// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
// interface LabelledValue {
//     label: string;
// }
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);


// 可选属性
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({color: "black"});


// 只读属性
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// readonly vs const
// 做为变量使用的话用 const，若做为属性则使用readonly。


// 额外的属性检查
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config: SquareConfig): any {
//     // ...
// }
// // let mySquare = createSquare({ colour: "red", width: 100 }); // error: 'colour' not expected in type 'SquareConfig'
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // 绕开检查，最简单的方法是使用类型断言

// 避开额外的属性检查方式2
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }
// function createSquare(config: SquareConfig): any {
//     // ...
// }
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);

// 函数类型
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }

// 可索引类型
// interface StringArray {
//     [index: number]: string;
// }
// let myArray: StringArray;
// myArray = ["Bob", "Fred"];
// let myStr: string = myArray[0];

//  name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：
// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // 可以，length是number类型
//     name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

// 你可以将索引签名设置为只读，这样就防止了给索引赋值：
// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[1] = "Mallory"; // error!


// 类类型
// 接口描述了类的公共部分，而不是公共和私有两部分。
// interface ClockInterface {
//     currentTime: Date;
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) {
//     }
// }




// 类静态部分与实例部分的区别
// 错误事例
// constructor存在于类的静态部分，所以不在检查的范围内。
// interface ClockConstructor {
//     new (hour: number, minute: number);
// }
//
// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

// 修改正确（直接操作类的静态部分）
// 为构造函数所用
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// // 为实例方法所用
// interface ClockInterface {
//     tick();
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }
//
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }
//
// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// 继承接口
// 和类一样，接口也可以相互继承。
// 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}
// 类型断言
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
// square.penWidth = 5.0;  // 会报错


// 混合类型
// 有时你会希望一个对象可以同时具有上面提到的多种类型。
// 一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image32”类型缺少“state”属性。
// class Image32 implements SelectableControl {
//     select() { }
// }

