// let 声明
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
console.log(sumMatrix([[1,2,3],[4,5,6]]));

// 解构
// 数组解构
// let input=[1,2];
// let [first,second]=input;

// let [first,...rest]=[1,2,3,4];
// console.log(first);
// console.log(rest);

// 对象解构
// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// };
// let { a, b } = o;

// ({ a, b } = { a: "baz", b: 101 });


// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;

// 属性重命名
// let { a: newName1, b: newName2 } = o;
// 补充要指示类型
// let {a, b}: {a: string, b: number} = o;

// 默认值，可以让你在属性为undefined时使用缺省值
// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//     let { a, b = 1001 } = wholeObject;
//     console.log(a);
//     console.log(b);
// }
// keepWholeObject({a:"121"});



// 函数声明(解构也能用于函数声明)
// type C = { a: string, b?: number }
// function f({ a, b }: C): void {
//     console.log(a)
// }
// f({a:"121"});

// 通常情况下更多的是指定默认值，解构默认值有些棘手。 首先，你需要在默认值之前设置其格式
// function f({ a, b } = { a: "", b: 0 }): void {
//     // ...
//     console.log(a);
//     console.log(b);
// }
// f(); // ok, default to { a: "", b: 0 }

// function f({ a, b = 0 } = { a: "" }): void {
//     // ...
// }
// f({ a: "yes" }); // ok, default b = 0
// f(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument


// 对象的展开还有其它一些意想不到的限制，展开一个对象实列时，会丢失其方法
// class C {
//     p = 12;
//     m() {
//     }
// }
// let c = new C();
// let clone = { ...c };
// clone.p; // ok
// clone.m(); // error!