var [foo = true]=[];
console.log(foo);

var [foo2 = true]=[2];
console.log(foo2);

var [x=1]=[undefined];
console.log(x);

var [y=1]=[null];
console.log(y);