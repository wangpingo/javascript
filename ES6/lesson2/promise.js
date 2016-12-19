/**
 * Created by 35031 on 2016/12/19.
 */
function asyncFun(a,b) {
    return new Promise(function (resolve,reject) {
        if (typeof a !=='number'||typeof b !=='number'){
            console.log(typeof a,typeof b);
            reject(new Error('not  number'));
        }
        setTimeout(function () {
            resolve(a+b);
        },200)
    });
}
asyncFun(1,2)
    .then(function (result) {
    if (result>2){
        return asyncFun(result,2);
    }})
    .then(function (result) {
            if (result>4){
                console.log('ok');
            }
        })
    .catch(function (error) {
        console.log(error);
    });
