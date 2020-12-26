$(function() {

    $('#productList').click(function() {
        window.location.href = "productList.html";
    })

    // 首页大轮播图
    $("#slider").slidebox({
        boxh: 430, //盒子的高度
        w: 1000, //图片的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12, //控制按钮宽度
        controlsH: 12, //控制按钮高度
        radius: 6 //控制按钮圆角度数
    })


    // 电子书小轮播图
    let a = $("#ebook .olympic .iteam").eq(2).find('#slider') // children('li').eq(0).children('#slider')
    for (let i = 0; i < $('#ebook .olympic').children().length; i++) {
        $("#ebook .olympic .iteam").eq(i).find('#slider').slidebox({
            boxh: 218, //盒子的高度
            w: 328, //图片的宽度
            h: 216.8, //图片的高度
            isShow: true, //是否显示控制器
            isShowBtn: true, //是否显示左右按钮
            controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 30, //控制按钮宽度
            controlsH: 6, //控制按钮高度
            radius: 6 //控制按钮圆角度数
        })
    }


    // 二级菜单京东布局
    $('.slideList ul li').each(function(index) {
        $(this).mouseover(
            function() {
                //当前选中列表移入
                //将内容父盒子显示
                //$('.slideDetails').css('display', 'block')
                //给当前选中列表的兄弟干掉
                $(this).siblings().removeClass('listSelect');
                //留下当前选中列表
                $(this).addClass('listSelect');
                //给当前选中内容盒子的兄弟干掉
                $($('.slideDetails .content')[index]).siblings().removeClass('detailsSelect');
                //留下当前选中内容盒子
                $($('.slideDetails .content')[index]).addClass('detailsSelect');
            }
        ).mouseout(
            function() {
                //当前选中列表移出
                //将内容父盒子隐藏
                // $('.slideDetails').css('display', 'none')
                //给当前选中的内容盒子的兄弟干掉
                $(this).removeClass('listSelect');
                //给当前选中的内容盒子的兄弟干掉(移入已经干掉过,那么这里可以注释)
                // $($('.slideDetails .content')[index]).siblings().removeClass('detailsSelect');
                //给当前选中内容盒子干掉
                $($('.slideDetails .content')[index]).removeClass('detailsSelect');
            }
        )
    })

    $('.slideDetails .content').each(function(index) {
        $(this).mouseover(
            function() {
                //当前选中内容移入
                //将内容父盒子显示
                //$('.slideDetails').css('display', 'block')

                //给当前选中列表的兄弟干掉，这里你移入内容盒子那么必将移出列表就会把选中内容盒子干掉,所以也可以注释
                // $(this).siblings().removeClass('detailsSelect');
                //留下当前选中的列表留,注意这里不能填this,需要选中的是列表
                $($('.slideList ul li')[index]).addClass('listSelect');
                // 留下当前选中内容盒子 $($('.slideDetails .content')[index]),这里可以this
                $(this).addClass('detailsSelect');
            }
        ).mouseout(
            function() {
                //当前选中内容移出
                //将内容父盒子隐藏
                // $('.slideDetails').css('display', 'none')

                //给当前选中的内容盒子的兄弟干掉(移入已经干掉过,那么这里可以注释)
                // $($('.slideDetails .content')[index]).siblings().removeClass('detailsSelect');
                // 给当前选中内容干掉 $($('.slideDetails .content')[index])
                $(this).removeClass('detailsSelect');
                // 给当前选中列表干掉
                $($('.slideList ul li')[index]).removeClass('listSelect');

            }
        )
    })


    // tab选项卡定义函数
    function tabover(obj1, obj2) {
        $(obj1).each(function(index) {
            $(this).mouseover(function() {
                $(this).siblings().removeClass('active')
                $(this).addClass('active')
                $(obj2[index]).siblings().removeClass('current')
                $(obj2[index]).addClass('current')
            })
        })
    }



    // 电子书板块
    tabover($('#ebook .ebitle ul li'), $('#ebook .olympic .iteam'))
        //衣服板块
    tabover($('#cloth .ebitle ul li'), $('#cloth .examplebox .iteam'))
        //户外运动
    tabover($('#sport .ebitle ul li'), $('#sport .examplebox .iteam'))
        //童装板块
    tabover($('#child .ebitle ul li'), $('#child .examplebox .iteam'))

    // 榜单板块
    $('.eblist li').each(function(index) {
        $(this).mouseover(function() {
            // 选中li的时候，当前图片world显示，其余world隐藏
            $(this).siblings().find('.world').removeClass('current')
            $(this).find('.world').addClass('current')

            // 选中li的时候，其余li只显示h4当前不显示
            $(this).siblings().find('h4').removeClass('noactive')
            $(this).find('h4').addClass('noactive')
        })
    })

    // 搜索框
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 800) {
            $('#searchBox form').children().appendTo('#toserch form')
            $('#toserch').stop().slideDown(50)

        } else {

            $('#toserch').stop().slideUp(10, function() {
                $('#toserch form').children().appendTo('#searchBox form')
            })

        }
    })


    // 电梯导航 变色
    let bgColor = ["#93d46f", "#f65727", "#bb9dee", "#ff7394", "#c2ec51"];

    function change() {
        let index = $(this).index()
        $(this).css({
            width: '80px',
            backgroundPositionX: '-40px',
            backgroundColor: bgColor[index]
        })
    }

    function color() {
        $(this).css({
            width: '',
            backgroundColor: '',
            backgroundPositionX: ''
        })
    }
    $('#elevator li').each(function(index) {
        $($('#elevator li')[index]).hover(change, color)
        $(this).click(function() {
            let val = $($('#w .container')[index]).offset().top - 61
            $('body,html').stop(true).animate({
                scrollTop: val
            })
        })
    })




    console.log("%c Le.Go" + " %c https://lego.now.sh/ ", "color: white; background: #e9546b; padding:5px 0;", "padding:4px;border:1px solid #e9546b;");

})