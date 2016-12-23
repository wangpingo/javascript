/**
 * Created by 35031 on 2016/12/23.
 */
'use strict';
function *fn() {
    yield 1;
    yield 2;
    yield 3;
}
//generator 函数返回的是一个指针
let it=fn();
//it.next();
// let result=it.next();
// console.log(result);
for (let v of it){
    console.log(v);
}