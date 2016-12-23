/**
 * Created by 35031 on 2016/12/23.
 */
'use strict';
function asyncF(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('My name is '+name);
        });
    });
}
function sum(a,b) {
     return new Promise(function (resolve) {
         setTimeout(function () {
             resolve (a+b);
         })
     })
}
function *fn(name) {
    if ((yield sum(3,5))>6){
        console.log(yield asyncF(name) );
    }else {
        console.log('error');
    }
}
// function *fn() {
//     console.log(yield asyncF('leo'));
//     console.log(1);
// }
let gf=fn('gaoquankang');
function exec(gf,value) {
    let result=gf.next(value);
    console.log(result);
    if (!result.done){
        if (result.value instanceof Promise){
            result.value.then(function (v) {
                exec(gf,v);
            })
        }else {
            exec(gf,result.value);
        }
    }
}
exec(gf);