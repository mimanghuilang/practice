function extend(subClass, superClass) {
    //1，叫子类原型类属性等于父类的原型属性
    //初始化一个中间空对象，为了转换注意类关系
    var F = function () {
    };
    F.prototype = superClass.prototype;
    //2,让子类集成F
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    //3,为子类添加属性superClasss
    subClass.superClass = superClass.prototype;
    //4，增加一个保险
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}


//定义一个接口类
var Interface = function (name, methods) {
    if (arguments.length != 2) {
        alert("Interface must have two parameters...")
    }
    this.name = name;//这个是接口的名字
    this.methods = [];//定义空数组来转载函数名
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
        alert("最少是两个参数");
        return false;
    }
    for (var i = 1; i < arguments.length; i++) {
        var inter = arguments[i];
        //如果是接口必须是Interface类型的
        if (inter.constructor != Interface) {
            throw new Error("if is Interface class must be Interface type");
        }
        //遍历函数集合并分析
        for (var j = 0; j < inter.methods.length; j++) {
            var method = inter.methods[j];
            //实现类中必须有方法名和接口中所有的方法名相同
            if (!object[method] || typeof object[method] != "function") {
                throw new Error("实现类并没有完全实现接口中的所有方法... ");
            }
        }

    }
};


/**
 *XHR工厂
 */
(function () {
    // Ajax操作接口
    var AjaxHandler = new Interface("AjaxHandler", ["request", "createXhrObject"]);
    //Ajax 简单实现类
    var SimpleHandler = function () {
    };
    SimpleHandler.prototype = {
        /**
         * method get/post
         * url 请求地址
         * callback 回调函数
         * postVars 传入参数
         */
        request: function (method, url, callback, postVars) {
            //1,得到xhr对象
            var xhr = this.createXhrObject();
            xhr.onreadystatechange = function () {
                //4代表的意思是交互完成
                if (xhr.readyState != 4) {
                    return;
                }
                else {
                    xhr.status == 200 ? callback.success(xhr.responseText, xhr.responseXML) : callback.faliure(xhr.status);
                }
            };
            //打开链接
            xhr.open(method,url,true);
            if(method!="POST"){
                postVars=null;
            }
            xhr.send(postVars);
        },


        createXhrObject:function () {
            var methods=[
                function () {return new XMLHttpRequest();},
                function () {return new ActiveXObject("Msxm12.XMLHTTP");},
                function () {return new ActiveXObject("Micrsoft.XMLHTTP");}
            ];
            //利用try catch制作一个智能循环体
            for(var i=0;i<methods.length;i++){
                try{
                    methods[i]()
                }
                catch (e){
                    continue;
                }
                //这句话非常重要，有这样才能确保我不用每次请求循环数组
                this.createXhrObject=methods[i];
                return methods[i]();
            }
            //如果全部都不对的话就显示报错
            throw new Error("error");
        }
    };
    var myHandler=new SimpleHandler();
    //校验
    Interface.ensureTmplements(myHandler,AjaxHandler);
    var callback={
        success:function (responseText) {
            console.log("OK")
        },
        faliure:function (status) {
            console.log("failure")
        }
    };
    myHandler.request("GET","test.json",callback);

})();