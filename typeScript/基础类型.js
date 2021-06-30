// 基础类型
// 布尔值
var isDone = false;
// 数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var name1 = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name1 + ". I'll be " + (age + 1) + " years old next month.";
// 数组
// TypeScript像JavaScript一样可以操作数组元素。
// 有两种方式可以定义数组。
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
var list = [1, 2, 3];
// 第二种方式是使用数组泛型，Array<元素类型>：
// let list: Array<number> = [1, 2, 3];
// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 比如，你可以定义一对值分别为 string和number类型的元组。
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
// Any
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型.
// any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查
// Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// Void
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时
function warnUser() {
    console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var unusable = undefined;
// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
// 默认情况下null和undefined是所有类型的子类型
// 就是说你可以把 null和undefined赋值给number类型的变量。
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
var u = undefined;
var n = null;
// Never
// never类型表示的是那些永不存在的值的类型
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
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
var someValue = "this is a string";
var strLength = someValue.length;
