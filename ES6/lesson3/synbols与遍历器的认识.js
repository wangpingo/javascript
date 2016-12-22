/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
let name=Symbol('name');
let name2=Symbol('name');
let name3=2;
var obj={
    name:'leo',
    'my name':'gaoquankang'
};
obj.name;

    obj['my name'];
console.log(name===name2);
let obj1={
    [name](){
        return 'gaoquankang';
    },
    [name3](){
        return 'gaoquankang';
    }
};
console.log(obj1[name3]());