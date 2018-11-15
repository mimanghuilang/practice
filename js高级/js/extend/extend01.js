/**
 * 继承
 */
(function () {
    //创建一个人员类
    function Person(name){
        this.name=name;
    }
    //创建一个教师类
    function Teacher(name,books){
        this.books=books;
    }

    //使得老师继承人类
    Teacher.prototype=new Person();
    Teacher.prototype.constructor=Teacher;
    Teacher.prototype.getBook=function () {
        return this.name+"  "+this.books;
    };
    var  tom=new Teacher("tom","时间简史");
    console.log(tom.__proto__);
    console.log(tom.getBook());

})();
