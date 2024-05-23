let images = Array.from(document.querySelectorAll('.img img')); // 選擇所有 .img 的子層 img 元素，並作為陣列

let imageWidth
let marginWidth
let moveDistance

const carousel = document.querySelector('.img');

let resizeWidth = () => {
    imageWidth = images[0].offsetWidth; // 取得第一個子層 img 的寬度
    marginWidth = parseInt(getComputedStyle(images[0]).marginRight); // 取得 margin 寬度
    moveDistance = imageWidth + (marginWidth * 2); // 移動距離
    document.documentElement.style.setProperty('--move-distance', `${moveDistance}px`);
}

resizeWidth()

const sec = 2000

// 設置 CSS 變量


function moveLeftPerSecond() {

    // 使用 CSS transform 屬性移動圖片
    images.forEach(image => {
        image.style.transition = 'transform 1s ease-in-out'; // 添加平移動畫
        image.style.transform = `translateX(${-moveDistance}px)`;
        image.style.zIndex = '';

        if (n = 0) {
            images[n].style.transform = `translateX(${-moveDistance}px)`;
        }
        if (n = 1) {
            images[n].style.transform = `translateX(${-moveDistance}px) scale(1.3)`;
            images[n].style.zIndex = '10';
        }
    });

    setTimeout(() => {
        images.forEach(image => {
            image.style.transform = `translateX(${-moveDistance * 2}px)`;
            image.style.zIndex = '';

            if (n = 2) {
                images[n].style.transform = `translateX(${-moveDistance * 2}px) scale(1.3)`;
                images[n].style.zIndex = '10';
            }
        });

        setTimeout(() => {
            images.forEach(image => {
                image.style.transform = `translateX(${-moveDistance * 3}px)`;
                image.style.zIndex = '';

                if (n = 3) {
                    images[n].style.transform = `translateX(${-moveDistance * 3}px) scale(1.3)`;
                    images[n].style.zIndex = '10';
                }
            });

            setTimeout(() => {
                images.forEach(image => {
                    image.style = "";
                });

                setTimeout(() => {
                    images.forEach(image => {
                        image.style.transition = 'transform 1s ease-in-out'; // 添加平移動畫
                    });
                }, 50)
            }, 1050);
        }, sec);
    }, sec);

}

// 調用函式開始移動
moveLeftPerSecond();

intervalId = setInterval(moveLeftPerSecond, sec * 3);

// 前後按鈕的 click 事件 => 點擊後重新計算 3 秒自動輪播
function restartInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(moveLeftPerSecond, sec * 3 + 50);
}

window.addEventListener('resize', resizeWidth);


// cover 圓角數值
// 選取 cover-banner 元素
var coverBanner = document.querySelector('.cover-banner');

// 獲取 cover-banner 的寬度和高度
var coverBannerWidth = coverBanner.offsetWidth;
var coverBannerHeight = coverBanner.offsetHeight;

// 獲取較短的邊
var shortSide = Math.min(coverBannerWidth, coverBannerHeight) -1;

// 設置 CSS 變量 --short-side
coverBanner.style.setProperty('--short-side', shortSide + 'px');