// 为函数定义类型
// function add(x: number, y: number): number {
//     return x + y;
// }
//
// let myAdd = function(x: number, y: number): number { return x + y; };

// 函数完整类型
// let myAdd: (x: number, y: number) => number = function(x, y) { return x + y; };
// myAdd(1,2)

// 参数名是否正确不重要
// let myAdd: (baseValue: number, increment: number) => number = function(x, y) { return x + y; };

// 推断类型
// myAdd has the full function type
// let myAdd = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
// let myAdd: (baseValue: number, increment: number) => number =
//     function(x, y) { return x + y; };

// 可选参数和默认参数
// function buildName(firstName: string, lastName?: string) {
//     return firstName + " " + lastName;
// }
//
// let result1 = buildName("Bob");                  // error, too few parameters


// 剩余参数
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
//
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// this
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return ()=> {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
//
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);


// this 参数
// function f(this: void) {
    // make sure `this` is unusable in this standalone function
// }

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
//
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
//
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
//
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);