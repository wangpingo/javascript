/**
 * Created by 35031 on 2017/1/21.
 */
var bt = document.getElementById('bt');
bt.addEventListener('click', function () {
    $.ajax({
        type: 'post',
        url: '/1',
        asyc: true,
        success: function (data) {
            document.write(data);
        }
    });
})