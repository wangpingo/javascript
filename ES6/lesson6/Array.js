/**
 * Created by 35031 on 2016/12/26.
 */
// Array.form      //类似数组的数据结构转换为数组
// Array.of        //通过多个参数生成数组
// [].copyWithin(target,start,end);  //通过自身数据，在指定位置 替换数据
// [].find   [].findIndex()    //
// [].fill
    'use strict';
var arr=Array.from({
    '0':'qq 1593894520',

    '1':'leo',
    'length':2
},function (item,index) {
    return item+'----'+index;
});
console.log(arr);
var arr1=[1,2,3,4,5,6,7];
arr1.copyWithin(1,5,7);
console.log(arr1);
arr.fill(10);
console.log(arr);