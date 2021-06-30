// 基础类型

// 布尔值
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let name1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name1 }. I'll be ${ age + 1 } years old next month.`;

// 数组
// TypeScript像JavaScript一样可以操作数组元素。
// 有两种方式可以定义数组。
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list: number[] = [1, 2, 3];
// 第二种方式是使用数组泛型，Array<元素类型>：
// let list: Array<number> = [1, 2, 3];

// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 比如，你可以定义一对值分别为 string和number类型的元组。
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error


// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let colorName: string = Color[2];

// Any
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型.
// any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查
// Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// Void
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时
function warnUser(): void {
    console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
// 默认情况下null和undefined是所有类型的子类型
// 就是说你可以把 null和undefined赋值给number类型的变量。
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
let u: undefined = undefined;
let n: null = null;

// Never
// never类型表示的是那些永不存在的值的类型
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}


// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error


// 类型断言
// 类型断言有两种形式。
// 其一是“尖括号”语法：
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// 另一个为as语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;