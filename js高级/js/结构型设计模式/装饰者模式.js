var plane = {
    fire: function () {
        console.log('发射普通子弹');
    }
}
plane.fire();     // 发射普通子弹


var fire1 = plane.fire;
var shot = function () {
    console.log('发射散弹');
}
plane.fire = function () {
    fire1();
    shot();
}
plane.fire();    // 发射普通子弹  发射散弹

var fire2 = plane.fire;
var track = function(){
    console.log('发射跟踪导弹');
}
plane.fire = function(){
    fire2();
    track();
}
plane.fire();    // 发射普通子弹  发射散弹  发射跟踪导弹