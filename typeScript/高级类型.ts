// 高级类型
// 交叉类型是将多个类型合并为一个类型。
// 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
// 例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。
// 就是说这个类型的对象同时拥有了这三种类型的成员。

// function extend<T, U>(first: T, second: U): T & U {
//     let result = <T & U>{};
//     for (let id in first) {
//         (<any>result)[id] = (<any>first)[id];
//     }
//     for (let id in second) {
//         if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }
//     return result;
// }
//
// class Person {
//     constructor(public name: string) { }
// }
// interface Loggable {
//     log(): void;
// }
// class ConsoleLogger implements Loggable {
//     log() {
//         // ...
//     }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// console.log(jim);
// var n = jim.name;
// jim.log();

// 联合类型
// /**
//  * Takes a string and adds "padding" to the left.
//  * If 'padding' is a string, then 'padding' is appended to the left side.
//  * If 'padding' is a number, then that number of spaces is added to the left side.
//  */
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }
//
// padLeft("Hello world", 4); // returns "    Hello world"


// 类型保护和区分类型
// interface Bird {
//     fly();
//     layEggs();
// }
//
// interface Fish {
//     swim();
//     layEggs();
// }
// function getSmallPet(): Fish | Bird {
//     // ...
// }
// let pet = getSmallPet();
//
// // // 每一个成员访问都会报错
// // if (pet.swim) {
// //     pet.swim();
// // }
// // else if (pet.fly) {
// //     pet.fly();
// // }
// if ((<Fish>pet).swim) {
//     (<Fish>pet).swim();
// }
// else {
//     (<Bird>pet).fly();
// }

// 用户自定义的类型保护
// function isFish(pet: Fish | Bird): pet is Fish {
//     return (<Fish>pet).swim !== undefined;
// }
// // 'swim' 和 'fly' 调用都没有问题了
//
// if (isFish(pet)) {
//     pet.swim();
// }
// else {
//     pet.fly();
// }

// typeof 类型保护
// function isNumber(x: any): x is number {
//     return typeof x === "number";
// }
//
// function isString(x: any): x is string {
//     return typeof x === "string";
// }
//
// function padLeft(value: string, padding: string | number) {
//     if (isNumber(padding)) {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (isString(padding)) {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }

// instanceof类型保护
// interface Padder {
//     getPaddingString(): string
// }
//
// class SpaceRepeatingPadder implements Padder {
//     constructor(private numSpaces: number) { }
//     getPaddingString() {
//         return Array(this.numSpaces + 1).join(" ");
//     }
// }
//
// class StringPadder implements Padder {
//     constructor(private value: string) { }
//     getPaddingString() {
//         return this.value;
//     }
// }
//
// function getRandomPadder() {
//     return Math.random() < 0.5 ?
//         new SpaceRepeatingPadder(4) :
//         new StringPadder("  ");
// }
//
// // 类型为SpaceRepeatingPadder | StringPadder
// let padder: Padder = getRandomPadder();
//
// if (padder instanceof SpaceRepeatingPadder) {
//     padder; // 类型细化为'SpaceRepeatingPadder'
// }
// if (padder instanceof StringPadder) {
//     padder; // 类型细化为'StringPadder'
// }


// 可以为null的类型
// let s = "foo";
// s = null; // 错误, 'null'不能赋值给'string'
// let sn: string | null = "bar";
// sn = null; // 可以
// sn = undefined; // error, 'undefined'不能赋值给'string | null'


// 可选参数和可选属性
// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:
// function f(x: number, y?: number) {
//     return x + (y || 0);
// }
// f(1, 2);
// f(1);
// f(1, undefined);
// f(1, null); // error, 'null' is not assignable to 'number | undefined'

// 类型保护和类型断言
// function f(sn: string | null): string {
//     if (sn == null) {
//         return "default";
//     }
//     else {
//         return sn;
//     }
// }

// 如果编译器不能够去除 null或 undefined，
// 你可以使用类型断言手动去除。 语法是添加 !后缀： identifier!从 identifier的类型里去除了 null和 undefined：
// function broken(name: string | null): string {
//     function postfix(epithet: string) {
//         return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
//     }
//     name = name || "Bob";
//     return postfix("great");
// }
//
// function fixed(name: string | null): string {
//     function postfix(epithet: string) {
//         return name!.charAt(0) + '.  the ' + epithet; // ok
//     }
//     name = name || "Bob";
//     return postfix("great");
// }


