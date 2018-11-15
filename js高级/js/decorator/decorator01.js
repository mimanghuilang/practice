/**
 * 装饰者模式
 */
(function () {
    /**
     * 汽车店的接口
     */
    var carShop=new Interface("carShop",["getPrice","assemble"])
    var myCarShop=function () {
        this.getPrice=function () {
            document.write(15000+"<br/>");
        };
        this.addemble=function () {
            document.write("汽车组装.....<br/>")
        };
        Interface.ensureTmplements(this,carShop);
    };
    var JIMCarShop=new myCarShop();
    JIMCarShop.getPrice();
    JIMCarShop.addemble();
    document.write("<br/>");

    /**
     * 新需求
     * 汽车还会有附属的产品，音响(K)，真皮沙发(M)，保险杠(N)
     * 每一个属性都会影响其价格
     * 你能想到什么方法
     */
    //改写接口
    var carShop2=new Interface("carShop2",["getPrice","assemble","addK","addM","addL"]);
    var myCarShop2=function () {
        var price=15000;
        this.getPrice=function () {
            document.write(price+"<br/>");
        };
        this.assemble=function () {
            document.write("汽车组装....<br/>");
        };
        this.addK=function () {
            price+=1000;

        };
        this.addM=function () {
            price+=1000;

        };
        this.addN=function () {
            price+=1000;

        };
        Interface.ensureTmplements(this,carShop2);
    };
    var JIMCarShop2=new myCarShop2();
    JIMCarShop2.addK();
    JIMCarShop2.addM();
    JIMCarShop2.addN();
    JIMCarShop2.getPrice();
    JIMCarShop2.assemble();
    document.write("........................<br/>");

    /**
     * 好像能成功，但是新的问题来了
     * 你把接口改了，但是我集成成本的借口的类不一定K,M,N
     * 难道我要修改所有实现接口的实现类吗
     * 
     */
    // 如果不改变接口，那我就增加子类
    var Carshop=new Interface("Carshop",["getPrice,assemble"]);
    var myCarShop=function () {
        this.getPrice=function () {
            document.write(15000+"<br/>");
        };
        this.addemble=function () {
            document.write("汽车组装.....<br/>")
        };
        Interface.ensureTmplements(this,Carshop);

    };
    var myCarShopK=function () {
        this.getPrice=function () {
            document.write(16000+"<br/>");
        };
        this.addemble=function () {
            document.write("汽车组装.....<br/>")
        };
        Interface.ensureTmplements(this,Carshop);
    };
    var myCarShopM=function () {
        this.getPrice=function () {
            document.write(16000+"<br/>");
        };
        this.addemble=function () {
            document.write("汽车组装.....<br/>")
        };
        Interface.ensureTmplements(this,Carshop);
    };
    var myCarShopN=function () {
        this.getPrice=function () {
            document.write(16000+"<br/>");
        };
        this.addemble=function () {
            document.write("汽车组装.....<br/>")
        };
        Interface.ensureTmplements(this,Carshop);
    };


    /**
     * 装饰可以为对象添加新的特性
     * 透明的把对象包装在具有相同的接口的新对象中
     */
})();