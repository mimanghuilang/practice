// 解决
// effect(function effectFn(){document.body.innerText=obj.ok? obj.text:'not'})
// 遗留问题，调度函数的问题
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
function effect(fn){
    const effectFn = ()=>{
        cleanup(effectFn);
        activeEffect = effectFn;
        effectStack.push(effectFn);
        fn();
        effectStack.pop(effectFn);
        activeEffect = effectStack[effectStack.length-1]
    }
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
    effectsToRun.forEach(effectFn=>effectFn());
}