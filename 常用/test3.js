var Book = (function () {
    var bookNum = 0;
    function checkBook(name) {

    }
    // 观察者
    return function (newId,newName,newPrice) {
        var name,price;
        function checkId(id) {

        }
        this.getName = function () {

        }
        this.getPrice= function () {

        }
        this.setName = function () {

        }
        this.id = newId;
        this.copy= function () {

        }
        bookNum++
        if(bookNum>100){
            throw new  Error('我们仅出版100本书')
        }
        this.setName(name);
        this.setPrice(price);
    }
})()
Book.prototype = {
    isJsBook:false,
    display:function () {

    }
}