//变换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x);
console.log(y);

//从函数返回多个值
function example() {
    return [1, 2, 3];
}
var [a, b, c]=example();
console.log(a);
console.log(b);
console.log(c);

//返回一个对象
function example2() {
    return {
        foo: 1,
        bar: 2
    }
}
var {foo, bar}=example2();
console.log(foo);
console.log(bar);


// //函数参数的定义,有序
function f1([x1, y1, z1]) {
    console.log(x1);
    console.log(y1);
    console.log(z1);
    return [x1, y1, z1];
}
f1([1, 2, 3]);

//无序
function f2({x2, y2, z2}) {
    console.log(x2);
    console.log(y2);
    console.log(z2);
    return {x2, y2, z2};
}
f2({x2: 1, y2: 2, z2: 3});


//提取JSON数据
var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let {id, status, data:number}=jsonData;
console.log(id, status, number);


//函数参数的默认值
// jQuery.ajax = function (url, {
//     async = true,
//     beforeSend = function () {
//     },
//     cache = true,
//     complete = function () {
//     },
//     global = true
// }) {
// }


// 遍历Map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + " is " + value);
}


//输入模块的指定方法
const {SourceMapConsumer, SourceNode}=require("source-map");