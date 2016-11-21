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
    var istart=0;
    compare = aStr[0];
    newStr.push(compare);
    do {
        toCompare(istart,aStr)
    }while (iCompare!=aStr.length);
    function toCompare(start,aStr) {
        for (var i=start;i<aStr.length;i++){
            iCompare++;  //4,
            //console.log(iCompare);
            if (compare==aStr[i]){
                //console.log(aStr[i]);
                continue;
            }
            compare=aStr[i];//B
            //console.log(compare);
            newStr.push(compare);//['A','B']
            break;
        }
        istart=i+1;
    }
   return newStr;
};
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
