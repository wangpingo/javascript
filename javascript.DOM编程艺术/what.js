/**
 * Created by 35031 on 2016/11/25.
 */
//
// console.log(a);
// var a=1;
// console.log(a);
// console.log(a);
// function a (){ alert(4); }
// var a = 1;
// console.log(a);
// function a (){ alert(3); }
// console.log(a);
// a();
function f1(){
    var n=999;
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 999
f1()();