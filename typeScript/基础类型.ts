// 布尔值
let isDonne:boolean = false;
// 数字
let deLiteral:number = 6;
let hexLiteral:number = 0Xf00d;
let binaryLiterral: number = 0b1010;
let octalLiteral: number = 0o744;
// 字符串
let personName: string = 'bob';
personName = 'tom';
let haiStr:string = `I'm ${personName}`;

// 数组
// 第一种 在元素类型后面接上 []，表示由此类型元素组成的一个数组
let list1:number [] = [1,2,3];
// 第二种 使用数组泛型，Array<元素类型>
let list2:Array<number> = [1,2,3];

// 元组Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x:[string,number] = ['hello',123];

// 枚举 enum
enum  Color {Red,Green,Blue}
let c:Color = Color.Red
console.log(c);
console.log(Color)

// Any 任何类型
let notSure:any = 4;
console.log(notSure);
let list:any[] = [1,true,'free'];
list [1] =100;


// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser() :void{
    console.log("this is my warning message")
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable :void = undefined;


// null 和 undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。
let u:undefined = undefined;
let n:null  = null;

// never类型表示的是那些永不存在的值的类型。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message:string):never {
    throw new Error(message)
}
// 推断的返回值类型为never
function fail() {
    return error('something failed')
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop():never{
    while (true){

    }
}

// object 表示非原始类型，也就是除 number,string,boolean,symbol,null或则undefined之外的类型
// 使用object类型,就可以更好的表示像 Object.create这样的API。例如:
declare function create(o:object|null):void;
create({prop:0})
create(null)

// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let someValue:any = 'this is a string';
let strLength:number=(<string>someValue).length;
// 另一个为as语法：
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;