var Car = function () {

}
Car.prototype = {
    getPrice:function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed:function () {
        return new Error('抽象方法不能调用')
    }
}
var car  = new Car();
console.log(car.getPrice)