// 类型别名
// 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//     if (typeof n === 'string') {
//         return n;
//     }
//     else {
//         return n();
//     }
// }

// 接口 vs. 类型别名

// 其一，接口创建了一个新的名字，可以在其它任何地方使用。
// 类型别名并不创建新名字—比如，错误信息就不会使用别名。
// 在下面的示例代码里，在编译器中将鼠标悬停在 interfaced上，显示它返回的是 Interface，但悬停在 aliased上时，显示的却是对象字面量类型。
// 另一个重要区别是类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）。
// 如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。
// type Alias = { num: number }
// interface Interface {
//     num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;

// 字符串字面量类型
// type Easing = "ease-in" | "ease-out" | "ease-in-out";
// class UIElement {
//     animate(dx: number, dy: number, easing: Easing) {
//         if (easing === "ease-in") {
//             // ...
//         }
//         else if (easing === "ease-out") {
//         }
//         else if (easing === "ease-in-out") {
//         }
//         else {
//             // error! should not pass null or undefined.
//         }
//     }
// }
//
// let button = new UIElement();
// button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

// 字符串字面量类型还可以用于区分函数重载
// function createElement(tagName: "img"): HTMLImageElement;
// function createElement(tagName: "input"): HTMLInputElement;
// // ... more overloads ...
// function createElement(tagName: string): Element {
//     // ... code goes here ...
// }

// 数字字面量类型
// function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
//     // ...
//     return
// }

// 枚举成员类型
// 略

// 可辨识联合
// interface Square {
//     kind: "square";
//     size: number;
// }
// interface Rectangle {
//     kind: "rectangle";
//     width: number;
//     height: number;
// }
// interface Circle {
//     kind: "circle";
//     radius: number;
// }
// type Shape = Square | Rectangle | Circle;
// function area(s: Shape) {
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//     }
// }


// 多态的this类型
// 多态的 this类型表示的是某个包含类或接口的 子类型。
// class BasicCalculator {
//     public constructor(protected value: number = 0) { }
//     public currentValue(): number {
//         return this.value;
//     }
//     public add(operand: number): this {
//         this.value += operand;
//         return this;
//     }
//     public multiply(operand: number): this {
//         this.value *= operand;
//         return this;
//     }
//     // ... other operations go here ...
// }
//
// let v = new BasicCalculator(2)
//     .multiply(5)
//     .add(1)
//     .currentValue();


// class ScientificCalculator extends BasicCalculator {
//     public constructor(value = 0) {
//         super(value);
//     }
//     public sin() {
//         this.value = Math.sin(this.value);
//         return this;
//     }
//     // ... other operations go here ...
// }
//
// let v = new ScientificCalculator(2)
//     .multiply(5)
//     .sin()
//     .add(1)
//     .currentValue();


// 索引类型
// 索引类型（Index types）
// 使用索引类型，编译器就能够检查使用了动态属性名的代码。 例如，一个常见的JavaScript模式是从对象中选取属性的子集。
// function pluck(o, names) {
//     return names.map(n => o[n]);
// }

// 下面是如何在TypeScript里使用此函数，通过 索引类型查询和 索引访问操作符：

// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//     return names.map(n => o[n]);
// }
//
// interface Person {
//     name: string;
//     age: number;
// }
// let person: Person = {
//     name: 'Jarid',
//     age: 35
// };
// let strings: string[] = pluck(person, ['name']); // ok, string[]


// 索引类型和字符串索引签名
// interface Map<T> {
//     [key: string]: T;
// }
// let keys: keyof Map<number>; // string
// let value: Map<number>['foo']; // number
// keys='foo';
// value = 132;

// 映射类型
// 一个常见的任务是将一个已知的类型每个属性都变为可选的
interface PersonPartial {
    name?: string;
    age?: number;
}
// 或者我们想要一个只读版本：
interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}

// 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。
// type Readonly2<T> = {
//     readonly [P in keyof T]: T[P];
// }
// type Partial2<T> = {
//     [P in keyof T]?: T[P];
// }
// type PersonPartial = Partial2<Person>;
// type ReadonlyPerson = Readonly2<Person>;