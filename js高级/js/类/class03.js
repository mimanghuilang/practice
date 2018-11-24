/**
 * 类下
 * js原型模式
 * prototype
 * 定义：原型是一个对象，其他对象可以通过它实现属性的继承
 */
(function () {
    /**
     * javascript中的原型（prototype）是和函数（function紧密连接的）
     * var o={}他不是function ,他有原型吗
     * 答：有
     * 每一个通过函数和new操作符生成出来的prototype的对象都持有一个属性__prototype__;
     * 这个属性保存了创建他的构造函数的prototype的原型的引用
     */
    function Person() {
    } //定义一个空对象
    Person.prototype.name = "王本俊";
    Person.prototype.showName = function () {
        //这个this表示调用本函数的一个具体实例话的类
        console.log(this.name);
    };
    new Person().showName();


    var cat = {}; //cat类，没有prototype
    //默认隐藏的调用下面的代码
    Object.getPrototypeOf(cat).name = "小猫咪";
    cat.__proto__.master = "黑猫警长";
    cat.age = "2";
    console.log(cat.name);
    console.log(cat.master);
    console.log(cat.age);


    /**
     * 利用原型实现简单的继承
     *
     */
    function per() {
        this.getName = function (str) {
            console.log(str);
        };
    }

    per.prototype.getAge = function (age) {
        console.log(age);
        return null;
    };
    var a = {}; //空类
    a.__proto__ = per.prototype;
    console.log(a.getAge(2));


    /**
     * 简单的方式实现继承
     * js中是无法实现多继承的
     */
    var b={};
    b.__proto__=new per();
    b.__proto__.constructor=b;
    console.log(b.getName("b"));




    /**
     * 串联继承
     */
    function m() {
        this.showM=function () {
            return "im is m";
        }
    }
    function n() {
        this.showN=function () {
            return "im is n"
        }
    }
    function k() {

    }
    n.prototype=new m();
    n.prototype.constructor=n;

    k.prototype=new n();
    k.prototype.constructor=k;

    var boo=new k();
    console.log(boo.showM());
    console.log(boo.showN())


})();