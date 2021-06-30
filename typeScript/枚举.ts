// 枚举
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }

// 枚举使用
// enum Response2 {
//     No = 0,
//     Yes = 1,
// }
// function respond(recipient: string, message: Response2): void {
//     // ...
// }
// respond("Princess Caroline", Response2.Yes)


// 错误举例
// function getSomeValue() {
//     return 1
// }
// enum E {
//     A = getSomeValue(),
//     B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }


// 字符串枚举
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 异构枚举
// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES",
// }