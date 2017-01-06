/**
 * Created by 35031 on 2017/1/5.
 */
$(document).ready(function () {
    $('#div1').children('#div2').css({border:'3px solid red'});//children向下遍历一级
    $('#div1').find('#div2').css({border:'3px solid red'});//find向下完全遍历，find必填参数

});