let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// ReadonlyArray 确定数组创建后,数组是不允许修改的，但是可以用类型断言重写
a=ro as number [];


// readonly vs const
// 推荐作为变量用const,作为属性用readonly

// 额外的属性检查

