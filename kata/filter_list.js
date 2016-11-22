/**
 * Created by 35031 on 2016/11/22.
 */
function filter_list(l) {
    var newStr=[];
    for (var i=0;i<l.length;i++){
        if (l[i]=="0"||parseInt(l[i])){
            console.log(parseInt(l[i]));
            if (newStr.indexOf(parseInt(l[i]))==-1)
            newStr.push(parseInt(l[i]));
        }
    }
    return newStr;
}
console.log(filter_list(["1","2","aasf","123",123]));