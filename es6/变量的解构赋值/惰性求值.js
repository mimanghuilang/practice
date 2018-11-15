function f() {
    console.log('aaa');
}
let [x = f()]=[1];
console.log(x);
//以上代码因为能直接取到值，所以函数根本不会执行


// function f() {
//     console.log('aaa');
// }
// let [x = f()]=[undefined];
// console.log(x);
