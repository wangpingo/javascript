/**
 * Created by 35031 on 2016/11/26.
 */
//1.请填充代码，使mySort()能使传入的参数按照从小到大的顺序显示出来。
function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    for (var i=0;i<arguments.length;i++){
        tags[i]=arguments[i];
    }
    tags.sort(function (a,b) {
        return a-b;
    });
    return tags;//返回已经排序的数组
}
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.log(result);//显示结果
