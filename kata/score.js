/**
 * Created by 35031 on 2016/12/1.
 */
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point
function score(arr) {
    var moudelJson = {
        "1": 1000,
        "6": 600,
        "5": 500,
        "4": 400,
        "3": 300,
        "2": 200,
        "one1": 100,
        "one5": 50
    };
    var sum = 0;

    var res = {};
    for (var i = 0; i < arr.length; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }
    }
    for (var key in res) {


            if (res[key] >= 3) {  // key =4

                sum += moudelJson[key];
            }
            if (key == 1 || key == 5) {               // 2个1
                sum += moudelJson['one' + key] * (res[key]-3>0?res[key]-3:res[key]);
            }
            if (res[key]==4){

            }
        }

    return sum;
};
console.log(score([1, 1, 1, 3, 1]));

