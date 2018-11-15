let [x, y]=[1, 2, 3];
console.log(x);
console.log(y);


let [a, [b], d]=[1, [2, 3], 4];
console.log(a);
console.log(b);
console.log(d);

//报错
// let [foo]=1;
// let [foo]=false;
// let [foo]=NaN;
// let [foo]=undefined;
// let [foo]=null;
// let [foo]={};

// 对于set解构，也可以使用数组的解构赋值
let [x1, y1, z1]=new Set([1, 2, 3]);
console.log(x1);
console.log(y1);
console.log(z1);

//fibs是一个Generator函数，原生具有iterator接口
function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }

}
var [first, second, third, fourth, fifth, sixth]=fibs();
console.log(sixth);