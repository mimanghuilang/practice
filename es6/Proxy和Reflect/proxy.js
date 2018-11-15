/**
 * Created by Administrator on 2017/8/10.
 */
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, recevier) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, recevier);
    }

});
obj.count=1;
++obj.count;

// es6原生提供Proxy构造函数，用于生成Proxy实例
// var proxy=new Proxy(target,handler)
var proxy=new Proxy({},{
   get:function (target,property) {
       return 35;
   }
});

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);


var target={};
var handler={};
var proxy2=new Proxy(target,handler);
proxy2.a='b';
console.log(target.a);


var proxy3=new Proxy({},{
get:function (target,property) {
    return 35;
}
});

let obj3=Object.create(proxy3);
console.log(obj3.time);


//同一个拦截器可以拦截多个操作
var handler={
    get:function (target,name) {
        if(name==='prototype'){
            return Object.prototype;
        }
        else{
            return "helllo, "+name;
        }
    },
    apply:function (target,thisBinding,args) {
        return args[0];
    },
    construct:function (target,args) {
        return args[1];
    },
};
var fproxy=new Proxy(function (x,y) {
    return x+y;
},handler);
console.log(fproxy(1,2));
 // new fproxy(1,2) ;   //2 报错
console.log(fproxy.prototype);
console.log(fproxy.foo);


//Proxy 实例的方法
//get
var person={
    name:"张三"
};
var proxyPerson=new Proxy(person,{
    get:function (target,property) {
        if(property in target){
            return target[property];
        }
        else{
            throw new ReferenceError("Property \""+property+"\"does not exeist.");
        }
        
    }
});
console.log(proxyPerson.name);
// console.log(proxyPerson.age);

//get 方法可以继承
let proto=new Proxy({},{
   get(target,propertykey,receiver){
       "use strict";
       console.log("GET "+propertykey);
       return target[propertykey];
   }
});
let obj2=Object.create(proto);
console.log(obj2.xxx);


