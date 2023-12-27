// 解决副作用函数灵活性的问题，修改data的属性，会触发不相关的副作用函数
let activeEffect;
function effect(fn){
    activeEffect = fn;
    fn();
}
const bucket = new Set();
const data =  {text:'hello world'};
const obj = new Proxy(data,{
    get(target,key){
        if(activeEffect){
            bucket.add(activeEffect)
        }
        return target[key];
    },
    set(target,key,newVal){
        target[key] = newVal;
        bucket.forEach(fn=>fn());
        return true;
    }
});
effect(()=>{
    console.log(213)
    document.body.innerText = obj.text;
})
obj.haha = '1232'