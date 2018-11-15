(function () {
    //用命名规范来区别私有和公有的变量
    function Person(name,age,email){
        this._name;
        this._age;
        this.setName(name);
        this.setAge(age);
        this.email=email;
    }
    Person.prototype={
        setName:function (name) {
            this._name=name;
        },
        setAge:function (age) {
          if(age>0 && age<150){
              this._age=age;
          }
          else{
              throw new Error("年龄必须在0到150之间");
          }
        }
    };

    var a=new Person("鸡王",27,"jiwang@qq.com");
    console.log(a);
})();