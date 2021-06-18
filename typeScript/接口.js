function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
console.log(area({ name: "rectangle", width: 30, height: 15 }));
console.log(area({ name: "square", width: 30, height: 30, color: "blue" }));
// 只读属性
// interface Point {
//     readonly x:number;
//     readonly y:number;
// }
// let pn:Point = {x:10,y:10};
// pn.x= 5;
// 额外的属性检查
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any; // 跳过方法
// }
//
// function createSquare23(config: SquareConfig): { color: string; area: number } {
//     // ...
//     return;
// }
// let mySquare23 = createSquare23({ colour: "red", width: 100 });
// 或则类型断言
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
//# sourceMappingURL=接口.js.map