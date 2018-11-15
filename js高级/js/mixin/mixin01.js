/**
 * 掺元类
 * 有的时候不需要严格的继承，我们真正需要的是一个类或者几个类中的一些函数
 *
 */
(function () {
    //  将要被聚合的函数
    var JSON = {};
    JSON.prototype = {
        toJsonString: function () {
            var outPut = [];
            for (var key in this) {
                outPut.push(key + "-->" + this[key])
            }
            return outPut;
        }
    };
    //制作聚合函数
    function mixin(recivingClass,givingClass) {
        for(methodName in givingClass.prototype){
            //本类中没有这个函数情况下我在聚合，否则跳过
            if(!recivingClass.prototype[methodName]){
                recivingClass.prototype[methodName]=givingClass.prototype[methodName]

            }
        }

    }
    var o=function () {
        this.name="yun";
        this.age=27;
    };

    mixin(o,JSON);
    var a=new o();
    console.log( a.toJsonString().join(",") );
})();