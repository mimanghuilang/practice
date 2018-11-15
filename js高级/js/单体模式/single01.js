/**
 * 单例模式在js中使用非常频繁
 * 通过确保单例对象只存在一个实例
 * 你就可以确信自己在所有的代码中使用的是全局资源
 */
(function () {
    //先看来一个最简单的单体
    //例如用户登录后的信息就可以用一个单体存储
    var UserInfo={
        name:"USPCAT.COM",
        deptName:"PD",
        deptCode:"PD001",
        getName:function () {
            return "YUNHSIDHI"
        }
    };
   console.log(UserInfo.getName());
    /**
     * 单体就是将一组相关的属性和方法组织到一起
     * 我们可以用.来访问
     */
    var comm={};
    comm.UserInfo={
        name:"本俊",
        age:"27"
    };
    comm.funcInfo={
        funcName:"",
        funcCode:""
    };
    //命名空间，协同开发
})();