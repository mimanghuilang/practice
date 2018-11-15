/**
 *分支单体
 * 用处：
 * 在做Ajax的时候根据不同的浏览器获取不同的XHR
 * 在不同的分辨率的情况下初始化不一样的界面（PCAT2）
 */
(function () {
    //得到机器的分辨率
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var portalInfo=(function () {
        var $12801024={info:"1,2,3,5"};
        var $1024768={info:"4,2,1,2"};
        if(screenWidth==1280){
            return $12801024;
        }
        else if(screenWidth==1024){
            return $1024768;
        }
        else{
            return $1024768;
        }
    })();
    alert(portalInfo.info)

})();