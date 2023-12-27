// 解决副作用函数灵活性的问题，以及对应响应的问题，留下问题封装追踪的问题，把副作用封装到trigger函数中
let activeEffect;
function effect(fn){
    activeEffect = fn;
    fn();
}
const bucket = new WeakMap();
const data =  {text:'hello world'};
const obj = new Proxy(data,{
    get(target,key){
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
        return target[key];
    },
    set(target,key,newVal){
        target[key] = newVal;
        const depsMap = bucket.get(target);
        if(!depsMap){return}
        const effects = depsMap.get(key);
        effects && effects.forEach(fn=>fn());
        return true;
    }
});
effect(()=>{
    console.log(213)
    document.body.innerText = obj.text;
})
obj.text = '999'