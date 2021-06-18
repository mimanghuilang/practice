/**
 * 只读属性
 * readonly vs const
 * 作为一个变量还是作为一个属性
 * 变量用 const,属性用readonly
 */
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };