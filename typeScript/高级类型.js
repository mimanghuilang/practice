// 类型别名
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
//
// function getName(n: NameOrResolver): Name {
//     if (typeof n === "string") {
//         return n;
//     } else {
//         return n();
//     }
// }
//
// type Container<T> = {value:T};
// 我们也可以使用类型别名来在属性里引用自己
// type Tree<T> = {
//     value: T;
//     left: Tree<T>;
//     right: Tree<T>;
// }
// // 接口vs类型别名
// type Alias = { num: number }
// interface Interface {
//     num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;
// 交叉类型
// 交叉类型是将多个类型合并为一个类型。
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
// var n = jim.name;
// jim.log();
// 联合类型
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
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
// 类型保护与区分类型
// let pet = getSmallPet();
//
// // 每一个成员访问都会报错
// if (pet.swim) {
//     pet.swim();
// }
// else if (pet.fly) {
//     pet.fly();
// }
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
//
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
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(person, ['name']); // ok, string[]
console.log(strings);
//# sourceMappingURL=高级类型.js.map