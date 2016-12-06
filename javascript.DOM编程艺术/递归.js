/**
 * Created by 35031 on 2016/12/6.
 */
var newArr=[];
function digui(s,str) {
    for (var i=0;i<str.length;i++){
        s+=str[i];
        str=str.replace(str[i],'');
        if (str.length==0){
            newArr.push(s);
        }else {
            digui(s,str);
        }

    }
} 
digui('','ab');
console.log(newArr);