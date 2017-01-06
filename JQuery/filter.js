/**
 * Created by 35031 on 2017/1/5.
 */
$(document).ready(function () {
    $('#div p').first().css('background','red');
    $('#div p').last().css('background','red');
    $('#div p').eq(0).css('background','red');
    $('#div p').filters('p').css('background','red');//标准
    $('#div p').not('p').css('background','red');//非标准

});