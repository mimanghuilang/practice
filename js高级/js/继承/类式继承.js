/**
 * 类式继承
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
 * 构造函数继承
 * 1、解决了上面的如果共用属性被修改会影响其它的子类的问题
 * 2、解决了不能实现多继承的问题
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
    this.age = 123
}
var instance2 = new SubClass2('haha')
console.log(instance2)
console.log(instance2 instanceof SubClass2);
console.log(instance2 instanceof SuperClass2);
console.log("-------------------------")

/**
 * 实例继承
 */
function SuperClass8(name){
    this.name= name
}
function SubClass8(){
    
}


console.log("---------实例----------------")

/**
 * 组合继承
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
 * 寄生式继承
 * 借用原型继承
 */
// 原型式继承
function inheritobject (obj) {
  function F () {}
  F.prototype = obj;
  return new F();
}
/**
 * 寄生式继承
 * @type {{name: string, alikeBook: string[]}}
 */
const book={
  name:'js book',
  alikeBook:['css book','html book']
}
function createBook (obj) {
  var o =  inheritobject(obj);
  o.getName = function () {
    console.log(name)
  }
  return o;
}

var xixi =createBook(book)
console.log(xixi);
console.log("-------------qw------------")

/**
 * 寄生组合式继承
 * 传递参数 subClass 子类
 * 传递参数 superClass 父类
 */
function inheritPrototype(subClass,superClass) {
    var p = inheritobject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype=p;
}
var Animal = function () {
  this.name = name || 'Animal';
  this.sleep = function () {
    console.log(`${this.name}正在睡觉`)
  }
}
Animal.prototype.eat=function (food) {
  console.log(`${this.name}正在吃${food}`)
}
var Cat = function (name) {
    Animal.call(this,name);
  this.age = 18;
}
inheritPrototype(Cat,Animal)
var haha = new Cat('cat');
console.log(haha)