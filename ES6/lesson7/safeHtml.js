/**
 * Created by 35031 on 2017/1/2.
 */
'use strict';
function safe(strArr) {
    let result='';
    for (var i=0,len=strArr.length;i<len;i++){
        result +=strArr[i];
        if (i<arguments.length-1){
            result+=arguments[i+1];
        }
    }
    return result;
}
let name='montel';
let result=safe`<p>hello ${name}</p>`;
console.log(result);