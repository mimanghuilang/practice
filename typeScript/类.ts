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
// let greeter2 = new Greeter("world");

// 继承
// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
//
// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// console.log(dog);
// dog.bark();
// dog.move(10);
// dog.bark();

// 公共，私有与受保护的修饰符
// class Animal {
//     public name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
//
// const cat = new Animal("Cat"); // 错误: 'name' 是私有的.
// console.log(cat.name)

// protected
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
//
// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
//
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
//
//
// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.

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


// 存取器
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
//     // 静态属性
//     static origin = {x: 0, y: 0};
//     // 计算距离
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
// console.log(grid1);
// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));


// 抽象类
// abstract class Animal {
//     abstract makeSound(): void;
//     move(): void {
//         console.log('roaming the earch...');
//     }
// }

// abstract class Department {
//
//     constructor(public name: string) {
//     }
//
//     printName(): void {
//         console.log('Department name: ' + this.name);
//     }
//
//     abstract printMeeting(): void; // 必须在派生类中实现
// }
//
// class AccountingDepartment extends Department {
//
//     constructor() {
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
// department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在


// class Student {
//     fullName: string;
//
//     // public 等同于创建了同名的成员变量
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
//
// interface Person {
//     firstName: string,
//     lastName: string,
// }
//
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
//
// let user2 = new Student("Jane", "M.", "User");
// document.body.innerHTML = greeter(user2);


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

//
// class Point {
//     x: number;
//     y: number;
// }
//
// interface Point3d extends Point {
//     z: number;
// }
//
// let point3d: Point3d = {x: 1, y: 2, z: 3};