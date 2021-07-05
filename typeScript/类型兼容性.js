// interface Named {
//     name: string;
// }
//
// class Person {
//     name: string;
// }
//
// let p: Named;
// // OK, because of structural typing(因为结构类型)
// p = new Person();
// TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性
// 这里要检查y是否能赋值给x，编译器检查x中的每个属性，看是否能在y中也找到对应属性。
// interface Named {
//     name: string;
// }
// let x: Named;
//
// let y = { name: 'Alice', location: 'Seattle' };
// x = y;
// function greet(n: Named) {
//     console.log('Hello, ' + n.name);
// }
// greet(y); // OK
// 比较两个函数
// 相对来讲，在比较原始类型和对象类型的时候是比较容易理解的，问题是如何判断两个函数是兼容的。
// 下面我们从两个简单的函数入手，它们仅是参数列表略有不同：
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;
// y = x; // OK
// x = y; // Error
// 函数参数双向协变
// 当比较函数参数类型时，只有当源函数参数能够赋值给目标函数或者反过来时才能赋值成功。
// 这是不稳定的，因为调用者可能传入了一个具有更精确类型信息的函数，但是调用这个传入的函数的时候却使用了不是那么精确的类型信息。
// 实际上，这极少会发生错误，并且能够实现很多JavaScript里的常见模式
// enum EventType { Mouse, Keyboard }
//
// interface Event { timestamp: number; }
// interface MouseEvent extends Event { x1: number; y1: number }
// interface KeyEvent extends Event { keyCode: number }
//
// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
//     /* ... */
// }
//
// // Unsound, but useful and common
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x1 + ',' + e.y1));
//
// // Undesirable alternatives in presence of soundness
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x1 + ',' + (<MouseEvent>e).y1));
// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x1 + ',' + e.y1)));
//
// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));
// 枚举
// 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如，
// enum Status { Ready, Waiting };
// enum Color { Red, Blue, Green };
//
// let status = Status.Ready;
// status = Color.Green;  // Error
// 类
// 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。
// 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
// class Animal {
//     feet: number;
//     constructor(name: string, numFeet: number) { }
// }
//
// class Size {
//     feet: number;
//     constructor(numFeet: number) { }
// }
//
// let a: Animal;
// let s: Size;
//
// a = s;  // OK
// s = a;  // OK
// 类的私有成员和受保护成员
// 类的私有成员和受保护成员会影响兼容性。
// 当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。
// 同样地，这条规则也适用于包含受保护成员实例的类型检查。 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。
// 泛型
// 因为TypeScript是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型。
// interface Empty<T> {
// }
// let x: Empty<number>;
// let y: Empty<string>;
//
// x = y;  // OK, because y matches structure of x
// interface NotEmpty<T> {
//     data: T;
// }
// let x: NotEmpty<number>;
// let y: NotEmpty<string>;
//
// x = y;  // Error, because x and y are not compatible
// 高级主题
// 子类型与赋值
// 在TypeScript里，有两种兼容性：子类型和赋值。
// 它们的不同点在于，赋值扩展了子类型兼容性，增加了一些规则，允许和any来回赋值，以及enum和对应数字值之间的来回赋值。
