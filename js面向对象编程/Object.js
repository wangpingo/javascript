/**
 * Created by 35031 on 2016/11/23.
 */
//一，理解对象
//第一种：基于Object对象
var person = new Object();
person.name = 'My name';
person.age = 18;
person.getName = function () {
    return this.name;
};
console.log(person.getName());
//第二种:对象字面量的方式
var person1 = {
    name: 'My name',
    age: 18,
    getName: function () {
        return this.name
    }
};
console.log(person1.getName());
person1.newAtt = 'new Att';
console.log(person1.newAtt);
delete person1.age;
console.log(person1.age);
// 对象属性类型
var dog = {};
Object.defineProperty(dog, 'name', {
    configurable: false, //能否使用delete操作符删除
    writable:false,//是否可修改属性值
    value:'Jack'
});
dog.name="My name";
console.log(dog.name);
delete dog.name;
console.log(dog.name);
var person2={
    age:18
};
Object.defineProperty(person2,'isAdult',{
    get:function () {
        if (this.age>=18){
            return true;
        }else {
            return false;
        }
    }
});
console.log(person2.isAdult?'成年':'未成年');
// 创建对象
// 1.使用Object构造函数或对象字面量都可以创建对象，
// 2.但缺点是创建多个对象时，会产生大量的重复代码，
// 3.因此下面介绍可解决这个问题的创建对象的方法
//一，工厂模式
function creatPerson(name,age,job) {
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.getName=function () {
        return this.name;
    }
    return o;
}
var person=creatPerson('jack',19,'softWare Engineer');
//二，构造函数模式
function Cat(name) {
    this.name=name;
    this.getName=function () {
        return this.name;
    }
    // this.getName = new Function() {//改写后效果与原代码相同，不过是为了方便理解
    //     return this.name;
    // }
    this.getName3=getName3;
}
function getName3() {
    return this.name;
}
var cat1=new Cat('jack');
var cat2=new Cat('liye');
console.log(cat1.constructor==cat2.constructor);
console.log(cat1.getName3());
//3.原形模式
//JS每个函数都有一个prototype属性，这个属性是一个指针，指向一个对像，它是通过new
//new操作符使用函数创建的实例的原型对象。原型对象的特点是，所有对象实例共享它所包含的属性和方法
//,也就是说，所有在原型对象中创建的属性和方法都直接被所有的对象实力共享

function People() {
}
People.prototype.name='jack';
People.prototype.getName=function () {
    return this.name;
};
var people1=new People();
var people2=new People();
console.log(people1.getName()===people2.getName());
//原型模式的缺点·它省略了为构造函数传递初始化数据参数，这在一定的程序中带来不变；
//另外当对象的属性是引用时，它的值是不变的，总是引用同一个外部对象，所有实例都会通过该
// 操作影响其他实例
//4，目前最为常用的定义类型方式是组合构造函数和原型模式。构造函数用于定义实例的属性，而原型模式用于定义方法和共
// 享的属性。结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方方法的引用，最大限度的
// 节约内存，此外组合模式还支持向构造函数传递参数，可谓及两家之长
function Persons(name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.lessons=['Math','physics'];
}
Persons.prototype={
    construct:Persons,
    getName:function () {
        return this.name;
    }
};
var persons=new Persons('Jack',19,'Software Engneer');
persons.lessons.push('BiuBiu');
var personss=new Persons('Lily',18,'Apple Engneer');
console.log(persons.lessons);
console.log(personss.lessons);
console.log(persons.getName===personss.getName);
console.log(persons.getName());
//JQuery类型的库使用组合模式的实例
//动态原型模式
//组合模式中实例属性与共享方法（有原型定义）是分的；这与面向对象语言不太不一致；动态原型模式
// 将所有构造信息都封装在构造函数中，又保持组合的优点。其原理就是通过判断构造函数中是否已经定义了
//共享的方法和属性，如果没有则定义。否则不再执行定义过程。该方式只原型上方法或属性只定义
// 一次，将所有的构造过程都封装在构造函数中，对原型所做的修改能立即体现在所有实例中
function Pers(name,age,job) {
    this.name=name;
    this.job=job;
    this.age=age;
    this.lessons=['Math','Physics'];

if (typeof this.getName!='function'){
    Pers.prototype={
        construct:Pers,
        getName:function () {
            return this.name;
        }
    }
}
}
var pers1 = new Pers('Jack', 19, 'SoftWare Engneer');
pers1.lessons.push('Biology');
var pers2 = new Pers('Lily', 39, 'Mechanical Engneer');
console.log(pers1.lessons);//Math,Physics,Biology
console.log(pers2.lessons);//Math,Physics
console.log(pers1.getName === pers2.getName);//true,//共享原型中定义方法