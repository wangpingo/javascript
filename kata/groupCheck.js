/**
 * Created by 35031 on 2016/11/29.
 */
function groupCheck(s) {
    var arr = s.split('');
    if (arr.length % 2 == 0) {
        for (var i = 0; i < arr.length/2; i++) {

            if((arr.length - 2 - i-i)%2!=0) return false;

            switch (arr[i]) {
                case '(':
                    if (arr[(arr.length - 1 - i)] != ")")
                        return false;
                    break;
                case '{' :
                    if (arr[(arr.length - 1 - i)] != "}")
                        return false;
                    break;
                case '[' :
                    if (arr[(arr.length - 1 - i)] != "]")
                        return false;
                    break;
                default:
                    return false;
                    break;
            }
        }
        return true;
    } else {
        return false;
    }

}
// console.log(groupCheck('()'));
// console.log(groupCheck('{(})'));
// console.log(groupCheck('[])'));
// console.log(groupCheck('({})'));
console.log(groupCheck('[[]()]'));
// console.log(groupCheck('[{()}]'));


