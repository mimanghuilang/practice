// interface Shape {
//     name: string;
//     width: number;
//     readonly height: number;  // 只读属性
//     color?: string; // 可选属性
// }
//
// function area(shape : Shape) {
//     let area = shape.width * shape.height;
//     return "I'm " + shape.name + " with area " + area + " cm squared";
// }
//
// console.log( area( {name: "rectangle", width: 30, height: 15} ) );
// console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );
// 只读属性
// interface Point {
//     readonly x:number;
//     readonly y:number;
// }
// let pn:Point = {x:10,y:10};
// pn.x= 5;
// 额外的属性检查
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any; // 跳过方法
// }
//
// function createSquare23(config: SquareConfig): { color: string; area: number } {
//     // ...
//     return;
// }
// let mySquare23 = createSquare23({ colour: "red", width: 100 });
// 或则类型断言
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// 函数类型
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source, subString) {
//     let result = source.search(subString);
//     return result > -1;
// }
// 可索引的类型
// 下面例子里，我们定义了StringArray接口，它具有索引签名。 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。
// interface StringArray {
//     [index: number]: string;
// }
// let myArray: StringArray;
// myArray = ["Bob", "Fred"];
// let myStr: string = myArray[0];
// TypeScript支持两种索引签名：字符串和数字。
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }
// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
// 字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配。 因为字符串索引声明了 obj.property和obj["property"]两种形式都可以。
// 下面的例子里， name的类型与字符串索引类型不匹配，
// interface NumberDictionary {
//  [index:string] : number; // index是字符串，对应位置上的值是number
//  length:number;           // 长度是数字
//  name:string // 错误，`name`的类型与索引类型返回值的类型不匹配
// }
// 最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：
// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!
// 类类型
// 实现接口
// 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
// interface ClockInterface {
//     currentTime:Date;
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }
// 你也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }
// 类静态部分与实例部分的区别
// 当你操作类和接口的时候，你要知道类是具有两个类型的：
// 静态部分的类型和实例的类型。
// 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：
// 这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
// interface ClockConstructor {
//     new(hour: number, minute: number);
// }
// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }
// 上面的解决方法
// 因此，我们应该直接操作类的静态部分。
// 看下面的例子，我们定义了两个接口， ClockConstructor为构造函数所用和ClockInterface为实例方法所用。
// 为了方便我们定义一个构造函数 createClock，它用传入的类型创建实例。
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
//
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
// interface Shape {
//     color: string;
// }
//
// interface Square extends Shape {
//     sideLength: number;
// }
//
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// 混合类型
// 先前我们提过，接口能够描述JavaScript里丰富的类型。
// 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
//
// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }
//
// let c2 = getCounter();
// c2(10);
// c2.reset();
// c2.interval = 5.0;
// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
// 当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。
// 这个子类除了继承至基类外与基类没有任何关系。 例：
// class Control {
//     private state: any;
// }
//
// interface SelectableControl extends Control {
//     select(): void;
// }
//
// class Button extends Control implements SelectableControl {
//     select() { }
// }
//
// class TextBox extends Control {
//     select() { }
// }
//
// // 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }
//
// class Location23 {
//
// }
//# sourceMappingURL=接口.js.map