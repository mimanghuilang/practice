// 外部模块
// 在Node.js里大部分工作是通过加载一个或多个模块实现的。
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}

// 使用
/// <reference path="node.d.ts"/>
// import * as URL from "url";
// let myUrl = URL.parse("http://www.typescriptlang.org");


// 模块声明通配符
// 某些模块加载器如SystemJS 和 AMD支持导入非JavaScript内容。
// 它们通常会使用一个前缀或后缀来表示特殊的加载语法。 模块声明通配符可以用来表示这些情况。
declare module "*!text" {
    const content: string;
    export default content;
}
// Some do it the other way around.
declare module "json!*" {
    const value: any;
    export default value;
}
