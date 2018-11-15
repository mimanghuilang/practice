// 略
var a = 5;
var b = 10;
console.log(`${a}+${b}=${a + b}`);


//tag函数
function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);
    return "OK";
}
tag `Hello ${a + b} world ${a * b} `;


//下面有个更复杂的例子
var total = 30;
var msg = passthru `The total is ${total} (${total * 1.05} width tax )`;
function passthru(literals) {
    var result = "";
    var i = 0;
    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}
console.log(msg);


// String.raw();转化成字符串
console.log(String.raw`Hi\n${2+3}`);


console.log(String.raw({raw:'test'},0,1,2));
// 等同于
console.log( String.raw({raw:['t','e','s','t']},0,1,2) );