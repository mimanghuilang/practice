// 防抖函数，参考 https://blog.csdn.net/Polaris_tl/article/details/99300458
// 生活场景坐电梯
/**
 * 防抖函数,不立即执行
 * @param fn
 * @param wait
 * @returns {Function}
 */
function debounce1(fn,wait) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },wait)
    }
}

/**
 * 第一次立即执行，下一次开始防抖
 * @param fn
 * @param wait
 * @returns {Function}
 */
function debounce2(fn,wait) {
    let timer,flag=true;
    return function () {
        clearTimeout(timer);
        if(flag){
            fn.apply(this,arguments)
            flag= false
        }else{
            timer = setTimeout(()=>{
                fn.apply(this,arguments)
                flag= true   // 过一段时间点要不要算成第一次点
            },wait)
        }
    }
}

/**
 * 合并控制
 * @param fn
 * @param wait
 * @returns {Function}
 */
function debounce3(fn,wait,immediate) {
    let timer,flag=true;
    return function () {
        if(!immediate){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                fn.apply(this,arguments)
            },wait)
        }else{
            clearTimeout(timer)
            if(flag){
                fn.apply(this,arguments)
                flag= false
            }else{
                timer = setTimeout(()=>{
                    fn.apply(this,arguments)
                    flag= true // 过一段时间点要不要算成第一次点
                },wait)
            }
        }
    }
}

/**
 * 拆分优化方案3，如果过一会儿再点击不算第一次点击了
 * @param fn
 * @param wait
 * @param immediate
 * @returns {Function}
 */
function debounce4(fn,wait,immediate) {
    let timer,_immediate=immediate;
    return function () {
        clearTimeout(timer);
        if(_immediate){
            fn.apply(this,arguments)
            _immediate= false
        }else{
            timer = setTimeout(()=>{
                fn.apply(this,arguments)
            },wait)
        }
    }
}

/**
 * 拆分优化方法3，如果过一段时间点算成第一次点
 * @param fn
 * @param wait
 * @param immediate
 * @returns {Function}
 */
function debounce5(fn,wait,immediate) {
    let timer,flag=true;
    return function () {
        clearTimeout(timer);
        if(!immediate){
            timer = setTimeout(()=>{
                fn.apply(this,arguments)
            },wait)
        }else{
            if(flag){
                fn.apply(this,arguments)
                flag= false
            }else{
                timer = setTimeout(()=>{
                    fn.apply(this,arguments)
                    flag= true // 过一段时间点要不要算成第一次点
                },wait)
            }
        }
    }
}

// 第一次执行的定义不一样，结果也就不一样