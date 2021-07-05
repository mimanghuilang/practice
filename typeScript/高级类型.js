// 高级类型
// 交叉类型是将多个类型合并为一个类型。
// 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
// 例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。
// 就是说这个类型的对象同时拥有了这三种类型的成员。
// 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。
// type Readonly2<T> = {
//     readonly [P in keyof T]: T[P];
// }
// type Partial2<T> = {
//     [P in keyof T]?: T[P];
// }
// type PersonPartial = Partial2<Person>;
// type ReadonlyPerson = Readonly2<Person>;
