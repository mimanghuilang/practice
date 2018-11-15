// es5
var regex=new RegExp("xyz","i");
// 等价于
var regex=/xyz/i;


//es6
var regex=new RegExp(/xyz/i);
var regex=new RegExp(/abc/ig,"i").flags;    //i

// 字符串的正则方法
// match,replace,search,split

//u修饰符,用来正确处理大于\uFFFF的Unicode字符，也就是说可以处理四个字节的UTF-16编码
// es6,一个字符
console.log( /^\uD83D/u.test('\uD83D\uDC2A') );
// es5，两个字符
console.log( /^\uD83D/.test('\uD83D\uDC2A') );

// 点字符，不能识别unicode大于0xFFFF的Unicode字符
//不添加u会认为字符串为两个字符
var s="𠮷";
console.log( /^.$/.test(s) );
console.log( /^.$/u.test(s) );

//Unicode字符表示法
console.log("Unicode字符表示法");
console.log( /\u{61}/.test("a") );
console.log( /\u{61}/u.test('a') );
console.log( /\u{20BB7}/u.test("𠮷") );

//量词,可以识别大于0xFFFF的Unicode字符
console.log( /a{2}/.test("aa") );
console.log( /a{2}/u.test('aa') );
console.log( /𠮷{2}/.test('𠮷𠮷') );
console.log( /𠮷{2}/u.test('𠮷𠮷') );






//预定义模式
console.log( /^\S$/.test("𠮷") );
console.log( /^\S$/u.test("𠮷") );


//
console.log(1,...[2,3,4],5);


