/**
 * Created by 35031 on 2016/12/19.
 */
'use strict'
class User{
    constructor(name,password){
        this.name=name;
        this.password=password;
    }
    validateName(cb){
        let name=this.name;
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                if (name==='leo'){
                    resolve('sucess');
                }else {
                    reject('error')
                }
            });
        });
    }
    validatePassword(cb){
        let password=this.password;
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                if (name==='123'){
                    resolve('sucess');
                }else {
                    reject('error')
                }
            });
        });
    }
}
var user=new User('leo','123');
// user.send().then(function (success) {
//     console.log(success);
// }).catch(function (err) {
//     console.log(err);
// });