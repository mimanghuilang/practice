// 解决
// 调度函数，执行时机
// 留下思考，修改多次，只执行一次副作用函数
let activeEffect;
const effectStack = [];

function cleanup(effectFn){
    for(let i=0;i<effectFn.deps.length;i++){
        const deps = effectFn.deps[i];
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0;

}
// 注册函数，去收集依赖
function effect(fn, options){
    const effectFn = ()=>{
        cleanup(effectFn);
        activeEffect = effectFn;
        effectStack.push(effectFn);
        fn();
        effectStack.pop(effectFn);
        activeEffect = effectStack[effectStack.length-1]
    }
    effectFn.options = options;
    effectFn.deps = [];
    effectFn();
}
const bucket = new WeakMap();
const data =  {text:'hello world',ok:true};
window.obj = new Proxy(data,{
    get(target,key){
        track(target,key)
        return target[key];
    },
    set(target,key,newVal){
        target[key] = newVal;
        trigger(target,key)
    }
});
effect(function effectFn(){
    // console.log(JSON.stringify(obj));
    // document.body.innerText=obj.ok? obj.text:'not'
    document.body.innerText=obj.ok? obj.text:'not'
    console.log(234)
},{
    scheduler(fn){
        setTimeout(fn);
    }

})
// obj.ok = false

// 副作用函数，收集依赖
function track (target,key){
    if(!activeEffect){return}
    let depsMap = bucket.get(target);
    if(!depsMap){
        bucket.set(target,(depsMap = new Map()));
    }
    let deps = depsMap.get(key);
    if(!deps){
        depsMap.set(key,(deps = new Set()))
    }
    deps.add(activeEffect);
    // 触发
    activeEffect.deps.push(deps);

}

// 触发依赖，设置触发依赖
function trigger(target,key){
    const depsMap = bucket.get(target);
    if(!depsMap){return}
    const effects = depsMap.get(key);
    const effectsToRun = new Set();
    effects && effects.forEach(effectFun=>{
        if(effectFun!==activeEffect){
            effectsToRun.add(effectFun)
        }
    })
    effectsToRun.forEach(effectFn=>{
        if(effectFn.options.scheduler){
            effectFn.options.scheduler(effectFn)
            return
        }
        effectFn()
    });
}