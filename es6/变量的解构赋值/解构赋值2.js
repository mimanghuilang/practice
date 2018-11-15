//和数组一样，解构也可以用于嵌套结构的对象
let foo;
({foo} = {foo: 1});
console.log(foo);

let baz;
({bar: baz} = {bar: 1});
console.log(baz);

var obj={
    p:[
        "hello",
        {y:"world"}
    ]
};
var {p:[x,{y}]}=obj;
//注意这时p是模式不是变量，所以不会赋值
console.log(x);
console.log(y);


var node={
    loc:{
        start:{
            line:1,
            column:5
        }
    }
};
var {loc:{start:{line}}}=node;
console.log(line);

let obj2={};
let arr=[];
({foo:obj2.prop,bar:arr[0]}={foo:123,bar:true});
console.log(obj2);
console.log(arr);


//为对象的结构指定默认值
var {moren=3}={};
console.log(moren);

var {moren2,moren3=5}={moren2:2};
console.log(moren2);
console.log(moren3);


var {message:msg="Something went wrong"}={};
console.log(msg);

var {x1=3}={x1:undefined};
console.log(x1);

var {x2=3}={x2:null};
console.log(x2);


//错误写法，错误原因javascript引擎会将{x}理解成一个代码块，解决办法，大括号不放在行首
var x4;
// {x4}={x4:1};
//正确的写法
({x4}={x4:1});


let {log,sin,cos}=Math;