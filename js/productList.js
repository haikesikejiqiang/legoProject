$(function() {

    $('#shopCar').click(function() {
        window.location.href = "proDetail.html";
    })


    $('.ebitle>ul>li').each(function() {
        $(this).click(function() {
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
        })
    })


    let num = 0
    let flag = true;
    let now;
    $('.changeP').click(function() {
        if (flag) {
            flag = false;
            let h = $('.likebox').height()
            let l = $('.change').children().length
            if (num == l - 1) {
                $('.change').css('top', '0px');
                num = 0
            }
            num++;
            console.log('我滚了一次');

            $('.change').stop(true).animate({
                top: -num * h
            }, 1000, function() {
                flag = true;
            })
        }

        // let lastnow = Date.now()
        // if (now && lastnow - now <= 1000) {
        //     now = lastnow
        //     console.log('时间' + lastnow - now);
        //     return
        // } else {


        //     now = lastnow
        //     let h = $('.likebox').height()
        //     let l = $('.change').children().length
        //     if (num == l - 1) {
        //         $('.change').css('top', '0px');
        //         num = 0
        //     }
        //     num++;
        //     console.log('我滚了一次');

        //     $('.change').stop(true).animate({
        //         top: -num * h
        //     }, 1000)
        // }

    })

})