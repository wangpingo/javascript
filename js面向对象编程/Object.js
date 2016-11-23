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
    age:18,
    getName:function () {
        return this.name
    }
};
console.log(person1.getName());