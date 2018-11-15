/**
 * 桥梁模式
 * 作用在于“将抽象与实现隔离开来”
 * 以便两则单独的变化
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
})();