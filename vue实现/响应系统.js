// 实现了简单响应系统，问题副作用函数固定，不够灵活
function effect(){
    document.body.innerText = obj.text;
}
const bucket = new Set();
const data =  {text:'hello world'};
const obj = new Proxy(data,{
    get(target,key){
        bucket.add(effect)
        return target[key];
    },
    set(target,key,newVal){
        target[key] = newVal;
        bucket.forEach(fn=>fn());
        return true;
    }
});
effect()
obj.text = '1232'