function sum(...values){
    var submitData = 0;
    var sumInner = (...values)=> {
        submitData+= values.reduce((a,b)=>{
            return a+b;
        },submitData);
        return sum(...values)
    }
    sumInner(...values);
    sumInner.valueOf = function(){
        return submitData;
    };
    return sumInner;
}

// console.log(sum(1)(2,3).valueOf());
console.log(sum(1)(2,3))