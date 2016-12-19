/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
let name=Symbol('name');
let obj={
    age:22,
    [name]:'leo'
};
// console.log(Object.keys(obj));
// for (let k in obj){
//     console.log(k);
// }
// for (let k=0;k<2;k++){
//
// }
// let k=1;
// if (k==1){
//     console.log(k)
// }
// console.log(k);
// console.log(Object.getOwnPropertyNames(obj));
let key=console.log(Object.getOwnPropertySymbols(obj))[0];
