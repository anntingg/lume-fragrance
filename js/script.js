$(function () {
    $("#btn-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#btn-top").stop().fadeTo("", 1);
        } else {
            $("#btn-top").stop().fadeTo("", 0);
        }
    });
})


