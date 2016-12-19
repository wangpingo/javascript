/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
function asyncFun(a,b) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(a+b);
        },200)
    });
}
// var resultList=[];
// asyncFun(1,2)
// .then(function (result) {
//     resultList.push(result);
// })
// .then(function (result) {
//     resultList.push(result);
// });
var promise=Promise.all([asyncFun(1,2),asyncFun(2,3),asyncFun(1,22)]);
promise.then(function (result) {
    console.log(result);
});