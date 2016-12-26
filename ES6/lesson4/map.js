/**
 * Created by 35031 on 2016/12/26.
 */
'use strict';
// var obj1={
//     'name':'leo',
//     'qq':'1593894520',
//     'full_name':'zeng liang'
// };
// var obj={
//   name:12
// };
 let map=new Map();
// map.set(obj,'very good');
let v=map.set('nam','dddd');
let h=map.set('namm','ddsdd');

// // console.log(v);
var me={
    'name':'qq'
};
map.forEach(function (v,k) {
    console.log(this.name,v,k);
},me);