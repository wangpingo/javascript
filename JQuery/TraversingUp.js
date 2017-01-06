/**
 * Created by 35031 on 2017/1/5.
 */
$(document).ready(function () {
    $('a').parent().css({border:"3px solid #FF0000"});
    $('a').parents().css({border:"3px solid #FF0000"});
    $('a').parentsUntil().css({border:"3px solid #FF0000"});
});