let intervalId;
let startX;

function moveItems(next = true) {
    const itemList = document.querySelector('.item-list');
    const items = document.querySelectorAll('.item');
    const marginWidth = parseInt(getComputedStyle(items[0]).marginRight);
    const itemWidth = items[0].offsetWidth + (marginWidth * 2); // 物品寬度 + margin*2

    itemList.style.transition = 'transform 1s';
    itemList.style.transform = `translateX(-${itemWidth}px)`;

    if (next) {
        itemList.style.transition = 'transform 1s';
        itemList.style.transform = `translateX(-${itemWidth}px)`;

        setTimeout(() => {
            itemList.style.transition = 'none';
            itemList.style.transform = 'translateX(0)';
            itemList.appendChild(items[0]);
        }, 1000);
    } else {
        itemList.style.transition = 'none';
        itemList.style.transform = `translateX(-${itemWidth}px)`;
        itemList.insertBefore(items[items.length - 1], items[0]);

        setTimeout(() => {
            itemList.style.transition = 'transform 1s';
            itemList.style.transform = 'translateX(0)';
        }, 10); // 增加一點點延遲
    }
}

function startCarousel() {
    intervalId = setInterval(() => moveItems(true), 2000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

function handleTouchStart(e) {
    const firstTouch = e.touches[0];
    startX = firstTouch.clientX;
}

function handleTouchMove(e) {
    if (!startX) {
        return;
    }

    let moveX = e.touches[0].clientX;
    let diffX = startX - moveX;

    if (diffX > 50) {
        stopCarousel();
        moveItems(true);
        startCarousel();
        startX = null;
    } else if (diffX < -50) {
        stopCarousel();
        moveItems(false);
        startCarousel();
        startX = null;
    }
}

document.querySelector('.item-list').addEventListener('mouseenter', stopCarousel);
document.querySelector('.item-list').addEventListener('mouseleave', startCarousel);
document.querySelector('.item-list').addEventListener('touchstart', handleTouchStart, { passive: true });
document.querySelector('.item-list').addEventListener('touchmove', handleTouchMove, { passive: true });

document.querySelector('.btn-next-card').addEventListener('click', (e) => {
    e.preventDefault();
    stopCarousel();
    moveItems(true);
    startCarousel();
});

document.querySelector('.btn-prev-card').addEventListener('click', (e) => {
    e.preventDefault();
    stopCarousel();
    moveItems(false);
    startCarousel();
});

// 啟動輪播
startCarousel();