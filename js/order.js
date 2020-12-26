$(function() {
    $('#sc input,#more input').each(function(index) {
        let iteam = $('#sc input,#more input')
        $(this).click(function() {
            $(this).parents('.box').siblings().find('label').removeClass('current');
            $(this).parents('.box').siblings().find('.rectangle').css('background', '')
            $(this).parent('label').addClass('current');
            $(this).siblings('.rectangle').css('background', '#ff6600')

            if ($(this).parent('label').hasClass('current')) {
                $(this).prop('checked', true)
            }

        })

    })


    $('#express').addClass('current');
    $('#express .rectangle').css('background', '#ff6600')
    $('#express input ').prop('checked', true)

    $('#express input').click(function() {
        if ($(this).parent('label').hasClass('current')) {
            $(this).prop('checked', true)
        }
    })


    $($('#pay label')[0]).addClass('current');
    $($('#pay label input')[0]).prop('checked', true)
    $($('#pay label input')[0]).siblings(' .rectangle').css('background', '#ff6600')

    $('#pay label input').each(function() {
        $(this).click(function() {
            $(this).parent('label').siblings().removeClass('current');
            $(this).parent('label').addClass('current');

            $(this).parent('label').siblings().find('.rectangle').css('background', '')
            $(this).siblings(' .rectangle').css('background', '#ff6600')
            if ($(this).parent('label').hasClass('current')) {
                $(this).parent('label').siblings().find('input').prop('checked', false)
                $(this).prop('checked', true)

            }
        })
    })


    $('#submit').click(function() {
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
        window.location.href = "login.html";
        // $('form.c4d').submit()
    })


})