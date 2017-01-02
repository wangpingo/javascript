/**
 * Created by 35031 on 2017/1/2.
 */
'use strict';
var obj={};
console.log(obj.__proto__);
class User{
    constructor(){

    }
}
var user=new User();
console.log(user.__proto__===User.prototype);
console.log(User.prototype);
var p={
    getName(){}
};
user.__proto__=p;
console.log(user.getName);
Object.setPrototypeOf(user,p);
console.log(Object.getPrototypeOf(user));