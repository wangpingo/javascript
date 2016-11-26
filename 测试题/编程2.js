/**
 * Created by 35031 on 2016/11/26.
 */
//2.	有一行单词，空格为单词间的间隔，找出其中最长的单词和最短的单词
function checkLength(str) {
    var arr=[];
    arr=str.split(' ');
    var newArr=[];
    for (var i=0;i<arr.length;i++){
            var elem={};
             str=new String(arr[i]);
             elem.length=str.length;
             elem.index=i;
             elem.toString=function () {
                 return this.length;
             };
            newArr.push(elem);
    }
    newArr.sort(function (a,b) {
        return a-b;
    });
    console.log(arr[newArr[0].index]);
    console.log(arr[newArr[newArr.length-1].index]);
}
checkLength("aaa aa Thisa");