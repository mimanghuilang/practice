Array.prototype.jmReduce = function(callbackfn, initialValue){
    let hasInitialValue = initialValue !== undefined;
    if(this.length===0){
        if (hasInitialValue) {
            return initialValue;
        } else {
            throw TypeError("Reduce of empty array with no initial value");
        }
    }
    let accumulator = hasInitialValue ? initialValue : this[0];
    let i = hasInitialValue ? 0 : 1;
    for (i; i < this.length; i++) {
        accumulator = callbackfn(accumulator, this[i], i, this);
    }
    return accumulator;
}
var res = ([1,2,3,4,5]).jmReduce(function ite(a,b){return a+b}, 0);
console.log(res)