/**
 * 注释方法
 * 最简单，也是功能最弱的
 * 他利用inerface和implemnet"文字"
 * 把他们用注释的方式显示的表现出来
 */
(function () {
    /**
     * 用注释定义一个接口
     * interface interface(){
     * function add(obj);
     * function remove(obj);
     * function find(id);
     * }
     * 我们用注释的方式实现他
     * PersonDaoTmpl implement interface
     */

    var PersonDaoTmpl=function () {

    };
    PersonDaoTmpl.prototype.add=function (obj) {

    };
    PersonDaoTmpl.prototype.remove=function (obj) {

    };
    PersonDaoTmpl.prototype.find=function (id) {

    };
    /**
     *千万不要感觉他是没有任何意义的
     *  1.大型项目靠的就是规范和标准
     *  2.这样写法会让你的程序员在没有实现之前充分有时间做代码的设计和架构
     *  3.缺点：要认为的遵守
     */
})();