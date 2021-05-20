/*jshint esversion: 6 */

// 防抖函数
function debounce(fn, wait, immediate) {
    if(typeof fn !== 'function')throw TypeError()
    let timer, result;
    let deb = function () {
        if (timer) clearTimeout(timer);
        if (immediate) {
            if (!timer) {
                result = fn.apply(this, arguments);
            }
        }
        timer = setTimeout(() => {
            result = fn.apply(this, arguments)
            timer = null
        }, wait);
        return result
    }
    deb.cancel = () => {
        clearTimeout(timer);
        timer = null
    }
    return deb
}
var f3 = debounce(function (haha) {
    console.log(haha)
},500,true)
f3(1234);

