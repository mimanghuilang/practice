// 1,变量语句中，模式不能带圆括号,以下是错误例子
// var [(a)]=[1];
// var {x:(c)}={};
// var {o:({p:p})}={o:{p:2}}
// 2，函数变量中也属于变量声明，因此也不能带圆括号
// 错误列子
// function f([(z)]){
//     return z;
// }

// 可以使用圆括号的情况
// 赋值语句的非模式部分可以使用圆括号
[(b)]=[3];
({p:(d)}={});
[(parseInt.prop)]=[3];
console.log(b);
console.log(d);
console.log(parseInt.prop);
