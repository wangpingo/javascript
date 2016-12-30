/**
 * Created by 35031 on 2016/12/30.
 */
'use strict';
class A{
    constructor(){
        this.name='leo';
    }
    getName(){

    }
}
class B extends A{
    constructor(){
        super();
        this.age=22;
    }
    getAge(){

    }
    [Symbol('filename')](){

    }
}
B.prototype.getClass=function () {
    
};
var b=new B;
//Object.keys得到自身可枚举的属性，但是得不到原型链上的属性；
console.log(Object.keys(B.prototype));// name ,age
//能够得到自身属性，包括不可枚举的属性，但是得不到原型链上的属性
console.log(Object.getOwnPropertyNames(B.prototype));
console.log(Object.getOwnPropertySymbols(B.prototype));
for (let key in b){
    console.log(key);
}
console.log(Object.getOwnPropertyDescriptor(B.prototype,'getClass'));











