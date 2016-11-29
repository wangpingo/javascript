/**
 * Created by 35031 on 2016/11/29.
 */
function triangleType(a, b, c) {
    var triangleArr = [a, b, c];
    triangleArr.sort(function (a, b) {
        return a - b;
    });
    if (triangleArr[2] > triangleArr[1] + triangleArr[0]) {
        //cosA=[b²＋c²－a²]/(2bc)cosB=[a²＋c²－b²]/(2ac)cosC=[a²＋b²－c²]/(2ab)
        var fAngle=triangleArr[0]*triangleArr[0]+triangleArr[1]*triangleArr[1]-triangleArr[2]*triangleArr[2];
        if (fAngle>0)return 1;
        if (fAngle=0)return 2;
        if (fAngle<0)return 3;
    }
    return 0;
}
triangleType(9, 3, 2);
triangleType(2, 4, 6);
triangleType(8, 5, 7);
triangleType(3, 4, 5);
triangleType(7, 12, 8);
