/**
 * Created by 35031 on 2017/1/4.
 */
$(document).ready(function () {
    $('#clickMeBtn').click(function () {
        $('#clickMeBtn').trigger(jQuery.Event('MyEvent'));
    })
    $('#clickMeBtn').bind('MyEvent',function (event) {
        console.log(event);
    });
});