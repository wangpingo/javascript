/**
 * Created by 35031 on 2016/11/21.
 */
//Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'),
// ['A','B','C','D','A','B'])
function uniqueInOrder(str) {
    var aStr = str.split('');
    var newStr=[];
    var compare;
    var iCompare=1;
    compare = aStr[0];
    newStr.push(compare);
    toCompare(aStr);
    function toCompare(aStr) {
        for (var i=0;i<aStr.length;i++){
            if (compare==aStr[i]){
                continue;
            }
            compare=aStr[i];
            iCompare=i;
            newStr.push(compare);
            break;
        }
        return
    }
};
uniqueInOrder('AAAABBBCCDAABBB');