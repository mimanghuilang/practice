let input=[1,2,3,4,5,6];
input=input.map(item => item + 1);
//等同于
// input=input.map(function (item) {
//     return item+1;
// });
console.log(input);