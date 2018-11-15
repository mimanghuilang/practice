/**
 * Created by Administrator on 2017/8/9.
 */
// Symbol.for()
var s1 = Symbol("foo");
var s2 = Symbol("foo");
console.log(s1 == s2);

// var s3 = Symbol("wang");
var s4 = Symbol.for("wang");
var s5 = Symbol.for("wang");
console.log(s4 == s5);

var s6 = Symbol.for("haha");
console.log(Symbol.keyFor(s6));

//内置的Symbol值
// Symbol.hasInstance
class MyClass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}
var o = new MyClass();
console.log(o instanceof Array);


// Symbol.isConcatSpreadable表示该对象使用Array.prototype.contact()时是否展开
let arr2 = [1, 2];
arr2[Symbol.isConcatSpreadable] = false;
console.log([4, 5].concat(arr2, "asdf"));


// Symbol.species属性指向一个方法，当执行str.match(myObject)时，如果属性存在，会调用它返回该方法的返回值
class MyMatcher {
    [Symbol.match](string) {
        return 'hello world'.indexOf(string);
    }
}
console.log('h'.match(new MyMatcher()));

// Symbol.replace属性指向一个方法，当对象被String.prototype.replace方法调用时会返回该方法的返回值
// 略

// Symbol.search属性指向一个方法
// 略

// Symbol.split
// 略


// Symbol.iterator
class Collection {
    *[Symbol.iterator]() {
        let i = 0;
        while (this[i] !== undefined) {
            yield this[i];
            console.log("hahaha");
            ++i;
        }
    }
}
let myCollection = new Collection();
myCollection[0] = 4;
myCollection[1] = 5;
for (let value of myCollection) {
    console.log(value)
}


// Symbol.toPrimitive 对象转为原始类型的值时会调用这个方法
let obj = {
    [Symbol.toPrimitive](hint){
        "use strict";
        switch (hint) {
            case "number":
                return 123;
            case "string":
                return "str";
            case "default":
                return "default";
            default:
                throw  new Error();
        }
    }
};
console.log(2 * obj);
console.log(3 + obj);
console.log(obj == 'default');
console.log(String(obj));

// Symbol.toStringTag
// 对象调用Object.prototype.toString方法时，如果这个属相存在，会调用


// Symbol.unscopables
// 对象的Symbol.unscopables属性指向一个对象
Array.prototype[Symbol.unscopables]
// {
//         copyWithin:true,
//         entries:true,
//         fill:true,
//         findIndex:true,
//         keys:true
// }
console.log(Object.keys(Array.prototype[Symbol.unscopables]));

class MyClass2 {
    foo() {
        return 1;
    }
}
var foo = function () {
    return 2;
};
with (MyClass2.prototype){
    console.log( foo() );
}

//有unscopables
class MyClass3{
    foo3(){
        return 1;
    };
    get[Symbol.unscopables](){
        return {foo:true};
    }
}
var foo3=function(){
    "use strict";
    return 2;

};
with (MyClass.prototype){
    console.log( foo3() );
}