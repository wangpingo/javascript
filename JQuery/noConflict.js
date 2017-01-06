/**
 * Created by 35031 on 2017/1/5.
 */
$.noConflict();
jQuery(document).ready(function () {
    jQuery('#btn').on('click',function () {
        jQuery('div').text('new hello');
    })
});