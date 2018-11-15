/**
 * 门面模式
 * 作用
 * 简化类借口
 * 消除类和使用本类客户端的代码耦合
 * 构建一个简单的门面代码使得负载系统变得简单
 */
(function () {
    /**
     * 各种浏览器对于dom事件注册是不一样的（那么每一个浏览器我们全被看做一个子系统）
     * 程序员如果天天喝这些问题打交道的话那种店就偏离了原本的业务
     *
     */
    function addEvent(el,type,fn){
        if(window.addEventListener){
            el.addEventListener(type,fn,false);
        }
        else if(window.attachEvent){
            window.attachEvent("on"+type,fn);
        }
        else{
            el["on"+type]=fn;
        }
    }
    document.write("<a id='but1' href='#'>click</a>");
    var el=document.getElementById("but1");
    addEvent(el,"click",function () {
        alert("haha");
    })
})();