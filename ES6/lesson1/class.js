/**
 * Created by 35031 on 2016/12/17.
 */
'use strict';
// function User(name,age) {
//     this.name=name;
//     this.age=age;
// }
class User{
    constructor(name,age){
        this.age=age;
        this.name=name;
    }
// //静态方法
// User.getClassName=function () {
//     return 'User';
// };
    static getClassName(){
        return 'User';
    }
// User.prototype.changeName=function (name) {
//     this.name=name;
// };
    changeName(name) {
    this.name=name;
};
// User.prototype.changeAge=function (age) {
//     this.age=age;
// };
    changeAge(age) {
    this.age=age;
};
    get info(){
        return 'name:'+this.name+'| age'+this.age;
    }
// Object.defineProperty(User.prototype,'info',{
//     get(){
//         return 'name:'+this.name+'| age'+this.age;
//     }
// });
// Manager.__proto__=User;//继承静态方法
// Manager.prototype=User.prototype;
// Manager.prototype.changePassword=function (pwd) {
//     this.password=pwd;
// };
}
// function Manager(name,age,password) {
//     User.call(this,name,age);
//     this.password=password;
// }
class Manager extends User{
    constructor(name,age,password){
        super(name,age);
        this.password=password;
    }

    changePassword(password){
        this.password=password;
    }
}
var manager=new Manager('leo',22,'123');
manager.changeName('zen ling');
console.log(manager.name);

console.log(manager.info);
console.log(manager);
// info 方法好用哈哈