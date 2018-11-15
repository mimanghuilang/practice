/**
 * Created by Administrator on 2017/8/9.
 */
//唯一标识
let s=Symbol();
console.log(typeof s);

var s1=Symbol("hhaa");
var s2=Symbol("xixi");
console.log(s1);
console.log(s2);


//Symbol值作为对象属性名时不能使用点运算，应该使用方括号，例如
var mySymbol=Symbol();
var a={};
a.mySymbol='Hello';
console.log( a[mySymbol] );
console.log( a['mySymbol']);


//正确的写法
let s3=Symbol();
// let obj456={
//     [s3]:function (a) {
//         console.log(a);
//     }
// };
// obj456[s3](123);

// 采用增强对象的写法
let obj456={
    [s3](a){
        "use strict";
        console.log(a);
    }
};
obj456[s3](123);


