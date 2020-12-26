$(function() {

    $('#settlement').click(function() {
        window.location.href = "order.html";
    })

    $('.all').click(function() {
        $(':checkbox').prop('checked', $(this)[0].checked)
        sum()
    })

    // $('tbody :checkbox').click(function() {
    //     console.log($('tbody :checkbox'));
    //     console.log(this);
    //     let flag = true
    //     $('tbody :checkbox').each(function() {
    //         if (!this.checked) {
    //             flag = false;
    //         }
    //     })
    //     $('.all').prop('checked', flag)

    // })


    $('tbody tr td:first-child input').click(function() {
        let row = $('tbody tr').length
        let checked = $('tbody :checked').length
        $('.all').prop('checked', row == checked)
        sum()
    })


    $('.add').click(function() {
        let num = $(this).prev().val() - 0
        let newNum = num + 1;
        $(this).prev().val(newNum)
        $(this).parents('tr').children().eq(4).text(subtotal($(this).parents('tr')))
        sum()
    })

    $('.reduce').click(function() {
        let num = $(this).next().val()
        let newNum = num - 1;
        if (newNum <= 0) {
            return;
        }
        $(this).next().val(newNum)
        sum()
    })


    function subtotal(tr) {
        let obj = $(tr)
        let subtotal = ($(obj.find('input')[1]).val() * $(obj.children().eq(2)).text()).toFixed(2)
        return subtotal
    }

    $('.remove').click(function() {
        $('tbody :checked').parents('tr').remove()
        sum()
    })


    function sum() {
        let count = 0
        let sum = 0
        $('tbody :checked').each(function() {

            let price = $(this).parents('tr').children().eq(2).text()
            let num = $(this).parents('tr').children().eq(3).children('input').val()
            rowPrice = (price - 0) * num
            count = count + (num - 0)
            sum = sum + rowPrice
        })
        $('.allNum').text(count)
        $('.allPrice ').text(sum.toFixed(2))
    }


})