/**
 * Created by 35031 on 2016/11/30.
 */
function removeSmallest(numbers) {
    if (numbers.length==0){
        return [];
    }else {
    var iMin=numbers[0];
    for (var i=1;i<numbers.length;i++){
            if (iMin>numbers[i]) iMin=numbers[i];
  }
  for (var i=0;i<numbers.length;i++){
        if (numbers[i]==iMin) {
            numbers.splice(i,1);
            return numbers;
        }
  }}
};
console.log(removeSmallest([]));