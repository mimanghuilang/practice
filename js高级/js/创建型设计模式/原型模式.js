var LoopImages = function (imgArr,container) {
    this.imagesArray = imgArr;
    this.container = container;
}
LoopImages.prototype = {
    createImage:function () {
        console.log('createImage')
    },
    changeImage:function () {
        console.log('changeImage')
    }
}
var slideLoopImg = function (imgArr,container) {
    LoopImages.call(this,imgArr,container);
}
slideLoopImg.prototype = new LoopImages();
slideLoopImg.prototype.changeImage = function () {
    console.log('slideLoopImg changeImage func')
}
var FadeLoopImg = function (imgArr,container,arrow) {
    LoopImages.call(this,imgArr,container)
    this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function () {
    console.log('FadeLoopImg changeImage func')
}
var fadeloopImg = new FadeLoopImg(['img1','img2','img3'],'container')
console.log(fadeloopImg)