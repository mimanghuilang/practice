// let hahaha = [0,1,null]


// 类型兼容
// 比较两个函数
// let x1 = (a: number) => 0;
// let y1 = (b: number, s: string) => 0;
//
// y1 = x1; // OK
// x1 = y1; // Error

// 函数参数双向协变
// enum EventType { Mouse, Keyboard }
//
// interface Event { timestamp: number; }
// interface MouseEvent extends Event { x: number; y: number }
// interface KeyEvent extends Event { keyCode: number }
//
// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
//     /* ... */
// }
//
// // Unsound, but useful and common
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
//
// // Undesirable alternatives in presence of soundness
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));
//
// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));

// // 可选参数及剩余参数
// function invokeLater(args: any[], callback: (...args: any[]) => void) {
//     /* ... Invoke callback with 'args' ... */
// }
//
// // Unsound - invokeLater "might" provide any number of arguments
// invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));
//
// // Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));



// 函数重载
// 略

// 枚举
// enum Status { Ready, Waiting };
// enum Color { Red, Blue, Green };
// let status = Status.Ready;
// status = Color.Green;  // Error


// 类的私有成员和受保护的成员

// 泛型
// interface Empty<T> {}
// let x1:Empty<number>;
// let y1:Empty<string>;
// x1=y1;

// interface NotEmpty<T> {
//     data: T;
// }
// let x2: NotEmpty<number>;
// let y2: NotEmpty<string>;