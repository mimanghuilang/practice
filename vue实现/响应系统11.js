// watch 的实现原理
// watch 的本质是利用副作用函数的调度选项
// 懒执行函数，实现computed
// 实现了 watch, 解决了watch的通用性问题，遗留问题watch实现getter函数的监听
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

function watch(source,cb){
    effect(
        ()=>traverse(source),
        {
            scheduler(){
                cb()
            }
        }
        )
}

function traverse(value, seen = new Set()){
    if(typeof value!=='object'||value===null||seen.has(value)) return;
    seen.add(value);
    for(const k in value){
        traverse(value[k],seen)
    }
}