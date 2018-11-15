//这个遍历器最大的优点是可以识别大于0xFFFF的码点
for (let codePonit of 'foo') {
    console.log(codePonit);
}


var text = String.fromCodePoint(0x20BB7);
//for 循环会认为它包含两个字符（都不可打印）
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

for (let i of  text) {
    console.log(i);
}


// at
// es50对字符提供了charAt方法，返回字是字符串给定位置的字符，该字符不能识别码点大于0xFFFF的字符
console.log('abc'.charAt(0));
console.log('𠮷'.charAt(0));
// es7提供at 方法,识别码点大于0xFFFF的字符
// 'abc'.at(0);
// '𠮷'.at(0);


// normalize();
//将字符的不同表示方法同一为同样的样式
//     NFC,
//     NFD,
//     NFKC,
//     NFKD
'\u01D1'.normalize() === '\u0004F\u030C'.normalize();



// 4.7 includes,startWidth,endsWidth
// 用法
var s3='Hello world!';
console.log( s3.startsWith('Hello') );  //true
console.log( s3.endsWith("!") );   //true )
console.log( s3.includes("o") );   //true

// 这三个方法都支持第二个参数，表示开始搜索的位置,endWidth是针对前n个字符
console.log( s3.startsWith('world',6) );
console.log( s3.endsWith('Hello',5) );
console.log( s3.includes('Hello',6) );


// repeat
console.log("a".repeat(3));
console.log("a".repeat(2.9));
console.log("a".repeat(0));
console.log("a".repeat( NaN ));
// 先转化成数字
console.log( 'na'.repeat('na') );


// padStart(),padEnd()
// es7 略，头和尾补全字符串,省略第二个参数用空格补齐
// 'x'.padStart(5,'ab'); //'ababx'



//模板字符串，拼接字符串的地方不再用双加号
// 而是 ${},还可以嵌入函数，反引号Alt+96
$("#result").append(`
   there are <p>${basket.onSale}</p> 
`);

//如果需要引用模板字符串本身，可以像下面这样写
// 写法一
// let str='return '+'`Hello ${name}!`';
// let func=new Function('name',str);
// func('Jack')

//写法二
let str='name=>`Hello ${name}!`';
let func=eval.call(null,str);
func('Jack');