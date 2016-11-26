/**
 * Created by 35031 on 2016/11/26.
 */
//3.	在一个字符串中找到第一个只出现一次的字符。如输入abaccdeff，则输出b。
function check(str) {
    var newArr=[];
    for (var i=0;i<str.length;i++){
        var n=0;
        for (var j=0;j<str.length;j++){
            if (str[i]==str[j]){
                n++;
            }
        }
        var elem={};
        elem.index=i;
        elem.num=n;
        newArr.push(elem);
    }
   for (var i=0;i<newArr.length;i++){
        if (newArr[i].num==1){
            console.log(str[newArr[i].index])
        }
   }
}
check("abaccdeff");