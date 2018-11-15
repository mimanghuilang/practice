/**
 * 普通的属性和函数是作用早对象上的
 * 而静态函数是定义到类上面的
 */
(function () {
    function Person(name,age) {
        this.name=name;
        this.age=age;
        this.showName=function () {
            alert(this.name);
        }

    }
    //第一种函数的写法
    Person.add=function (x,y) {
        return x+y;
    };
    console.log(Person.add(10,20));



    //第二种方式
    //用类中类的方式完成设一个对象权拥有相同的属性和概述
    var cat=(function () {
        var AGE=10;
        function add(x,y) {
            return x+y;
        }
       return function () {
            this.AGE=AGE;
            this.add=function (x,y) {
                return add(x,y);
            }
        }
    })();
    console.log(new cat().add(1,2)+"  "+new cat().AGE);
    console.log(new cat().AGE);
    /**
     * 1，保护内部数据完整性是封装一大用处
     * 2，对象的重构变得轻松
     * 3，弱化模块之间的耦合
     * 弊端
     * 私有的方法变得很难进行单元测试
     * 使用封装就意味着与复杂的代码打交道
     * 最大的问题是封装在javascript中很难实现的
     */
})();
