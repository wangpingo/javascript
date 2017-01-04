/**
 * Created by 35031 on 2017/1/3.
 */
//caller 返回一个函数的引用，callee返回正在执行函数本身的引用,它是arguments的一个属性
//使用这个属性的要注意：
//这个属性只有当函数执行时才有用，如果在javascript程序中，函数室友顶层调用的，则返回null
var a=function () {
    console.log(a.caller);
};
var b=function () {
    a();
};
b();
a();
//callee放回正在执行的函数本身的引用，它是arguments的一个属性
//使用callee时要注意：
//这个属性只有在函数执行时才有效
//他有一个length属性，可以用来获得形参的个数，因此可以用来比较形参和实参个数属否一致arguments.length=arguments.callee.length
