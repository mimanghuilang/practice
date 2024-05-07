const sleep = (seconds)=>new Promise(resolve=>setTimeout(resolve,seconds));
function delay(func,seconds,...args){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Promise.resolve(func(...args)).then(resolve)
        },seconds)
    })
}
const Haha = function(){
    const _self = this;
    this.name =1234;
    this.sayName = function(){
        console.log(_self);
        console.log(_self.name);
    }
    this.delaySayName = function(){
        // console.log(1111)
        delay(this.sayName,1000)
    }
}
const haha = new Haha();
console.log(haha);
haha.delaySayName()