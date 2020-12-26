$(function() {
    // 电话
    jQuery.validator.addMethod("chinaPhone", function(value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/.test(value);
    }, '电话号码不满足');
    // 邮箱
    jQuery.validator.addMethod("myEmail", function(value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value);
    }, '邮箱不正确啊');


    $('.border input').click(function() {
        if (this.checked == false) {
            $(this).parent().removeClass('active')
        } else {
            $(this).parent().addClass('active')
        }

    })


    $(".form").validate({
        rules: {
            uname: {
                required: true,
                minlength: 2,
                maxlength: 10
            },
            pwd: {
                rangelength: [6, 12]
            },
            confirmPwd: {
                equalTo: '#pwd'
            },
            tel: {
                chinaPhone: true
            },
            email: {
                myEmail: true
            }

        },
        messages: {
            uname: {
                required: '不嘛，你输入点东西嘛!',
                maxlength: '不能超过10个字',
                minlength: '不能小于2个字'
            },
            pwd: {
                rangelength: '必须在6-12位之间'
            },
            confirmPwd: {
                equalTo: '必须和密码一致'
            }
        }


    })
})