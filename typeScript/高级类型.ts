// 类型别名
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
//
// function getName(n: NameOrResolver): Name {
//     if (typeof n === "string") {
//         return n;
//     } else {
//         return n();
//     }
// }
//
// type Container<T> = {value:T};
// 我们也可以使用类型别名来在属性里引用自己
// type Tree<T> = {
//     value: T;
//     left: Tree<T>;
//     right: Tree<T>;
// }

// 接口vs类型别名
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;