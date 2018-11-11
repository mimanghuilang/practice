// 布尔
let isDone: boolean = false;
// 数字
let decLiteral: number = 6;
// 字符串
let namestr: string = "xixi";
// 数组
let list: number[] = [1, 2, 3, 5];
let list2: Array<number> = [1, 2, 3, 4, 5];

// 元组 Tuple
let x: [string, number];
x = ["hello", 10];

// 当访问一个越界元素，会使用联合类型替代
x[3] = "world";
// console.log(x[5].toString());
// x[6]=true;  会报错，boolean not string nor not number


// 枚举
// 默认情况下是从0开始为元素编号，也可以手动指定成员的数值
enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}

let c: Color = Color.Blue;
console.log(Color);
console.log(c);

// Any,不知道变量是什么
// let notSure:any=4;
// notSure="maybe a string instead";
// notSure=false; // okay,definitely a boolean

//  任意类型的检查
let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.


// Void
function warnUser(): void {
    alert("this is my warning message");
}
// 声明一个void类型的变量没有什么用，因为只能赋值undefined或则null
let unusable: void = undefined;


// Null和Undefined
let u:undefined=undefined;
let n:null=null;
// 默认情况 null 和 undefined是所有类型的子类型
// 指定 --strictNullChecks null和undefined只能赋值给void和自己


// Never
// never是任何类型的子类型
function error(message:string):never {
    throw new Error(message)
}
// 推断的返回值类型未never
function fail() {
    return error("Something failed")
}
// fail();

// 返回never的函数必须存在无法到达的终点
// function infiniteLoop():never {
//     while (true){
//
//     }
// }


// 类型断言
let someValue:any="this is a string";
// 尖括号
// let strLength:number=(<string>someValue).length;
// as
let strLength:number=(someValue as string).length;
console.log(strLength);

// 关于let
// let 替换 var
