$(function() {
    banner()
    one()
    two()
    three()
    four()

    function banner() {
        let imgwidth = 1000; //图片宽度
        let index = 0;
        // first() 将匹配元素集合缩减为集合中的第一个元素。
        // clone() 克隆
        $('.banner ul li').first().clone().appendTo('.banner ul'); //克隆第一张图片添加到列表中去
        let length = $('.banner ul li').length; //返回判断的数量

        // 循环图片容器的数量 并向提示按钮的容器添加子元素
        for (let i = 0; i < length - 1; i++) {
            $('.banner ol').append('<li></li>');
        }
        $('.banner ol li').first().addClass('on');

        // 鼠标触碰提示按钮
        $('.banner ol li').hover(function() {
            index = $(this).index();
            $('.banner ul').stop().animate({
                left: -index * imgwidth
            }, 900)
            $('.banner ol li').eq(index).addClass('on').siblings().removeClass('on');

        })

        // 自动轮播 加定时器
        let timer = setInterval(sliderTimer, 2000)

        function sliderTimer() {
            index++;
            move()
        }

        // 给左右按钮绑定事件
        $('.banner .btn_l').click(function() {
            index--
            move()
        })
        $('.banner .btn_r').click(function() {
            index++
            move()
        })

        // 鼠标悬停事件
        $('.banner').hover(function() {
            clearInterval(timer)
        }, function() {
            timer = setInterval(sliderTimer, 2000)
        })

        // 移动事件
        function move() {
            if (index == length) {
                $('.banner ul').css({
                    left: 0
                });
                index = 1;
            }
            if (index == -1) {
                $('.banner ul').css({
                    left: -(length - 1) * imgwidth
                })
                index = length - 2
            }
            $('.banner ul').stop().animate({
                left: -index * imgwidth
            }, 800)

            if (index == length - 1) {
                // 如果索引值为最大值，那么就给第一个小圆点添加类名，其他兄弟删除类名
                $('.banner ol li').eq(0).addClass('on').siblings().removeClass('on');
            } else {
                $('.banner ol li').eq(index).addClass('on').siblings().removeClass('on');
            }
        }
    }


    function one() {
        let onewidth = 328; //图片宽度
        let index = 0;
        // first() 将匹配元素集合缩减为集合中的第一个元素。
        // clone() 克隆
        $('.one ul li').first().clone().appendTo('.one ul'); //克隆第一张图片添加到列表中去
        let length = $('.one ul li').length; //返回判断的数量

        // 循环图片容器的数量 并向提示按钮的容器添加子元素
        for (let i = 0; i < length - 1; i++) {
            $('.one ol').append('<li></li>');
        }
        $('.one ol li').first().addClass('on');

        // 鼠标触碰提示按钮
        $('.one ol li').hover(function() {
            index = $(this).index();
            $('.one ul').stop().animate({
                left: -index * onewidth
            }, 900)
            $('.one ol li').eq(index).addClass('on').siblings().removeClass('on');

        })

        // 自动轮播 加定时器
        let timer = setInterval(sliderTimer, 2000)

        function sliderTimer() {
            index++;
            move()
        }

        // 给左右按钮绑定事件
        $('.one .btn_l').click(function() {
            index--
            move()
        })
        $('.one .btn_r').click(function() {
            index++
            move()
        })

        // 鼠标悬停事件
        $('.one').hover(function() {
            clearInterval(timer)
        }, function() {
            timer = setInterval(sliderTimer, 2000)
        })

        // 移动事件
        function move() {
            if (index == length) {
                $('.one ul').css({
                    left: 0
                });
                index = 1;
            }
            if (index == -1) {
                $('.one ul').css({
                    left: -(length - 1) * onewidth
                })
                index = length - 2
            }
            $('.one ul').stop().animate({
                left: -index * onewidth
            }, 800)

            if (index == length - 1) {
                // 如果索引值为最大值，那么就给第一个小圆点添加类名，其他兄弟删除类名
                $('.one ol li').eq(0).addClass('on').siblings().removeClass('on');
            } else {
                $('.one ol li').eq(index).addClass('on').siblings().removeClass('on');
            }
        }
    }


    function two() {
        let twowidth = 439; //图片宽度
        let index = 0;
        // first() 将匹配元素集合缩减为集合中的第一个元素。
        // cltwo() 克隆
        $('#cloth .iteamone ul li').first().clone().appendTo('#cloth .iteamone ul'); //克隆第一张图片添加到列表中去
        $('#cloth .iteamtwo ul li').first().clone().appendTo('#cloth .iteamtwo  ul');
        $('#cloth .iteamthree ul li').first().clone().appendTo('#cloth .iteamthree  ul');
        let length = $('#cloth .iteamone ul li').length; //返回判断的数量
        // 循环图片容器的数量 并向提示按钮的容器添加子元素
        for (let i = 0; i < length - 1; i++) {

            $('#cloth .iteamone ol').append('<li></li>');
            $('#cloth .iteamtwo ol').append('<li></li>');
            $('#cloth .iteamthree ol').append('<li></li>');
        }

        $('#cloth .iteamone ol li').first().addClass('on');
        $('#cloth .iteamtwo ol li').first().addClass('on');
        $('#cloth .iteamthree ol li').first().addClass('on');

        // 鼠标触碰提示按钮
        $('#cloth .two ol li').hover(function() {
            index = $(this).index();
            $('#cloth .two ul').stop().animate({
                left: -index * twowidth
            }, 900)
            $('#cloth .iteamone ol li').eq(index).addClass('on').siblings().removeClass('on');
            $('#cloth .iteamtwo ol li').eq(index).addClass('on').siblings().removeClass('on');
            $('#cloth .iteamthree ol li').eq(index).addClass('on').siblings().removeClass('on');

        })

        // 自动轮播 加定时器
        let timer = setInterval(sliderTimer, 1800)

        function sliderTimer() {
            index++;
            move()
        }

        // 给左右按钮绑定事件
        $('#cloth .two  .btn_l').click(function() {
            index--
            move()
        })
        $('#cloth .two  .btn_r').click(function() {
            index++
            move()
        })

        // 鼠标悬停事件
        $('#cloth .two').hover(function() {
            clearInterval(timer)
        }, function() {
            timer = setInterval(sliderTimer, 2000)
        })

        // 移动事件
        function move() {
            if (index == length) {
                $('#cloth .two ul').css({
                    left: 0
                });
                index = 1;
            }
            if (index == -1) {
                $('#cloth .two ul').css({
                    left: -(length - 1) * twowidth
                })
                index = length - 2
            }
            $('#cloth .two ul').stop().animate({
                left: -index * twowidth
            }, 800)

            if (index == length - 1) {
                // 如果索引值为最大值，那么就给第一个小圆点添加类名，其他兄弟删除类名
                $('#cloth .iteamtwo ol li').eq(0).addClass('on').siblings().removeClass('on');
                $('#cloth .iteamone ol li').eq(0).addClass('on').siblings().removeClass('on');
                $('#cloth .iteamthree ol li').eq(0).addClass('on').siblings().removeClass('on');
            } else {
                $('#cloth .iteamtwo ol li').eq(index).addClass('on').siblings().removeClass('on');
                $('#cloth .iteamone ol li').eq(index).addClass('on').siblings().removeClass('on');
                $('#cloth .iteamthree ol li').eq(index).addClass('on').siblings().removeClass('on');
            }
        }
    }



    function three() {
        let twowidth = 439; //图片宽度
        let index = 0;
        // first() 将匹配元素集合缩减为集合中的第一个元素。
        // cltwo() 克隆
        $('#sport .iteamone ul li').first().clone().appendTo('#sport .iteamone ul'); //克隆第一张图片添加到列表中去
        $('#sport .iteamtwo ul li').first().clone().appendTo('#sport  .iteamtwo  ul');
        $('#sport .iteamthree ul li').first().clone().appendTo('#sport  .iteamthree  ul');
        let length = $('#sport .iteamone ul li').length; //返回判断的数量
        // 循环图片容器的数量 并向提示按钮的容器添加子元素
        for (let i = 0; i < length - 1; i++) {

            $('#sport .iteamone ol').append('<li></li>');
            $('#sport .iteamtwo ol').append('<li></li>');
            $('#sport .iteamthree ol').append('<li></li>');
        }

        $('#sport .iteamone ol li').first().addClass('on');
        $('#sport .iteamtwo ol li').first().addClass('on');
        $('#sport .iteamthree ol li').first().addClass('on');

        // 鼠标触碰提示按钮
        $('#sport .three ol li').hover(function() {
            index = $(this).index();
            $('#sport .three ul').stop().animate({
                left: -index * twowidth
            }, 900)
            $('#sport .iteamone ol li').eq(index).addClass('on').siblings().removeClass('on');
            $('#sport .iteamtwo li').eq(index).addClass('on').siblings().removeClass('on');
            $('#sport .iteamthree ol li').eq(index).addClass('on').siblings().removeClass('on');

        })

        // 自动轮播 加定时器
        let timer = setInterval(sliderTimer, 2000)

        function sliderTimer() {
            index++;
            move()
        }

        // 给左右按钮绑定事件
        $('#sport .three .btn_l').click(function() {
            index--
            move()
        })
        $('#sport .three .btn_r').click(function() {
            index++
            move()
        })

        // 鼠标悬停事件
        $('#sport .three').hover(function() {
            clearInterval(timer)
        }, function() {
            timer = setInterval(sliderTimer, 2000)
        })

        // 移动事件
        function move() {
            if (index == length) {
                $('#sport .three ul').css({
                    left: 0
                });
                index = 1;
            }
            if (index == -1) {
                $('#sport .three ul').css({
                    left: -(length - 1) * twowidth
                })
                index = length - 2
            }
            $('#sport .three ul').stop().animate({
                left: -index * twowidth
            }, 800)

            if (index == length - 1) {
                // 如果索引值为最大值，那么就给第一个小圆点添加类名，其他兄弟删除类名
                $('#sport .iteamtwo ol li').eq(0).addClass('on').siblings().removeClass('on');
                $('#sport .iteamone ol li').eq(0).addClass('on').siblings().removeClass('on');
                $('#sport .iteamthree ol li').eq(0).addClass('on').siblings().removeClass('on');
            } else {
                $('#sport .iteamtwo ol li').eq(index).addClass('on').siblings().removeClass('on');
                $('#sport .iteamone ol li').eq(index).addClass('on').siblings().removeClass('on');
                $('#sport .iteamthree ol li').eq(index).addClass('on').siblings().removeClass('on');
            }
        }
    }



    function four() {
        let twowidth = 439; //图片宽度
        let index = 0;
        // first() 将匹配元素集合缩减为集合中的第一个元素。
        // cltwo() 克隆
        $('#child .iteamone ul li').first().clone().appendTo('#child .iteamone ul'); //克隆第一张图片添加到列表中去
        $('#child .iteamtwo ul li').first().clone().appendTo('#child  .iteamtwo  ul');
        $('#child .iteamthree ul li').first().clone().appendTo('#child  .iteamthree  ul');
        let length = $('#child .iteamone ul li').length; //返回判断的数量
        // 循环图片容器的数量 并向提示按钮的容器添加子元素
        for (let i = 0; i < length - 1; i++) {

            $('#child .iteamone ol').append('<li></li>');
            $('#child .iteamtwo ol').append('<li></li>');
            $('#child .iteamthree ol').append('<li></li>');
        }

        $('#child .iteamone ol li').first().addClass('on');
        $('#child .iteamtwo ol li').first().addClass('on');
        $('#child .iteamthree ol li').first().addClass('on');

        // 鼠标触碰提示按钮
        $('#child .four ol li').hover(function() {
            index = $(this).index();
            $('#child .four ul').stop().animate({
                left: -index * twowidth
            }, 900)
            $('#child .iteamone ol li').eq(index).addClass('on').siblings().removeClass('on');
            $('#child .iteamtwo  ol li').eq(index).addClass('on').siblings().removeClass('on');
            $('#child .iteamthree ol li').eq(index).addClass('on').siblings().removeClass('on');

        })

        // 自动轮播 加定时器
        let timer = setInterval(sliderTimer, 1500)

        function sliderTimer() {
            index++;
            move()
        }

        // 给左右按钮绑定事件
        $('#child .four .btn_l').click(function() {
            index--
            move()
        })
        $('#child .four .btn_r').click(function() {
            index++
            move()
        })

        // 鼠标悬停事件
        $('#child .four').hover(function() {
            clearInterval(timer)
        }, function() {
            timer = setInterval(sliderTimer, 2000)
        })

        // 移动事件
        function move() {
            if (index == length) {
                $('#child .four ul').css({
                    left: 0
                });
                index = 1;
            }
            if (index == -1) {
                $('#child .four ul').css({
                    left: -(length - 1) * twowidth
                })
                index = length - 2
            }
            $('#child .four ul').stop().animate({
                left: -index * twowidth
            }, 800)

            if (index == length - 1) {
                // 如果索引值为最大值，那么就给第一个小圆点添加类名，其他兄弟删除类名
                $('#child .iteamtwo ol li').eq(0).addClass('on').siblings().removeClass('on');
                $('#child .iteamone ol li').eq(0).addClass('on').siblings().removeClass('on');
                $('#child .iteamthree ol li').eq(0).addClass('on').siblings().removeClass('on');
            } else {
                $('#child .iteamtwo ol li').eq(index).addClass('on').siblings().removeClass('on');
                $('#child .iteamone ol li').eq(index).addClass('on').siblings().removeClass('on');
                $('#child .iteamthree ol li').eq(index).addClass('on').siblings().removeClass('on');
            }
        }
    }





})