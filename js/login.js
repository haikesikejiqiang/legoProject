$(function() {

    $('.goregister').click(function() {
        window.location.href = "register.html";
    })



    $('label.border.fl input').click(function() {
        if (this.checked == false) {
            $(this).parent().removeClass('active')
        } else {
            $(this).parent().addClass('active')
        }

    })


    $('.loginbg li').click(function() {
        console.log($(this));
        let index = $(this).index()
        console.log(index, $('#box').children().eq(index));

        $('#box').children().eq(index).show().siblings().hide()
        $(this).children().addClass('current')
        $(this).siblings().children().removeClass('current')
    })

    $('form').hide()
})