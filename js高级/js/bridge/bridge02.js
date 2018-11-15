/**
 * 特权函数
 */
(function () {
    var p=function () {
        var  add=function (x,y) {
            //进行复杂的数学操作
            return x+y;
        };
        //这是一个信息全封闭的类
        //但是他内部进行复杂的业务操作
        //我建立一个特权函数，是指调用起来特别方便
        this.bridge=function () {
            return {
                bridgeAdd:function () {
                    //...执行前
                    console.log( add(3,3) );
                    //执行后
                }
            }
        }

    };

    var xixi=new p;
    var woqu=xixi.bridge();
    console.log( woqu.bridgeAdd() );


    //桥梁还可以把多个类进行桥接（链接）
    var class1=function (a,b) {
        this.a=a;
        this.b=b;
    };
    var class2=function (c) {
        this.c=c
    };
    var bridgeClass=function () {
        this.one=new class1(1,2);
        this.two=new class2(45);
    };
    var haha=new bridgeClass();
    console.log(haha);
    /**
     * 有人会问，这个理念不是门面模式吗？
     * 他的目的是在class1和class2能干独立的修改而门面模式的目的在于调用方便
     */
})();
