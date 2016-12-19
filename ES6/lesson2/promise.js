/**
 * Created by 35031 on 2016/12/19.
 */
function asyncFun() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(a+b);
        },200)
    });
}
asyncFun(1,2)
    .then(function (result) {
    if (result>2){
        return asyncFun(result,2);
    }
});