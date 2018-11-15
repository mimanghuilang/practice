// let 命令声明的变量只在let命令所在的代码块里有效
{
    let a = 10;
    var b = 20;
}
console.log(a);
// referenceError :a is not defined
console.log(b);