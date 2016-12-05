/**
 * Created by 35031 on 2016/12/5.
 */
// function tripledouble(num1,num2) {
//     var str1=num1.toString();
//     var str2=num2.toString();
//     var triple=[];
//     var double;
//     for (var i=0;i<str1.length-2;i++){
//         if(str1[i]==str1[i+1]&&str1[i]==str1[i+2]){
//            triple.push(str1[i]);
//         }
//     }
//     if (triple.length>0){
//         for (var i=0;i<triple.length;i++){
//             double=triple[i]+triple[i];
//             if (str2.indexOf(double)>-1)return 1;
//         }
//     }
//
//     return 0;
//
// }
function tripledouble(num1, num2) {
    for (var i = 0; i < 10; i++) {
        if (String.prototype.indexOf.call(num1, "" + i + i + i) >= 0 && String.prototype.indexOf.call(num2, "" + i + i) >= 0) {
            return 1
        }
    }
    return 0
}
// var str1='aaaaa';
// console.log(String.prototype.indexOf.call(str1,'aa'));
console.log(tripledouble(451999277, 41177722899) == 1) ;// num1 has straight triple 999s and// num2 has straight double 99s

console.log(tripledouble(1222345, 12345) == 0) ;// num1 has straight triple 2s but num2 has only a single 2

console.log(tripledouble(12345, 12345) == 0);

console.log(tripledouble(666789, 12345667) == 1);
//call apply 的用法
//