/**
 * Created by 35031 on 2016/11/24.
 */
//回调函数的优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，
// 各个部分之间高度耦合（Coupling），
// 流程会很混乱，而且每个任务只能指定一个回调函数
// function f1(callback) {
//     console.log('f1');
//     setTimeout(function () {
//         callback&&callback();
//     },2000)
// }
// function f2() {
//     console.log('f2');
// }
// f1(f2);
// f1.on('done',f2);
// function f2() {
//     console.log('f2');
// }
// function f1() {
//     setTimeout(function () {
//         f1.trigger('done');
//     },1000)
// }
// jQuery.subscrible('done',f2);
// function f1() {
//     setTimeout(function () {
//         jQuery.push("done")
//     },1000)
// }
//PROMISE
// function f1(){
//     var dfd = $.Deferred();
//     setTimeout(function () {
//         // f1的任务代码
//         dfd.resolve();
//     }, 500);
//     return dfd.promise;
// }
// f1().then(f2);