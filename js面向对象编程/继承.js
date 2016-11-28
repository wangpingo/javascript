/**
 * Created by 35031 on 2016/11/25.
 */
//对象之间的五种继承方法
// function Animal(args) {
//     this.species='动物';
//     // this.args=args;
// }
// function Animal() {
// }
// Animal.prototype.species="动物";
// function Cat(name,color) {
//     this.name=name;
//     this.color=color;
// }
//一。构造函数绑定
// function Cat(name,color) {
//     Animal.call(this,"4");
//     // Animal.apply()
//     this.name=name;
//     this.color=color;
// }
// var cat1=new Cat('大猫',"黄色");
// console.log(cat1.species);
// console.log(cat1.args);
//二。prototype
// Cat.prototype=new Animal();
// Cat.prototype.constructor=Cat;
//
// var cat1=new Cat('大猫','黄色');
// console.log(cat1.constructor == Cat.prototype.constructor); // true)
// console.log　(cat1.constructor == Animal);
// console.log(cat1.species);

//三。直接继承prototype
// 与前一种方法相比，这样做的优点是效率比较高（不用执行和建立Animal的实例了），比较省内存。缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，
// 那么任何对Cat.prototype的修改，都会反映到Animal.prototype。

// Cat.prototype=Animal.prototype;
// Cat.prototype.constructor=Cat;
// var cat1=new  Cat('大猫','黄色');
// console.log(cat1.species);
//利用空对象作为中介
// var F=function () {
//
// };
// F.prototype=Animal.prototype;
// Cat.prototype=new F();
// Cat.prototype.constructor=Cat;
// function extend(Child, Parent) {
//
//     var F = function(){};
//     F.prototype = Parent.prototype;
//     Child.prototype = new F();
//     Child.prototype.constructor = Child;
//     Child.uber = Parent.prototype;
// }
//拷贝继承
// function extend2(Child, Parent) {
//     var p = Parent.prototype;
//     var c = Child.prototype;
//     for (var i in p) {
//         c[i] = p[i];
//     }
//     // c.uber = p;
// }
// extend2(Cat, Animal);
// var cat1 = new Cat("大毛","黄色");
// console.log(cat1.species); // 动物
//非构造函数继承
//一，object方法
var Chinese={
    nation:'中国'
};
// var Doctor={
//     carrer:'医生'
// };
// function object(o) {
//     function F() {
//     }
//     F.prototype=o;
//     return new F();
// }
// var Doctor=object(Chinese);
// Doctor.carrer='医生';
// console.log(Doctor.carrer)
//浅拷贝
function extendCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}
var Doctor = extendCopy(Chinese);
Doctor.career = '医生';
console.log(Doctor.nation); // 中国
//四、深拷贝
//所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷
//贝。它的实现并不难，只要递归调用"浅拷贝"就行了。
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}
var a=[];
console.log(typeof a);