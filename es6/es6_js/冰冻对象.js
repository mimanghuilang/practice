const foo = Object.freeze({name: "hhaa"});
//不起作用
foo.age = "13";
console.log(foo);

//冻结对象的属性
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, value) => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    })
};

var foo2={student:{age:123}};
constantize(foo2);
foo2.student.name="haah";
console.log(foo2);