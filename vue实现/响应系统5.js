// 解决
// effect(function effectFn(){document.body.innerText=obj.ok? obj.text:'not'})
// 遗留问题，effect嵌套
let activeEffect;

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
        fn();
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
    document.body.innerText=obj.ok? obj.text:'not'
})
// obj.ok = false

// 副作用函数，收集依赖
function track (target,key){
    console.log("收集依赖")
    if(!activeEffect){return}
    let depsMap = bucket.get(target);
    if(!depsMap){
        bucket.set(target,(depsMap = new Map()));
    }
    let deps = depsMap.get(key);
    if(!deps){
        depsMap.set(key,(deps = new Set()))
    }
    console.log(deps,key)
    deps.add(activeEffect);
    // 触发
    activeEffect.deps.push(deps);

}

// 触发依赖，设置触发依赖
function trigger(target,key){
    console.log('触发依赖')
    const depsMap = bucket.get(target);
    if(!depsMap){return}
    const effects = depsMap.get(key);
    const effectsToRun = new Set(effects);
    effectsToRun.forEach(effectFn=>effectFn());
}