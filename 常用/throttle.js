// 节流函数，参考 https://blog.csdn.net/Polaris_tl/article/details/99300458
// 生活场景下拉加载到下一页

/**
 * 节流立即执行
 * @param fn
 * @param wait
 * @returns {Function}
 */
function throttle(fn,wait){
    let hasTimer=false;
    return function () {
        if(!hasTimer){
            hasTimer = true;
            fn.apply(this,arguments)
            setTimeout(()=>{
                hasTimer = false;
            },wait)
        }
    }
}

/**
 * 节流延时执行
 * @param fn
 * @param wait
 */
function throttle1(fn,wait){
    let hasTimer = false;
    return function () {
        if(!hasTimer){
            hasTimer = true;
            setTimeout(()=>{
                fn.apply(this,arguments)
                hasTimer = false;
            },wait)
        }
    }
}

function throttle2(fn,wait,immediate) {
    let hasTimer=false;
    return function () {
        if(!hasTimer){
            hasTimer = true;
            immediate&&fn.apply(this,arguments)
            setTimeout(()=>{
                !immediate&&fn.apply(this,arguments)
                hasTimer = false;
            },wait)
        }
    }
}