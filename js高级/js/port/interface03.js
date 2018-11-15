/**
 * 鸭式变形法
 * 如果对象具有接口定义的方法名字的同名的所有方法，那么就认为你就是实现了本接口
 */
(function () {
    //定义一个接口类
    var Interface = function (name, methods) {
        if (arguments.length != 2) {
            alert("Interface must have two parameters...")
        }
        //这个是接口的名字
        this.name = name;
        //定义空数组来转载函数名
        this.methods = [];
        for (var i = 0; i < methods.length; i++) {
            if (typeof  methods[i] != "string") {
                alert("method name must is String...")
            }
            else {
                this.methods.push(methods[i]);
            }

        }

    };
    //定义接口的一个静态方法来实现接口与实现类的检验
    Interface.ensureTmplements = function (object) {
        if (arguments.length < 2) {
            console.log("最少是两个参数");
            return false;
        }
        for (var i = 1; i < arguments.length; i++) {
            var inter = arguments[i];
            //如果是接口必须是Interface类型的
            if (inter.constructor != Interface) {
                throw new Error("if is Interface class must be Interface type");
            }
            //遍历函数集合并分析
            for(var j=0;j<inter.methods.length;j++){
                var method=inter.methods[j];
                //实现类中必须有方法名和接口中所有的方法名相同
                if(!object[method]||typeof object[method]!="function"){
                    throw new Error("实现类并没有完全实现接口中的所有方法... ");
                }
            }

        }
    };

    //应用
    //定义自己的接口
    var GridMananger=new Interface("GridMananger",["add","remove","list"]);
    var ForMananger=new Interface("Formananger",["save"]);

    function  commManager() {
        //先实现方法
        this.add=function () {
            console.log("ok");
        };
        this.remove=function(){

        };
        this.list=function () {

        };
        this.save=function () {

        };
        // 检验
        Interface.ensureTmplements(this,GridMananger,ForMananger);
    }

    var c=new commManager();
    c.add();
})();
