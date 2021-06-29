// 从ECMAScript 2015开始，JavaScript引入了模块的概念。TypeScript也沿用这个概念。
// 模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。
// 大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。
// TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）。

// 导出
// 任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加export关键字来导出。
export interface StringValidator {
    isAcceptable(s: string): boolean;
}