/**
 * 继承方法
 * 让作者继承个人的属性和方法
 * 同时扩展属性
 */
(function () {
    //创建一个人员类
    function Person(name) {
        this.name = name;
        this.setName = function (name) {
            this.name = name;
        }
    }


    //测试
    function Author(name, books) {
        Author.superClass.constructor.call(this, name);
        this.books = books;
        this.getBook = function () {
            return this.name + " " + this.books;
        }
    }


    extend(Author, Person);
    /**
     * 创建extend函数为了程序中所有的继承操作
     * subClass（子类）；superClass（父类）
     */
    function extend(subClass, superClass) {
        // 1,叫子类原型类属性等于父类的原型属性
        var F = function () {
        };

        F.prototype = superClass.prototype;
        //2,让子类继承F
        subClass.prototype = new F();

        subClass.prototype.constructor = subClass;


        //3.为子类增加superClass属性
        subClass.superClass = superClass.prototype;

    }


    var peter = new Author("peter", "时间简史");
    console.log(peter.getBook());
    // peter.setName("haha");
    console.log(peter);

})();
