/**
 * Created by 35031 on 2016/12/19.
 */
/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
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
                if (password==='123'){
                    resolve('sucess');
                }else {
                    reject('error')
                }
            });
        });
    }
}
var user=new User('leo1','123');
// user.send().then(function (success) {
//     console.log(success);
// }).catch(function (err) {
//     console.log(err);
// });
user.validateName()
    .then(function (result) {
        throw new Error('error');
        return user.validatePassword();
    },function (err) {
        console.log(err);
    })
    .then(function (result) {
        console.log('验证成功！')
    })
    .catch(function (err) {
        console.log(err,'用户名或密码错误！');
    });