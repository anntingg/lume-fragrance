$(function () {
    $(window).scroll(function () {

        // ------------商品總覽錨點--------------
        let currentTopPos = $(this).scrollTop();
        let anchorProduct = $(".anchor-p a");
        let anchorTriangle = $(".anchor-p a span");

        anchorProduct.each(function () {
            let linkSection = $(this).attr("href"); //取得錨點連結的屬性值
            let sectionTop = ($(linkSection).offset().top) -1;  // 抓上面屬性值的座標中 Top 位置
            let sectionBottom = sectionTop + $(linkSection).outerHeight();

            if (currentTopPos >= sectionTop && currentTopPos <= sectionBottom) {
                $(anchorProduct).removeClass("active");
                $(anchorTriangle).removeClass("active");
                $(this).addClass("active");
                $(this).find("span").addClass("active");

            } else {
                $(this).removeClass("active");
                $(this).find("span").removeClass("active");
            }

        });

    });

})


