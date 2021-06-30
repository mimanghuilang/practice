// 派生类通常被称作 子类，基类通常被称作 超类
// 公共，私有与受保护的修饰符
// 举例
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
//
// let greeter = new Greeter("world");
// 类的继承
// Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字。 派生类通常被称作 子类，基类通常被称作 超类
// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();
// 更复杂的例子
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
//
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
//
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
//
// sam.move();
// tom.move(34);
// 公共，私有与受保护的修饰符
// 默认为 public
// class Animal {
//     public name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// 当成员被标记成 private时，它就不能在声明它的类的外部访问
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// class  chick extends Animal{
//     public food:string;
//     public eat(food:string){
//         console.log(`${this.name} eat ${this.food}`); // 会报错，'name' 是私有的.
//     }
//     constructor(theName:string,food:string){
//         super(theName)
//         this.food = food;
//     }
// }
// new Animal("Cat").name; // 错误: 'name' 是私有的.
// 理解 protected
// protected修饰符与 private修饰符的行为很相似
// 区别 protected成员在派生类中仍然可以访问
// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }
//
// class Employee extends Person {
//     private department: string;
//
//     constructor(name: string, department: string) {
//         super(name)
//         this.department = department;
//     }
//
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
//
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
// readonly 修饰符
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     modifyName(name:string){
//         this.name = name; // 错误，是不能修改的
//     }
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
// 参数属性
// 参数属性可以方便地让我们在一个地方定义并初始化一个成员。
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus;
}());
// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。
// let passcode = "secret passcode";
//
// class Employee {
//     private _fullName: string;
//
//     get fullName(): string {
//         return this._fullName;
//     }
//
//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
//
// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }
// 静态属性
// class Grid {
//     static origin = {x: 0, y: 0}; // 相当于Grid.origin
//     calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor (public scale: number) { }
// }
//
// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale
//
// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
// 抽象类
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
// 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
// 这是一个抽象类
// abstract class Department {
//     constructor(public name: string) {
//     }
//     printName(): void {
//         console.log('Department name: ' + this.name);
//     }
//     abstract printMeeting(): void; // 必须在派生类中实现
// }
// // 抽象类的扩展
// class AccountingDepartment extends Department {
//     constructor(public age:number) {
//         super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//     }
//
//     printMeeting(): void {
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }
//
//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }
//
// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(123); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.age;  // 错误: 属性在抽象类中不存在
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// 高级技巧
// 构造函数
// 我们写了 let greeter: Greeter，意思是 Greeter类的实例的类型是 Greete
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
//
// let greeter: Greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }
//
// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());
//
// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";
//
// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());
// 把类当做接口使用
// 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
