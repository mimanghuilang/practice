// 函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。
// 为函数添加类型
// function add(x: number, y: number) {
//     return x + y;
// }
// let myAdd = function(x: number, y: number): number { return x + y; };
// // 书写完整函数类型
// // let myAdd3: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; };
// let myAdd2: (x: number, y: number) => number = function(x, y) { return x + y; };
// 推断类型
// // myAdd has the full function type
// let myAdd = function(x: number, y: number): number { return x + y; };
//
// // The parameters `x` and `y` have the type number
// let myAdd: (baseValue: number, increment: number) => number =
//     function(x, y) { return x + y; };
// 可选参数和默认参数
// 可选参数
// function buildName(firstName: string, lastName?: string) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
//
// let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right
// 默认参数
// function buildName(firstName = "Will", lastName: string) {
//     return firstName + " " + lastName;
// }
// 剩余参数
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
//
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// this
// this 和箭头函数
// 如果你给编译器设置了--noImplicitThis标记。 它会指出 this.suits[pickedSuit]里的this的类型为any
// 箭头函数能保存函数创建时的 this值，而不是调用时的值：
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
//
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
//
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// 解决上面报错的问题
// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// this 参数在回调函数里
// https://blog.csdn.net/weixin_34259559/article/details/92693837?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162503234716780261944543%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162503234716780261944543&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-92693837.pc_search_result_control_group&utm_term=typescript+%E5%87%BD%E6%95%B0this&spm=1018.2226.3001.4187
// todo 以后吧
// 重载
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
