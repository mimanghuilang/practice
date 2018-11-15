/**
 * 用两个DAO来体现门面模式
 */
(function () {
    //人员类
    var PersonDao=new Interface("PersonDao",["getInfo","learn","marry"])
    var Person=function () {
        this.name="鸡王";
        this.address="北京";
        this.getInfo=function () {
            return "名字： "+this.name+"；地址："+this.address;
        };
        this.learn=function () {
          document.write("学习");
        };
        this.marry=function () {

        };
        Interface.ensureTmplements(this,PersonDao);
    };
    //DOG　DAO
    var DogDao=new Interface("DogDao",["call","run","getInfo"]);
    var Dog=function () {
        this.name="大黄";
        this.getInfo=function(){
          return "狗狗的名字："+this.name;
        };
        this.run=function () {

        };
        Interface.ensureTmplements(this,DogDao);

    }
    //需求是现在需要给狗办理证件，需要人和狗的信息
    function action(person,dog){
        //当做养狗证的号码
        var r="GG"+new Date().getDate()+Math.floor(Math.random()*11);
        var str="办证成功：编号"+r
        +"<br/>主人信息："+person.getInfo()
        +"<br/>狗狗的信息"+dog.getInfo();
        document.write(str);
    }
    action(new Person(),new Dog())
})();