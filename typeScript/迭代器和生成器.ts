// for..of会遍历可迭代的对象，调用对象上的Symbol.iterator方法。
// 下面是在数组上使用 for..of的简单例子：
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}