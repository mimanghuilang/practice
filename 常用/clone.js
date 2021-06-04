// 关于JSON.parse(JSON.stringify(obj))实现深拷贝应该注意的坑
// 1、undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略
// 2、NaN、Infinity和-Infinity，则序列化的结果会变成null
// 3、其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。补充：如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；
// 4、对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会丢失。
// 5、有时间（转字符串）有正则转({})

// function cloneDeep(obj) {
//     if(obj&&typeof obj!=="object"){
//
//     }
//
//
// }
var haha = new Date()
console.log(Object.keys(haha))