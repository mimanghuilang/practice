// https://blog.csdn.net/qq_22167989/article/details/81586105?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162184942016780269868450%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162184942016780269868450&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-81586105.first_rank_v2_pc_rank_v29&utm_term=Promise+%E6%89%8B%E5%86%99&spm=1018.2226.3001.4187
function MyPromise(fn) {
    var  state = 'pending',value = null, callbacks = [];
    this.then = function (onFulfilled) {
        return new MyPromise(function (resolve) {
            handle({
                onFulfilled:onFulfilled||null,
                resolve
            })

        })
    };
    function handle(callback) {
        if (state === 'pending') {
            callbacks.push(callback);
            return;
        }
        //如果then中没有传递任何东西
        if(!callback.resolve) {
            callback.resolve(value);
            return;
        }
        var ret = callback.onFulfilled(value);
        callback.resolve(ret);

    }
    function resolve(newValue) {
        if(newValue && (typeof newValue==='object'||typeof newValue==='function')){
            var then = newValue.then;
            if(typeof then==='function'){
                then.call(newValue,resolve)
                return;
            }
        }
        value = newValue;
        state = 'fulfilled'
        setTimeout(function () {
            callbacks.forEach(function (callback) {
                handle(callback);
            });
        }, 0);
    }
    fn(resolve);
}
var haha = new MyPromise(resolve=>{resolve('success')}).then(res=>{
    return new MyPromise(resolve=>{
        setTimeout(()=>{
            resolve(res+1)
        },1000)
    })
}).then(res=>{
    console.log(res)
})