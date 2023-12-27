// 解决watch 立即执行和回调时机的问题
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
function effect(fn, options={}){
    const effectFn = ()=>{
        cleanup(effectFn);
        activeEffect = effectFn;
        effectStack.push(effectFn);
        const res = fn();
        effectStack.pop(effectFn);
        activeEffect = effectStack[effectStack.length-1]
        return res;
    }
    effectFn.options = options;
    effectFn.deps = [];
    if(!options.lazy){
        effectFn();
    }
    return effectFn;
}
const bucket = new WeakMap();
const data =  {foo:1,bar:2};
const obj = new Proxy(data,{
    get(target,key){
        track(target,key)
        return target[key];
    },
    set(target,key,newVal){
        target[key] = newVal;
        trigger(target,key)
    }
});


// 副作用函数，收集依赖
function track (target,key){
    console.log(target,key);
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
    console.log(target,key);
    const depsMap = bucket.get(target);
    if(!depsMap){return}
    const effects = depsMap.get(key);
    const effectsToRun = new Set();
    effects && effects.forEach(effectFun=>{
        if(effectFun!==activeEffect){
            effectsToRun.add(effectFun)
        }
    })
    console.log(effectsToRun);
    effectsToRun.forEach(effectFn=>{
        if(effectFn.options.scheduler){
            effectFn.options.scheduler(effectFn)
            return
        }
        effectFn()
    });
}

function computed(getter){
    let value;
    let dirty = true;
    const effectFn = effect(getter,{
        lazy: true,
        scheduler(){
            if(!dirty){
                console.log('123')
                dirty = true;
                trigger(obj,'value')
            }
        }
    });

    const obj = {
        get value(){
            if(dirty){
                value = effectFn();
                dirty = false;
            }
            track(obj,'value'); //触发依赖
            return value;
        }
    }
    return obj;
}


const sumRes = computed(()=>obj.foo+obj.bar);

effect(()=>{
    console.log(sumRes.value,'effect')
})
// obj.foo++;
// obj.foo--

function watch(source,cb, options){
    let getter;
    if(typeof source === 'function'){
        getter = source
    }else{
        getter = ()=>traverse(source)
    }
    let oldValue,newValue;
    let cleanup;
    function onInvalidate(fn){
        cleanup = fn;
    }
    const job = ()=>{
        newValue = effectFn()
        if(cleanup){
            cleanup();
        }
        cb(newValue,oldValue,onInvalidate)
        oldValue = newValue;
    }

    const effectFn = effect(
        ()=>getter(),
        {
            lzay:true,
            scheduler:()=>{
                if(options.flush==='post'){
                    const p = Promise.resolve();
                    p.then(job)
                }else{
                    job();
                }
            }
        })
    if(options.immediate){
        job()
    }else{
        oldValue = effectFn();
    }
   
}
