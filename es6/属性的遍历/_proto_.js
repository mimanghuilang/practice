/**
 * Created by Administrator on 2017/8/9.
 */
// es6
// var obj1={
//     method:function () {
//         console.log(123);
//     }
// };
// obj1._proto_=someOtherObj;
// console.log(obj1);

//es5
// var someOtherObj = {
//     name: "haha",
//     age: 12
// };
var obj2 = Object.create(Array);
obj2.method = function () {
    console.log("obj2");
};
console.log(obj2);

//建议不使用_proto_属性
//创建
// Object.create();
// 获取
// Object.getPrototypeOf();
// 设置
// // Object.setPrototypeOf()
