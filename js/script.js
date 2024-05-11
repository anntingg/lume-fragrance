const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This animates the scroll behavior
    });
};

$(function () {
    $(window).scroll(function () {

        // ------------Top 按鈕--------------
        // Top 按鈕捲動超過 200px 時，按鈕才出現
        let showTop = 200;
        if ($(this).scrollTop() > showTop) {
            $(".btn-top").stop().fadeTo("", 1);
        } else {
            $(".btn-top").stop().fadeTo("", 0);
        }

        // 取出 footer 和視窗底部位置
        let footerPos = $("footer").offset().top;
        let currentBottomPos = $(this).scrollTop() + window.innerHeight;
        // console.log(footerPos, windowBottomPos);

        // 當視窗底部抵達 footer 時，Top 按鈕新增 class="position" 覆蓋原本定位
        if (currentBottomPos >= (footerPos)) {
            $('.btn-top').addClass("position");
        } else {
            $('.btn-top').removeClass("position");
        };

        // ------------商品總覽錨點--------------
        let currentTopPos = $(this).scrollTop();
        let anchorProduct = $(".anchor-p a");
        let anchorTriangle = $(".anchor-p a span");

        anchorProduct.each(function () {
            let linkSection = $(this).attr("href"); //取得錨點連結的屬性值
            let sectionTop = ($(linkSection).offset().top) -1;  // 抓上面屬性值的座標中 Top 位置
            let sectionBottom = sectionTop + $(linkSection).outerHeight();

            // console.log(currentTopPos);
            // console.log($("#facial-mask").offset().top);

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


