/**
 * Created by 35031 on 2016/12/5.
 */
function permutations(string) {
    var str = [1,2,3,4,5];
    var count = 0;
    function arrange(s){
        for(var i=0,length=str.length; i<length; i++) {
            if(s.length == length - 1) {
                if(s.indexOf(str[i]) < 0) {
                    count++;
                    console.log("组合"+count+"="+s + str[i]);
                }
                continue;
            }
            if(s.indexOf(str[i]) < 0) {
                arrange(s+str[i]);
            }
        }
    }
    arrange("");
}
permutations('a'); // ['a'] 1
// permutations('ab'); // ['ab', 'ba'] 12 21
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']1234 1324
//1234 1243 1324 1342 1423 1432  4*3*2