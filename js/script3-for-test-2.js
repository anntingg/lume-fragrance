let images = Array.from(document.querySelectorAll('.img a')); // 選擇所有 .img 的子層 img 元素，並作為陣列
let spans = Array.from(document.querySelectorAll('.img span'));

let imageWidth
let marginWidth
let moveDistance
const carouselArea = document.querySelector(".carousel");

const carousel = document.querySelector('.img');

let resizeWidth = () => {
    imageWidth = images[0].offsetWidth; // 取得第一個子層 img 的寬度
    marginWidth = parseInt(getComputedStyle(images[0]).marginRight); // 取得 margin 寬度
    moveDistance = imageWidth + (marginWidth * 2); // 移動距離
    document.documentElement.style.setProperty('--move-distance', `${moveDistance}px`);
}

resizeWidth()


// 設置 CSS 變量 --imageWidth1
let imageWidth1 = Array.from(document.querySelectorAll('.img img'));
imageWidth1 = imageWidth1[0].offsetWidth;
document.documentElement.style.setProperty('--imageWidth1', `${imageWidth1}px`);

const sec = 2000;

let n = 1

function moveLeftPerSecond() {
    images.forEach((image, index) => {

        image.classList.remove("scale")
        images[0].classList.remove('scale')

        image.style.transition = 'transform 1s ease-in-out,background-color .3s ease-in-out';
        image.style.transform = `translateX(${-moveDistance * n}px)`;
        image.style.zIndex = '2';    

    });

    images[n].style.transform = `translateX(${-moveDistance * n}px) scale(1.3)`;
    images[n].style.zIndex = '10';
    
    carouselArea.addEventListener("mouseenter", () => {
        images[n-1].classList.add('scale')
    });

    if (n === 3) {
        carouselArea.addEventListener("mouseenter", images3);
        n = 0
        setTimeout(() => {
            images.forEach(image => {
                image.style = "";
                
            });

            carouselArea.removeEventListener("mouseenter", images3);
            
            setTimeout(() => {
                images.forEach(image => {
                    image.style.transition = 'transform 1s ease-in-out,background-color .3s ease-in-out'; // 添加平移動畫
                });

            }, 50)
        }, 1050)
    }
    n++
}

moveLeftPerSecond();

let intervalIdSet

intervalIdSet = setInterval(moveLeftPerSecond, sec);

function restartIntervalSet() {
    // clearInterval(intervalIdSet);
    moveLeftPerSecond();
    intervalIdSet = setInterval(moveLeftPerSecond, sec);
}

window.addEventListener('resize', resizeWidth);
moveLeftPerSecond();


// 滑鼠監聽

let isCarouselMoving = true;
let debounceTimer;

function debounce(fn, delay) {

    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
        fn(); 
        console.log(debounceTimer);
        debounceTimer = null;
    }, delay);

}


function restartCarousel() {
    if (isCarouselMoving === false) {
        moveLeftPerSecond();
        intervalIdSet = setInterval(moveLeftPerSecond, sec);
        isCarouselMoving = true;
    }
}

function stopCarousel() {
    if (isCarouselMoving === true) {
        clearInterval(intervalIdSet);
        isCarouselMoving = false;
    }
}


carouselArea.addEventListener("mouseenter", () => {
    debounce(stopCarousel, 500);
});

carouselArea.addEventListener("mouseleave", () => {
    debounce(restartCarousel, 500);
});

function images3() {
    images[3].classList.add('scale');
}








// cover 圓角數值

function coverShortWidth(){
// 選取 cover-banner 元素
var coverBanner = document.querySelector('.cover-banner');

// 獲取 cover-banner 的寬度和高度
var coverBannerWidth = coverBanner.offsetWidth;
var coverBannerHeight = coverBanner.offsetHeight;

// 獲取較短的邊
var shortSide = Math.min(coverBannerWidth, coverBannerHeight) -1;

// 設置 CSS 變量 --short-side
coverBanner.style.setProperty('--short-side', shortSide + 'px');
}

coverShortWidth();
window.addEventListener('resize', coverShortWidth);

