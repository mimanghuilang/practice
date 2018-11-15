console.log("\u0061");
//a
console.log("\uD842\uDFB7");
//吉
console.log("\u20BB7");
// 7
console.log("\u{20BB7}");
//吉

console.log("\u{41}\u{42}\u{43}");
// ABC

let hello=123;
// console.log(hell\u{6F}) //123

//大括号表示法与四字节的utf-16编码是等价的
console.log('\u{1F680}'==='\uD83D\uDE80');


// javascript 共有6种方法表示一个字符
// '\z'==='z';
// '\172'==='z';
// '\x7A'==='z';
// '\u007A'==='z';
// '\u{7A}'==='z';

// codePointAt()
var s="𠮷";
console.log( s.length );
console.log( s.charAt(0) );
console.log( s.charAt(1) );
console.log( s.charCodeAt(0) );
console.log( s.charCodeAt(1) );

// codePointAt能够镇区的处理4个字节储存的字符
var s2='𠮷a';
console.log( s2.codePointAt(0) );
console.log( s2.codePointAt(1) );
console.log( s2.charCodeAt(2) );

// codePointAt()方法返回的是码点的十进制，如果想要十六进制的可以用toString转化一下
var s3='𠮷a';
console.log('𠮷a');
console.log( s3.codePointAt(0).toString(16) );
console.log( s3.codePointAt(2).toString(16) );

var s4 = '𠮷a';
for(let ch of s4){
    console.log(ch.codePointAt(0).toString(16) );
}


// codePointAt方法是测试一个字符由两个字节还是4个字节组成的最简单的方法
function is32Bit(c) {
    return c.codePointAt(0)>0xFFFF;
}
console.log("is32Bit");
console.log( is32Bit("𠮷") );
console.log( is32Bit("a") );


//es5提供了fromCharCode方法不能识别大于0xFFFF的码点，不能识别utf-16字符
console.log("fromCharCode");
console.log( String.fromCharCode(0x20BB7) );
console.log( String.fromCodePoint(0x20BB7) );
//多个参数，会被合并炒年糕一个字符串返回
console.log( String.fromCodePoint(0x78,0x1f680,0x79)==='x\uD83D\uDE80y' );
// 注意：fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例上