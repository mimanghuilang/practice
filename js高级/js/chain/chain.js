/**
 * 从一个实例中引出立案时调用的需求
 */
(function () {
    function Cat(name) {
        this.name=name;
        this.run=function () {
            console.log(name+" start run");
            return this;
        };
        this.stopRun=function () {
            console.log(name+" stop run");
            return this;
        };
        this.sing=function () {
            console.log(name+ " start sing");
            return this;
        };
        this.StopSing=function () {
            console.log(name+" stop sing");
            return this;
        }
    }
    //测试
    var c=new Cat("USPCAT");
    c.run().sing().StopSing().stopRun();

})();


