$(function() {



    // 复选框
    $('.bank label input').click(function() {
        let flag = $('.bank label input')[0].checked
        if (flag) {
            $('.bank label').addClass('current')
            $('.rectangle').css('display', 'block')
            console.log(flag);
        } else {
            $('.bank label').removeClass('current')
            $('.rectangle').css('display', 'none')
        }
    })


    $('.pay').click(function() {
        $('.mask ').css('display', 'block')
        $('.popup ').css('display', 'block')
            // $('form.c4d').submit()
            // return false
    })

    $('.cancel').click(function() {
        $('.mask ').css('display', 'none')
        $('.popup ').css('display', 'none')
    })

    $('.confirm').click(function() {
        $('form').submit()
    })
})