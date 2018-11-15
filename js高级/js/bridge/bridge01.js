/**
 * 桥梁模式
 * 作用在于“将抽象与实现隔离开来”，以便两则单独的变化
 * 这种模式对于javascript中的常见的事件驱动编程有很大的好处
 */
(function () {
    //一个页面选择宠物的例子
    button.addEvent(element,"click",getPetByName);
    function getPetByName(e) {
        var id=this.id;
        sayncRquest("GET",'pet.action?id='+id,function (pet) {
            console.log("request pet"+ pet.responseText)
        })

    }

    /**
     * 这种做法是你在页面的一个按钮，点击的话会触发后面的请求
     * 如果你想着一个方法进行单元测试
     * 1，用户登录，2，知道你这个页面，3，单击你的按钮
     * 如果需要进行效能层次上的单元测试，那么久祝你好运吧
     */

    //第二种方法（用简单的桥梁模式来解决）
    function getPetByName(id,callBack) {
        sayncRquest("GET",'pet.action?id='+id,function (pet) {

        })
    }
    //定义一个桥梁使得抽象和实现相互联系在一起
    addEvent(element,"click",getPetByNameBridge);

    function getPetByNameBridge() {
        getPetByName(this.id,function (pet){
            console.log("request pet"+ pet.responseText)
        })
    }

    /**
     * 这种做法使API和展现完全分离
     * API和展现可以灵活的变动
     * 这个模式在Ext.js项目开发时非常的常用
     */
    //桥梁模式的其他用途
    //特权函数
    //当你的接口过于复杂的时候，把原本复杂接口用桥梁模式抽取出一大部分函数整合起来使客户端更加容易调用
})();