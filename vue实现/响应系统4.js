// 解决3的问题
// 留下 effect(function effectFn(){document.body.innerText=obj.ok? obj.text；'not'})
let activeEffect;
function effect(fn){
    activeEffect = fn;
    fn();
}
const bucket = new WeakMap();
const data =  {text:'hello world'};
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
effect(()=>{
    console.log(213)
    document.body.innerText = obj.text;
})
obj.text = '999'


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

}

function trigger(target,key){
    const depsMap = bucket.get(target);
    if(!depsMap){return}
    const effects = depsMap.get(key);
    effects && effects.forEach(fn=>fn());
}