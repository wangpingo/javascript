/**
 * Created by 35031 on 2017/1/5.
 */
$(document).ready(function () {
    $('h4').siblings().css({border:'3px solid #ff0000'});//修改统计的所有
    $('h4').next().css({border:'3px solid #ff0000'});
    $('h4').nextAll().css({border:'3px solid #ff0000'});
    $('h4').nextUntil('h6').css({border:'3px solid #ff0000'});
    $('h4').prev('h6').css({border:'3px solid #ff0000'});
});