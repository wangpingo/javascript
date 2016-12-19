/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
let arr=['a','b','c'];
// console.log(arr[Symbol.iterator]());
var iterator=arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
for (let item of arr)
    console.log(item);