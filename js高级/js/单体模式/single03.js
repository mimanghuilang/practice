/**
 * 单例模式在js中使用非常频繁
 * 通过确保单例对象只存在一个实例
 * 你就可以确信自己在所有的代码中使用的是全局资源
 */
(function () {
    //惰性单体
    //模拟一个Ajax操作
    function Ajax() {

    }

    Ajax.request = function (url, fn) {
        if (true) {
            fn("USPCAT.COM", "EXTJS4");
        }
    };

    var UserInfo = (function () {
        var userInfo = "";  //私有变量
        function init() {
            var name = "";
            var code = "";
            Ajax.request("WWW.USPCAT.COM", function (m, c) {
                name = m;
                code = c;
            });
            return {
                name: name,
                code: code
            }
        }

        return {
            getInstace: function () {
                if (userInfo) {
                    return userInfo
                }
                else {
                    userInfo = init();
                    return userInfo;
                }
            }
        }
    })();
    //实验
    console.log(UserInfo.getInstace().name)

})();