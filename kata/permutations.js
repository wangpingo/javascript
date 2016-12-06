/**
 * Created by 35031 on 2016/12/5.
 */
// [1,2,3,4]
// [a,a,b,b]
function permutations(string) {
    var newArr=[];
    var str = string.split('').map((x,v)=>x=v+1);//[1,2,3,4]
    var count = 0;
    function arrange(s){
        for(var i=0,length=str.length; i<length; i++) {
            if(s.length == length - 1) {
                if(s.indexOf(str[i]) < 0) {
                    count++;
                    s=s+str[i];
                    var ns='';
                    for (var i=0;i<s.length;i++){
                        ns+=string[s[i]-1];
                    }
                    newArr.push(ns);
                }
                continue;
            }
            if(s.indexOf(str[i]) < 0) {
                arrange(s+str[i]);
            }
        }
    }
    arrange("");
    newArr.sort();
    for (var i=0;i<newArr.length-1;i++){
        if(newArr[i]==newArr[i+1]){
            newArr.splice(i,1);
            i=-1;
        }
    }
    return newArr;
}
function permutations(string) {
    var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
    if(string.length == 1) return [string];
    arr.forEach(function(v, i, arr) {
        if(heads.indexOf(v) == -1) {
            heads.push(v);
            tmp.splice(tmp.indexOf(v), 1);
            permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
            tmp.push(v);
        }
    });
    return out;
}
// console.log(permutations('a')); // ['a'] 1
// console.log(permutations('ab')); // ['ab', 'ba'] 12 21
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']1234 1324
//1234 1243 1324 1342 1423 1432  4*3*2