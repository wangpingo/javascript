/**
 * Created by 35031 on 2016/11/29.
 */
function triangleType(a, b, c) {
    var triangleArr = [a, b, c];
    triangleArr.sort(function (a, b) {
        return a - b;
    });
    if (triangleArr[2] < triangleArr[1] + triangleArr[0]) {
        var fAngle=triangleArr[0]*triangleArr[0]+triangleArr[1]*triangleArr[1]-triangleArr[2]*triangleArr[2];
        if (fAngle>0)return 1;
        if (fAngle==0)return 2;
        if (fAngle<0)return 3;
    }
    return 0;

}
console.log(triangleType(9, 3, 2));
console.log(triangleType(2, 4, 6));
console.log(triangleType(8, 5, 7));
console.log(triangleType(3, 4, 5));
console.log(triangleType(7, 12, 8));
