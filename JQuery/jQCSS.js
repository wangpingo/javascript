/**
 * Created by 35031 on 2017/1/5.
 */
$(document).ready(function () {
    // $('div').css('width','100px');
    // $('div').css('height','100px');
    // $('div').css('background','red');
    // $('div').css({
    //     width:'100px',
    //     height:'100px',
    //     background:'red`'
    // });
    $('div').addClass('style1');
    $('div').click(function () {
        $(this).addClass('style2');
    });
});
