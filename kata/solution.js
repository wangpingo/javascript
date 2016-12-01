/**
 * Created by 35031 on 2016/12/1.
 */
function solution(str) {
    var newArry=[];
    if (str.length%2==0){
        for (var i=0;i<str.length;i+=2){
            var strSplit=str[i]+str[i+1]
            newArry.push(strSplit);
        }
        return newArry;
    }else {
        str+='_';
        for (var i=0;i<str.length;i+=2){
            var strSplit=str[i]+str[i+1]
            newArry.push(strSplit);
        }
        return newArry;
    }
}
solution('abcda');

