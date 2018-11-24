/**
 * 用function 来定义类
 */
(function () {
    function Shape(){
        var x=1;
        var y=2;
    }
    //使用new关键字实例化一个对象
    var aShap=new Shape();


    //在类的内部定义共有变量
    function Shape2(){
        this.x=1;
        this.y=2;
    }
    var bShap=new Shape2();
    console.log(bShap.x);
    
    //定义私有函数
    function Shape3 () {
        var draw=function (){
           //私有函数
        };
        //外界可以看到的共有函数
        this.draw2=function () {
            console.log("draw2");
        };
    };
    var c=new Shape3();
    c.draw2();


    //用javascript 模仿OOP编程
    function Shape4(ax,ay){
        var x=0;
        var y=0;
        var init=function () {
            x=ax;
            y=ay;
        };
        init();
        this.getX=function () {
            return x;
        }
    }
    var d=new Shape4(2,4);
    console.log(d.getX());
    
    
    //模仿ooP编程的构造函数，现在我们来写静态属性和方法
    //javascript 静态方法是做用到类身上的而非是对象
    function Person(){
        this.name="王本俊";
    }
    //静态变量
    Person.age=0;
    Person.showName=function(obj){
        console.log(obj.name);
    };
    Person.showName( new Person() )
    
    //简单类定义方法
    var a={};
    var array=[];
    a["name"]="本俊";
    console.log(a.name);
    
    
    
    
    

})();
