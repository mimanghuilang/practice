function debounce(fn,wait) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            return fn.apply(this,arguments)
        },wait)
    }
}
let Animal = function (name) {
    this.name = name;
    this.sayName = debounce( ()=> {
        console.log(this.name)
    },300)
}

let cat = new Animal('cat');
cat.sayName()