/**
 * 属性检验法方式来实现它
 */
(function () {
    /**
     * 用注释定义一个接口
     * interface PersonDao(){
     * function add(obj);
     * function remove(obj);
     * function find(id);
     * }
     * 我们用注释的方式实现他
     * PersonDaoTmpl implement interface
     */

    var PersonDaoTmpl = function () {
        this.implementInterface = ["PersonDao"];

    };
    PersonDaoTmpl.prototype.add = function (obj) {
        alert(obj);

    };
    PersonDaoTmpl.prototype.remove = function (obj) {

    };
    PersonDaoTmpl.prototype.find = function (id) {

    };
    function addObj(obj) {
        var PersonDao=new PersonDaoTmpl();
        //开始检查
        // if(!impl(PersonDao,"PersonDao")){
        if(!impl(PersonDao,"PersonDao","PersonDao2")){
            //当人性化
            throw  new Error("类PersonDaoTmpl没有实现接口PersonDao");
        }
        else{
            PersonDao.add(obj);
        }
    }

    addObj("USCAPT.COM  ");
    /**
     * 检验方法,接受的是一个不定参数
     */
    function impl(object) {
        //遍历传入对象的属性
        for (var i = 1; i < arguments.length; i++) {
            var inerfaceName = arguments[i];
            var interfaceFound = false;
            for (var j = 0; j < object.implementInterface.length; j++) {
                if (object.implementInterface[j] == inerfaceName) {
                    interfaceFound = true;
                    break;
                }
            }
            if (!interfaceFound) {
                return false;
            }
        }
        return true;
    }
})();