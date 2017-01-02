/**
 * Created by 35031 on 2017/1/2.
 */
'use strict'
function tag(strArr,arg,arg1) {
    //return 'what? '+arguments[0]+arguments[1];
    console.log(strArr);
    console.log(arg);
    console.log(arg1);
    console.log(arguments[0]+arguments[1]);
}
let name='montel';
let name1='montell';
var result=tag`  1${name} 2${name1}3`;
//console.log(result);