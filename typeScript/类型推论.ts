// 类型推论
// let x123=3;
// x123='1234'

// 最佳通用类型
// let xArr= [0,1,null];
// xArr[3] = 'string';

//我们想让zoo被推断为Animal[]类型，但是这个数组里没有对象是Animal类型的，因此不能推断出这个结果。 为了更正，当候选类型不能使用的时候我们需要明确的指出类型：
class Rhino {}
class Elephant {}
class Snake {}
let zoo = [new Rhino(), new Elephant(), new Snake()];

// 上下文类型
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};


