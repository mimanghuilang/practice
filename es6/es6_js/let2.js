for(var i=0;i<10;i++){}
console.log(i);


// for(let j=0;j<10;j++){}
// console.log(j);


var a=[];
for(var i=0;i<10;i++){
    a[i]=function () {
        console.log(i);
    }
}
console.log(a[6]());

var b=[];
for(let j=0;j<10;j++){
    b[j]=function(){
        console.log(j)
    };
}
b[6]();
