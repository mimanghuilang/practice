var a = 1;
var b = 2;
var c = 3;
console.log(a + "" + b + "" + c);


var [c, d, e]=[4, 5, 6];
console.log(c + "" + d + "" + e);

let [foo, [[bar], baz]]=[1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);


let [, , third]=["foo", "bar", "baz"];
console.log(third);

let [x, , y]=[1, 2, 3];
console.log(x);
console.log(y);


let [head, ...tail]=[1, 2, 3, 4];
console.log(head);
console.log(tail);


//解构不成功变量的值就等于undefined
let [x1,y1,...z1]=['a'];
console.log(x1);
console.log(y1);
console.log(z1);

