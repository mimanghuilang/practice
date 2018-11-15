// var tmp = new Date();
// function f() {
//     console.log(tmp);
//     if (false) {
//         var tmp = 'hello world';
//     }
// }
//
// f();


//泄露全局变量
var s="hello";
for(var i=0;i<s.length;i++){
    console.log(s[i]);
}
console.log(i);

//es6的块级作用域
function f1(){
    let n=5;
    if(true){
        let n=10;
    }
    console.log(n);
}
f1();