/**
 * Created by 35031 on 2016/11/21.
 */
//Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'),
// ['A','B','C','D','A','B'])
function uniqueInOrder(str) {
    var aStr = str.split('');
    var newStr=[];
    var compare;
    var iCompare=0;
    compare = aStr[0];
    newStr.push(compare);
    do {
        toCompare(toCompare(0,aStr),aStr)
    }while (iCompare!=aStr.length);
    function toCompare(start,aStr) {
        for (var i=start;i<aStr.length;i++){
            iCompare++;
            if (compare==aStr[i]){
                continue;
            }
            compare=aStr[i];
            newStr.push(compare);
            break;
        }
        return i;
    }
    console.log(newStr);
};
uniqueInOrder('AAAABBBCCDAABBB');
