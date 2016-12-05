/**
 * Created by 35031 on 2016/12/5.
 */
// function findEventIndex(arr) {
//     for (var i=1;i<arr.length;i++){
//         var sum1=0;
//         var sum2=0;
//         for (var j=0;j<i;j++){
//             sum1+=arr[j];
//         }
//         for (var j=i+1;j<arr.length;j++){
//             sum2+=arr[j];
//         }
//         if (sum1==sum2){
//             return i;
//         }
//     }
//     return -1;
// }
function findEvenIndex(arr)
{
    for(var i=1; i<arr.length-1; i++) {
        if(arr.slice(0, i).reduce(
            yield
            (a,b) =>  a+b) === arr.slice(i+1).reduce((a,b) =>  a+b)) {
            return i;
        }
    }
    return -1;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
