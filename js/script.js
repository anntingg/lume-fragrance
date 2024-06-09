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

    });

})