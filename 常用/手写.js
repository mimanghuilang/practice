/*jshint esversion: 6 */
// 手写new、instanceof、call、apply、bind、节流防抖、promise


// 手写 防抖
function debounce(fn, wait, immediate) {
    if (typeof fn !== 'function') throw TypeError()
    let timer, result;
    let deb = function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            result = fn.apply(this, arguments);
        }, wait)
        return result
    };
    del.cancel = function () {
        clearTimeout(timer)
        timer = null;
    }
    return deb
}

var f2 = debounce(function () {
    console.log(123)
}, 1000, true)
console.log('test2.1')

setInterval(() => {
    f2()
}, 800)
console.log('test1.1')