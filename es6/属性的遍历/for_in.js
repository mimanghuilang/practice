/**
 * Created by Administrator on 2017/8/9.
 */
//for in 略

//Object.keys(obj)
var a={
    name:"鸡王",
    age:"26",
    sex:"男",
};
//返回一个数组，包含对象自身的（不含继承的）所有可枚举属性（不包含symmbol属性）
var arr1=Object.keys(a);
//返回一个数组，包含对象自身的所有属性（不包含symmbol属性）
var arr2=Object.getOwnPropertyNames(a);
//返回一个数组，包含对象自身的所有的symbol属性
var arr3=Object.getOwnPropertySymbols(a);
//返回一个数组，包含对象的所有属性
var arr4=Reflect.ownKeys(a);
// //返回一个Iterator对象，遍历对象所有可枚举属性不含symbol属性
// var arr5=Reflect.enumerate(a,function(){
//     "use strict";
//     console.log(arguments);
// });

//
var arr6=Reflect.ownKeys({[Symbol()]:0,b:0,10:0,2:0,a:0});
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
// console.log(arr5);
console.log(arr6);
