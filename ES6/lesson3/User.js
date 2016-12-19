/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
let getName=Symbol('getName');
module.exports=class User{
    [getName](){
        return 'gaoquankang';
    }
    print(){
        console.log(this[getName]());
    }
};
// let user=new User();
// user.print();
// user[getName]();