// 若在 React 框架中，直接用 onClick 事件呼叫函式
const scrollToTop = () => {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth" // This animates the scroll behavior
    });
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth" // This animates the scroll behavior
    });
};

// Top 按鈕
$(function () {
    $(window).scroll(function () {

        // ------------Top 按鈕--------------
        // Top 按鈕捲動超過 200px 時，按鈕才出現
        let showTop = 200;
        if ($(this).scrollTop() > showTop) {
            $(".btn-top").stop().fadeTo("fast", 1);
        } else {
            $(".btn-top").stop().fadeTo("fast", 0);
        }

        /*
        // 取出 footer 和視窗底部位置
        let footerPos = $("footer").offset().top;
        let currentBottomPos = $(this).scrollTop() + window.innerHeight;

        // 當視窗底部抵達 footer 時，Top 按鈕新增 class="position" 覆蓋原本定位
        if (currentBottomPos >= (footerPos)) {
            $('.btn-top').addClass("position");
        } else {
            $('.btn-top').removeClass("position");
        };       
        */

    });

})

/*
// 設定 cover 圓角數值 => 取得高度和寬度
let coverRadius = document.querySelector('.banner-box');
let coverRadiusWidth = coverRadius.offsetWidth;
let coverRadiusHeight = coverRadius.offsetHeight;

// 取短邊 => 設定 CSS --short-value 數值 
var shortValue = Math.min(coverRadiusWidth, coverRadiusHeight) -1;
coverRadius.style.setProperty("--short-value", shortValue + "px");
*/

