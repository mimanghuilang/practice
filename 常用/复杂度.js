// 空间复杂度 和 时间复杂度

// 冒泡排序运行次数
arr1 = [1,2,3,4,5];
function bubleSort(arr1){
    for(let i=arr1.length-1;i>0;i--){
        for(j=0;j<i;j++){
            if(arr1[j]>arr1[j+1]){
                mid = arr1[j];
                arr1[j] = arr1[j+1];
                arr1[j+1] = mid;
            }
        }
    }
}
const haha = arr1.reverse();
console.log(haha)
bubleSort(haha);
console.log(arr1);