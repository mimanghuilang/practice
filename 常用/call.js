/**
 * 手写call
 * @param ctx
 * @returns {any}
 */
Function.prototype.myCall = function (ctx) {
    if(typeof this!=='function') throw TypeError();
    var args =[];
    var len = arguments.length;
    if(len>1){
        for (var i=1;i<len;i++){
            args.push(arguments[i])
        }
    }
    // console.log(args);
    var obj = ctx||window;
    obj.fn = this;
    var res = eval("obj.fn("+args+")");
    delete  obj.fn;
    return res;
}
var f1 = function (c,d) {
    // console.log(c,d);
    return this.a+this.b+c+d
}
var haha1 = f1.myCall({a:1,b:2},3,4)

/**
 * 手写apply
 * @param ctx
 * @param arr
 * @returns {*}
 */
Function.prototype.myApply = function (ctx,arr) {
    if(typeof this!=='function') throw TypeError();
    var obj = ctx||window;
    obj.fn = this;
    var res;
    if(!arr){
        res = obj.fn()
    }else{
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push("arr[" + i + "]")
        }
        res = eval("obj.fn(" + args + ")")
    }
    delete  obj.fn;
    return res;
}
var f2 = function (c,d) {
    return this.a+this.b+c+d
}
var haha = f1.myApply({a:1,b:2},[3,4])


/**
 * 手写bind
 * @param ctx
 * @returns {boolean|(function(): *)}
 */
Function.prototype.myBind = function (ctx) {
    if(typeof this!=='function'){return false}
    var self = this;
    var obj = ctx||this;
    var Noop = function () {}
    var args = [].slice.call(arguments,1);
    var outFun = function(){
        const bindArgs = [].slice.call(arguments);
        return self.apply(obj,args.concat(bindArgs))
    }
    if(this.prototype){
        Noop.prototype = this.prototype;
    }
    outFun.prototype = new Noop();
    return outFun;
}
var f3 = function (c,d) {
    return (this.a+this.b+c+d)
}
var haha3 = f3.myBind({a:1,b:2})()
console.log(haha3);


console.log('----new---')

/**
 * 手写new
 * @param fn
 * @param args
 * @returns {*}
 */
function myNew(fn,...args) {
    var obj = Object.create(fn.prototype);
    var res = fn.apply(obj,args);
    if((typeof res==='object'||typeof res==='function')&&res!==null){
        return res
    }else{
        return obj
    }
}
var Animal = function(name){
    this.name = name;
}
Animal.prototype.sayName = function(){
    console.log(this.name)
}

console.log(myNew(Animal,'cat'))
console.log(new Animal('dog'))

console.log("----instanceof---")
function myInstanceof(A,B) {
    var proto = A.__proto__;
    while (proto){
        if(proto===B.prototype){
            return true
        }else{
            proto = proto.__proto__
        }
    }
    if(proto===null){
        return  false
    }
}
var cat = new Animal('cat');
console.log(myInstanceof(cat,Animal))