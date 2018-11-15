/**
 *map类
 */
(function () {
    function jMap() {
        //私有变量
        var arr = {};
        //增删改查
        this.put = function (key, value) {
            arr[key] = value;
        };
        this.get = function (key) {
            if (arr[key]) {
                return arr[key];
            }
            else {
                return null;
            }
        };
        this.remove=function(key){
            delete  arr[key];
        };
        this.eachMap=function (fn) {
            for(var key in arr){
                fn(key,arr[key]);
            }
        };

    }
    var country=new jMap();
    country.put("01","ZG");
    country.put("02","HG");
    country.put("03","RB");
    country.put("04","MG");
    country.put("05","TG");
    console.log(country.get("01"));
    country.remove("01");
    console.log(country.get("1"));
    country.eachMap(function (key,value) {
        console.log("key:"+key+",value:"+value)
    })
})();
