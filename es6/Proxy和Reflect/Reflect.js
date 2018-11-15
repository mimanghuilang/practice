//yield命令表示执行到此处执行权交给其他协程
function asyncJob() {
    //...其他代码
    var f=yield  readFile(fileA);
    //..其他代码
}