let input:[number,number]  = [1,2];
let [first,second] = input;
console.log(first)
console.log(second)

function f([first,second]:[number,number]) {
    console.log(first);
    console.log(second);
}
f(input);

let a1,b1;
({a1,b1} = {a1:"baz",b1:"嘻嘻"})
console.log(a1);
console.log(b1);

let  obj={name2:123,age:14,sex:'男'}
let {name2,...others} = obj;
console.log(name2,others)


// 属性重命名
// let { name2: newName1, age: newAge1 } = obj;
// console.log(newName1,newAge1)
// 重命名同时，赋值
let {age:newAge2, sex:newSex2}: {age: number, sex: string} = obj;
console.log(newAge2,newSex2)

