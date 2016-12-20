/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
var obj={
  length:2,
    '0':'abc',
    '1':'ddd'
};

obj[Symbol.iterator]=[][Symbol.iterator];
for (let i of obj){
    console.log(i);
}