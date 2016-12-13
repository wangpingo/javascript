/**
 * Created by 35031 on 2016/12/13.
 */
function dblLinear(n) {
    var ai = 0, bi = 0, eq = 0;
    var sequence = [1];
    while (ai + bi < n + eq) {
        var y = 2 * sequence[ai] + 1;
        var z = 3 * sequence[bi] + 1;
        if (y < z) { sequence.push(y); ai++; }
        else if (y > z) { sequence.push(z); bi++; }
        else { sequence.push(y); ai++; bi++; eq++; }
    }
    return sequence.pop();
}
console.log(dblLinear(10));
console.log(dblLinear(20));
console.log(dblLinear(30));
