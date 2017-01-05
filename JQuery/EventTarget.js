/**
 * Created by 35031 on 2017/1/4.
 */
$(document).ready(function () {
    $('body').bind('click',bodyHandle);
    $('div').bind('click',divHandler1);
    $('div').bind('click',divHandler2);
});
function bodyHandle(event) {
    console.log(event);
}
function divHandler1(event) {
    console.log(event);
    // event.stopPropagation();
    event.stopImmediatePropagation();
}
function divHandler2(event) {
    console.log(event);
}