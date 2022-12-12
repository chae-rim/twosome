//네비

$(document).ready(function () {
    $('#header .navbar').hide();
    $('.nav li').click(function () {
        $('#header .navbar').slideToggle(500);
    });
})









//메인이미지

$(document).ready(function () {
    var current = 0
    var setIntervalId;


    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 2) {
                n = 0;
            }
            move(n);
        }, 5000)

    }
    function move(n) {
        var currentEl = $('.main_img li').eq(current);
        var nextEl = $('.main_img li').eq(n);


        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });


        current = n;
    }
});





