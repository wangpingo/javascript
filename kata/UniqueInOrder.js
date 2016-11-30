/**
 * Created by 35031 on 2016/11/21.
 */
//Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'),
// ['A','B','C','D','A','B'])
// function uniqueInOrder(str) {
//     var aStr = str.split('');
//     var newStr=[];
//     var compare;
//     var iCompare=0;
//     var istart=0;
//     compare = aStr[0];
//     newStr.push(compare);
//     do {
//         toCompare(istart,aStr)
//     }while (iCompare!=aStr.length);
//     function toCompare(start,aStr) {
//         for (var i=start;i<aStr.length;i++){
//             iCompare++;  //4,
//             if (compare==aStr[i]){
//                 continue;
//             }
//             compare=aStr[i];//B
//             newStr.push(compare);//['A','B']
//             break;
//         }
//         istart=i+1;
//     }
//    return newStr;
// };
function uniqueInOrder(str) {
    if (str instanceof Array){
        for (var i=0;i<str.length;i++){
            if(str[i]==str[i+1]){
                str.splice(i,1)
                i=-1;
            }
        }
        return str ;
    }else {
        var newArry=str.split('');
        for (var i=0;i<newArry.length;i++){
                if(newArry[i]==newArry[i+1]){
                    newArry.splice(i,1);
                    i=-1;
            }
        }
         return newArry;
    }
}
uniqueInOrder('AAAABBBCCDAABBB');
uniqueInOrder([0,1,1,2]);
// var i=0;
// do {
//     i++;
//     console.log(i);
// }while (i!=14);

