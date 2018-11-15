const [a, b, c, d, e]='hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let {length:len}='hello';
console.log(len);


// 数值和布尔值的解构赋值,只要等号右边的不是对象会先转为对象
let {toString:s}=123;
console.log(s);

let {toString:s2}=true;
console.log(s2);

//出错,undefined 和null 无法转化为对象，所以会出报错
// let {prop:x}=undefined;
// let {prop:y}=null;
// console.log(x);
// console.log(y);

//函数参数的解构赋值,add的参数实际上不是一个数组，而是通过结构得到的变量x和y
function add([x, y]) {
    return x + y;
}
console.log(add([1, 2]));


var arr1 = [[1, 2], [3, 4]]
arr1 = arr1.map(([a1, b1]) => a1 + b1);
console.log(arr1);


function move({x2 = 0, y2 = 0}={}) {
    console.log(x2 + y2);
    return [x2, y2];
}
move({x2: 3, y2: 8});
move({x2: 3});

// 另外一种写法
function move2({x3, y3}={x3: 0, y3: 0}) {
    console.log(x3);
    console.log(y3);
    return [x3, y3]
}
move2({x3: 3, y3: 8});
move2({x3:3});