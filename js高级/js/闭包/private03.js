/**
 * 闭包实现封装
 */
(function () {
    function Person(name, age, email) {
        this.email = email;
        this.getName = function () {
            return this.name;
        };
        this.getAge = function () {
            return this.age;
        };
        this.setName = function (name) {
            this.name = name;
        };
        this.setAge = function (age) {
            if(age>0 && age<150){
                this.age=age;
            }
            else{
                throw new Error("年龄必须在0到150之间");
            }
        };
        this.init = function () {
            this.setName(name);
            this.setAge(age);
        };
        this.init();
    }
    var p=new Person("JIM",-1,"jiwang@qq.com")
})();