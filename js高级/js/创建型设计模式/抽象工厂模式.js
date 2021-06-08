// 抽象工厂模式
var VtrFactory = function (subType,superType) {
    if(typeof VtrFactory[superType]==="function"){
        function F() {}
        F.prototype = new VtrFactory[superType]();
        subType.prototype = new F()
        subType.prototype.constructor = superType
    }else{
        throw new Error("未创建该抽象类")
    }
}

VtrFactory.car = function () {
    this.type = 'car'
}
VtrFactory.car.prototype = {
    getPrice:function () {
        return new Error("抽象方法不能调用")
    },
    getSpeed:function () {
      return new Error("抽象方法不能调用")
    }
}
VtrFactory.Bus = function () {
    this.type='bus'
}
VtrFactory.Bus.prototype ={
    getPrice:function () {
        return new Error("抽象方法不能调用")
    },
    getSpeed:function () {
        return new Error("抽象方法不能调用")
    }
}

var ChangAn = function (price,speed) {
    this.price = price;
    this.speed = speed;
}
VtrFactory(ChangAn,'car')
ChangAn.prototype.getPrice = function () {
    return this.price;
}
ChangAn.prototype.getSpeed = function () {
    return this.speed;
}
var xiaomingche = new ChangAn('5万',110)
console.log(xiaomingche);
console.log(xiaomingche.getPrice())
console.log(xiaomingche.getSpeed())