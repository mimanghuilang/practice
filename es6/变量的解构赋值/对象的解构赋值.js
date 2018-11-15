// var {foo,bar}={foo:"aaa",bar:"bbb"};
// console.log(foo);
// console.log(bar);

// var {bar, foo}={foo: "aaa", bar: "bbb"};
// console.log(foo);
// console.log(bar);


//变量名和属性名不一致
var {foo:baz}={foo:"aaa",bar:"bbb"};
console.log(baz)


//对象解构赋值的内部机制，是先找到同名属性
let obj={first:'hello',last:'world'};
let {first:f,last:l}=obj;
console.log(f);
console.log(l);
// console.log(first);
// console.log(last);


//错误示例
// let  third;
// let  {third}={third:1};
// console.log(third);

// let xixi;
let {haha2:xixi2}={xixi2:1};
console.log(haha2);




let a = 1;
let b = 2;
[a, b] = [b, a + b];
console.log(a);
console.log(b);
