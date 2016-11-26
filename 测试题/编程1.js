/**
 * Created by 35031 on 2016/11/26.
 */
/**
 * Created by 35031 on 2016/11/26.
 */
// 1.	定一个函数test(n,m)
//      n>1,m>n,返回n到m之间的所有回文数。
//      （回文数是正读和反读相同的数，例如 121，1001,…）。
function test(n,m) {
    var arr=[];
    var newArr=[];
    var k=0;
    for (n+=1;n<m;n++) {
        var str = new String(n);
        for (var i = 0; i < parseInt(str.length / 2); i++) {
            if (str.length == 1 || arr[i] == arr[str.length/2 + 1])
                k++;
        }
        if (k==(parseInt(str.length/2)+1)){
            newArr.push(n);
        };
    }
    return newArr;
}
console.log(test(1,100));