/**
 * Created by 35031 on 2017/1/2.
 */
// setTimeout(function () {
// //n=>{}
// },1000);
//箭头函数中this不可变
'use strict';
// function TesThis() {
//     this.name
// }
//箭头函数没有arguments属性
class User{
    constructor(){
        this.name=name;
    }
    changeName(name){
        this.name=name;
    }
    changeAge(age){
        this.age=age;
    }
    change(name,age){
        let fn=()=>{
            this.changeName(name);
            this.changeAge(age);
        };
        fn();
    }
}

