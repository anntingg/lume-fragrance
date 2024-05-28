// 品牌故事頁面，監聽動畫:
document.addEventListener('DOMContentLoaded', function () {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.35 // 滑到目標30%時，執行監聽動畫。
    };

    const callback = (entries, observer) => {
        // 監聽事件
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            } else {
                entry.target.style.opacity = '0';
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    // 需要淡入淡出的區塊、內容
    const targets = document.querySelectorAll('.cover, .cover-2 .box2 ,.cover-3 .box3,.cover2 .box article');
    targets.forEach(target => {
        observer.observe(target);
    });


// 聯絡我們頁面，監聽動畫:




});