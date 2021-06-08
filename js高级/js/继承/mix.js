// 拓展
var extend = function (target={},source) {
    for(var keyStr in source){
        target[keyStr] =  source[keyStr]
    }
}
// 多继承
var mix = function () {
    var i =1;
    var len = arguments.length;
    target = arguments[0];
    for (i=0;i<len;i++){
        var arg = arguments[i];
        for(var property in arg){
            target[property]  = arg[property]
        }
    }
    return target
}

// 多态：就是同一个方法多种调用方式
function add(){
    var arg = arguments;
    var len = arg.length;
    switch (len) {
        case 0:
            return 10;
        case 1:
            return 10+arguments[0];
        case 2:
            return arguments[0]+arguments[1]
        default:
            break;
    }
}
function Add() {
    function zero() {
        return 10
    }
    function one(num) {
        return 10+num
    }
    function two(num1,num2) {
        return num1+num2
    }
    this.add = function () {
        var arg= arguments;
        var len = arg.length;
        switch (len) {
            case 0:
                return zero();
            case 1:
                return one(arg[0])
            case 2:
                return two(arg[0],arg[1])
        }
    }
}
var A = new Add()
A.add()
A.add(1)
A.add(1,5)
