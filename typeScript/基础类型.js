// 布尔值
var isDonne = false;
// 数字
var deLiteral = 6;
var hexLiteral = 0Xf00d;
var binaryLiterral = 10;
var octalLiteral = 484;
// 字符串
var personName = 'bob';
personName = 'tom';
var haiStr = "I'm " + personName;
// 数组
// 第一种 在元素类型后面接上 []，表示由此类型元素组成的一个数组
var list1 = [1, 2, 3];
// 第二种 使用数组泛型，Array<元素类型>
var list2 = [1, 2, 3];
// 元组Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x = ['hello', 123];
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
console.log(Color);
// Any 任何类型
var notSure = 4;
console.log(notSure);
var list = [1, true, 'free'];
list[1] = 100;
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser() {
    console.log("this is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
var unusable = undefined;
// null 和 undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。
var u = undefined;
var n = null;
// never类型表示的是那些永不存在的值的类型。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error('something failed');
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
var someValue = 'this is a string';
var strLength = someValue.length;
// 另一个为as语法：
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
//# sourceMappingURL=基础类型.js.map