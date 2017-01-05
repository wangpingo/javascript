/**
 * Created by 35031 on 2017/1/4.
 */
$(document).ready(function () {
    // $('#clickMeBtn').click(function () {
    //    alert("hello");
    // });
    $('#clickMeBtn').bind('click',clickHandler1);
    $('#clickMeBtn').bind('click',clickHandler2);
});
function clickHandler1(e) {
    console.log('clickHandle1');
}
function clickHandler2(e) {
    console.log('clickHandle1');
}
//on off