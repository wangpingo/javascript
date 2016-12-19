/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
function asyncFun(a,b,time) {

    return new Promise(function (resolve,reject) {
        if (typeof a!='number' || b!='number'){
            reject(new Error('not  number'));
        }
        setTimeout(function () {
            resolve(a+b);
        },time)
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
// var promise=Promise.all([asyncFun(1,2),asyncFun(2,3),asyncFun(1,22)]);

var promise1=Promise.race([asyncFun(1,2,60),asyncFun(2,3,20),asyncFun(1,22)]);
promise1.then(function (result) {
    console.log(result);
},function (err) {
    
});