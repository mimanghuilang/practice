//保证地址不变，不保证值不变
const foo = {};
foo.name = "王本俊";
console.log(foo);
//错误
// foo = {
//     name: "haha"
// };