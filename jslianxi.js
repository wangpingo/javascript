/**
 * Created by 35031 on 2016/11/6.
 */
var o={
    name:"lili",
    age:18
};
Object.prototype.getName=function(){
    return this.name;
};
o.getAge=function(){
    return this.age;
};
console.log("a.getage  "+ o.getAge());
for(var prop in o){

    if(o.hasOwnProperty(prop)){
        console.log("o["+prop+"]:"+o[prop]);
    }
}
console.log("~~~~~~~~~~~~~~~~~~~~~~")
o.undefined ='undefined';
o.null = 'null';
console.log(o);
console.log(o.toString());
console.log(o.valueOf());

for(var test in o){
    if(o.hasOwnProperty(test)){
        console.log("o["+test+"]= "+o[test]);
    }
}
o=undefined; //o=null;
console.log("~~~~~~~~~~~~");
for(var test in o){
    if(o.hasOwnProperty(test)){
        console.log("o["+test+"]= "+o[test]);
    }
}
var a = [26,'hellworld',"ne"];
for(var pro in a){
    console.log("a["+pro+"]="+a[pro]);
}
a.getName();
console.log("~~~~~~~~~~~~");
//function keys(obj){
//    var aRaa = [];
//    var i=0;
//    for(aRaa[i++] in obj);
//       return aRaa;
//}
console.log("$$$$$$$$$$$$$$$$$$4");
function keys(obj){
    var aRaa = [];
    var i=0;
    for(aRaa[i++] in obj){};
    return aRaa;
}
console.log("keys(o)");
console.log(keys(o));
a.index = a.length;
console.log(a+"a");
console.log(keys(a)+"keys(a)");