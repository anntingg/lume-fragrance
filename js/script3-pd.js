function moveItems() {
    const itemList = document.querySelector('.item-list');
    const items = document.querySelectorAll('.item');
    const marginWidth = parseInt(getComputedStyle(items[0]).marginRight);
    const itemWidth = items[0].offsetWidth + (marginWidth * 2); // 物品寬度 + margin*2

    itemList.style.transition = 'transform 1s';
    itemList.style.transform = `translateX(-${itemWidth}px)`;

    setTimeout(() => {
        itemList.style.transition = 'none';
        itemList.style.transform = 'translateX(0)';
        itemList.appendChild(items[0]);
    }, 1000);
}

function startCarousel() {
    intervalId = setInterval(moveItems, 2000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

document.querySelector('.item-list').addEventListener('mouseenter', stopCarousel);
document.querySelector('.item-list').addEventListener('mouseleave', startCarousel);

// 啟動輪播
startCarousel();