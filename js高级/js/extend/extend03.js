/**
 * 继承方法
 * 同时扩展属性
 */
(function () {
    //创建一个人员类
    function Person(name) {
        this.name = name;
        this.setName = function (name) {
            this.name = name;
        };
    }

    //创建一个教师类
    function Teacher(name, books) {
        //call方法可以将一个函数的对象的上下文从初始化变成有的this来决定
        //调用Person的构造函数，因为Person没有用new，所以他是个空对象
        Person.call(this, name);
        this.books = books;
    }

    //使得老师继承人类
    Teacher.prototype = new Person();
    Teacher.prototype.constructor = Teacher;
    Teacher.prototype.getBook = function () {
        return this.name + "  " + this.books;
    };

    Teacher.prototype.getBook = function () {
        return this.name + "  " + this.books;
    };
    var tom = new Teacher("tom", "时间简史");
    console.log(tom.__proto__);
    console.log(tom.getBook());
    tom.setName("haha");
    console.log(tom.name);

})();
