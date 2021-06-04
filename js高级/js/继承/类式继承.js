/**
 * 1、原型链继承
 * 缺点
 * 1、父类的共有属性如果别修改，其它的继承的子类实例也会改变
 * 2、无法向父类传参
 * 3、无法实现多继承
 */
// 父类
function SuperClass1() {
    this.superValue = true;
}
SuperClass1.prototype.getSuperValue = function () {
    return this.superValue
}
// 子类
function SubClass1() {
    this.subValue = false
}
SubClass1.prototype = new SuperClass1();
SubClass1.prototype.getSubValue = function () {
    return this.subValue;
}
var sub = new SubClass1();
console.log(sub)
console.log(sub instanceof SubClass1)
console.log(sub instanceof SuperClass1)
console.log(sub instanceof Object)
console.log("-------------------------")


/**
 * 2、构造继承
 * 1、解决了上面的如果共用属性被修改会影响其它的子类的问题
 * 2、解决了无法向父类传参的问题
 * 3、可以实现多继承
 * 缺点：
 * 2、不能继承父类原型上的方法和属性
 */
// 声明父类
function SuperClass2(id) {
    this.books = ["javascript",'html','css']
    this.id = id;

}
SuperClass2.prototype.showBooks = function () {
    console.log(this.books);
}
function SubClass2(id) {
    SuperClass2.call(this,id)
}
var instance2 = new SubClass2('haha')
console.log(instance2)
console.log(instance2 instanceof SubClass2);
console.log(instance2 instanceof SuperClass2);
console.log("-------------------------")

/**
 * 实例继承
 * 优点：不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
 * 缺点：
 * 1、实例是父类的实例，不是子类的实例
 * 2、不支持多继承
 */
// function Cat(name){
//     var instance = new Animal();
//     instance.name = name || 'Tom';
//     return instance;
// }
//
// // Test Code
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal); // true
// console.log(cat instanceof Cat); // false

/**
 * 拷贝继承
 * 特点：支持多继承
 * 缺点：
 * 效率较低，内存占用高（因为要拷贝父类的属性）
 * 无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
 */
// function Cat(name){
//     var animal = new Animal();
//     for(var p in animal){
//         Cat.prototype[p] = animal[p];
//     }
//     // 2020年10月10日21点36分：感谢 @baclt 的指出，如下实现修改了原型对象，会导致单个实例修改name，会影响所有实例的name值
//     // Cat.prototype.name = name || 'Tom'; 错误的语句，下一句为正确的实现
//     this.name = name || 'Tom';
// }
//
// // Test Code
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal); // false
// console.log(cat instanceof Cat); // true

/**
 * 3、组合继承
 * 解决了可以继承原型上的属性和方法
 * 可以向父类传参
 * 修改的是自己的属性
 * 缺点：
 * 调用了两次父类构造函数
 */
function SuperClass3(name) {
    this.name = name;
    this.books = ["html","css","javascript"]
}
SuperClass3.prototype.getName = function () {
    console.log(this.name);
}
function SubClass3(name,time) {
    SuperClass3.call(this,name);
    this.time = time
}
SubClass3.prototype = new SuperClass3()
SubClass3.prototype.constructor = SubClass3;
SubClass3.prototype.getTime = function () {
    console.log(this.time)
}
var sub3 = new SubClass3('sub3',"2021/06/03")
console.log(sub3)
console.log(sub3 instanceof SubClass3)
console.log(sub3 instanceof SuperClass3)
console.log("-------------------------")








/**
 * 原型式继承
 * @param o
 * @returns {F}
 */
function inheritObject(o) {
    function F() {this.name = 1234}
    F.prototype = o;
    return new F()
}
var book4 = {
    name:'js book',
    alikeBook:["css book","html book"]
}
var newBook = inheritObject(book4)
console.log(newBook);
console.log("-------------------------")


/**
 * 寄生组合继承
 */
function SuperClass4(name) {
    this.name = name;
    this.books = ["html","css","javascript"]
}
SuperClass4.prototype.getName = function () {
    console.log(this.name);
}
function SubClass4(name,age) {
    SuperClass4.call(this,name)
    this.age = age;
}

(function () {
    var Super = function () {}
    Super.prototype = SuperClass4.prototype
    SubClass4.prototype = new Super();
})()
SubClass4.prototype.constructor = SubClass4


/**
 * 寄生式继承
 * 传递subclass子类
 * 传递superclass 父类
 */
// function inheritObject(o) {
//     function F() {this.name = 1234}
//     F.prototype = o;
//     return new F()
// }
function inheritPrototype(subclass,superclass) {
    var p = inheritObject(superclass.prototype)
    p.constructor = subclass;
    subclass.prototype = p;
}
function SuperClass9(name) {
    this.name = name;
    this.colors = ['red','blue','green']
}
SuperClass9.prototype.getName = function () {
    console.log(this.name)
}
// 单纯的继承实例
function SubClass9(name,time) {
    SuperClass9.call(this,name)
    this.time  = time
}
// 单纯的继承原型
inheritPrototype(SubClass9,SuperClass9);




