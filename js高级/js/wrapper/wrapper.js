/**
 * 适配器是为了解决已有接口不兼容的问题
 * 他类似门面模式，但是机理是截然不同的
 * 门面模式为了简化接口使调用者更加方便
 */
(function(){
    //例如你已经写好一个应用API
    //程序员是你依托PcatV1版本来写的客户端
    var PcatVlib=new Interface("PcatVlib",["add"]);
    function plib(){
        this.add=function (x,y) {
            return x+y;
        };
        Interface.ensureTmplements(this,PcatVlib);
    }
    //客户端
    var lib=new plib();
    //调用
    alert(lib.add(10,20));

    //现在需要更换类库，但是前台已经写好的程序我不希望有大的变化
    var PcatV2=new Interface("PcatVlib",["add"]);
    function p2lib() {
        this.add=function (numberList) {
            return eval(numberList.join("+"));
        };
        Interface.ensureTmplements(this,PcatVlib);
    }
    //客户端
    var lib=new p2lib();
    //调用
    var warpper=new Interface("PcatVlib",["add"]);
    function wrapperPcatV2Lib() {
        this.add=function (x,y) {
            var arr=new Array();
            arr.push(x);
            arr.push(y);
            return new p2lib().add(arr);
        }
    }
    lib=new wrapperPcatV2Lib();
    alert(lib.add(10,20))
})();
