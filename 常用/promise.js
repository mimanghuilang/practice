// todo 实现链式调用
function MyPromise(execute) {
    this.successBack = ()=>{};
    this.failBack = ()=>{};
    this.finallyBack = ()=>{};
    this.status = 'noStart'
    this.error = null;
    function resolve(res) {
        if(this.successBack){
            this.successBack(res)
            if(this.status==='pending'){
                this.status='end';
                this.finallyBack()
            }
        }
        return this;
    }
    function reject(err) {
        if(this.failBack){
            this.failBack(err)
            if(this.status==='pending'){
                this.status='end';
                this.finallyBack()
            }
        }
        return this;
    }
    this.runMachine = function () {
        if(this.status==='noStart'){
            this.status='pending'
            setTimeout(()=>{
                execute(resolve.bind(this),reject.bind(this))
            },0)
        }
    }

    this.then = function (successBack) {
        this.successBack = successBack
        this.runMachine()
        return this;
    }
    this.catch=function (failBack) {
        this.failBack = failBack
        this.runMachine()
        return this;
    }
    this.finally=function (finallyBack) {
        this.finallyBack = finallyBack;
    }
}
var haha = new MyPromise((resolve,reject)=>{
    var haha = 1234;
    resolve(haha)
}).then(res=>{
    console.log(res,'res');
}).catch(error=>{
    console.log(error,'error')
}).finally(()=>{
    console.log('finally')
})

// var haha = new Promise((resolve,reject)=>{
//     resolve('123')
// }).catch(()=>{console.log(234)})
// var haha  = new MyPromise((resolve,reject)=>{
//     resolve('123')
// })
// setTimeout(()=>{
//     haha.then((res)=>{
//         console.log(res,'res')
//     })
// },10000)
// 链式调用呢
Promise.then().then().then()