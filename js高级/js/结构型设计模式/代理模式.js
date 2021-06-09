/**
 * 保护代理
 */
// 定义一个广告类
var Ad = function(price){
    this.price = price;
};

Ad.prototype.getPrice = function() {
    return this.price;
};

// 定义一个助理对象
var assistant = {
    init: function(ad) {
        var money = ad.getPrice();
        if(money > 300) {
            this.receiveAd(money);
        } else {
            this.rejectAd();
        }
    },
    receiveAd: function(price) {
        star.receiveAd(price);
    },
    rejectAd: function() {
        star.rejectAd();
    }
};

// 定义一个明星对象
var star = {
    receiveAd: function(price) {
        console.log('广告费' + price + '万元');
    },
    rejectAd: function() {
        console.log('拒绝小制作！');
    }
};

assistant.init(new Ad(5)); // "拒绝小制作！"
assistant.init(new Ad(500)); // "广告费500万元"
console.log("----------------------------------")

/**
 * 虚拟代理
 * @type {{setSrc: preImage.setSrc}}
 */
var myImage = (function() {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})();

var preImage = (function() {
    var img = new Image;
    img.onload = function() {
        myImage.setSrc = img.src;
    };

    return {
        setSrc: function(src) {
            myImage.setSrc( '../loading.gif');
            img.src = src;
        }
    }
})();

preImage.setSrc('https://cn.bing.com/az/hprichbg/rb/TadamiTrain_ZH-CN13495442975_1920x1080.jpg');


/**
 * 缓存代理就是将代理加缓存
 * @returns {number}
 */
var multAdd = function() {
    var res = 0;
    for (var i = 0, l = arguments.length; i < l; i++) {
        res = res + arguments[i]
    }

    return res;
};

var proxyAdd = (function() {
    var cache = {};
    return function() {
        var args = Array.prototype.join.call(arguments, ',');
        if(args in cache) {
            return cache[args];
        }
        return caches[args] = multAdd.apply(this, arguments);
    }
})();

proxyAdd(1, 2, 3); // 6
proxyAdd(1, 2, 3); // 6

/**
 * 站长统计
 * @type {Function}
 */
var count =(function () {
    var _img =  new Image();
    return function (param) {
        var str = 'http://www.count.com/a.gif?';
        for(var i in param){
            str+=i+'='+param[i]
        }
        _img.src = str;
    }
})()
count({num:10})

// jsonP

// 代理模板

