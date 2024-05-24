// 第一個參數為 this 回傳值 = 點擊的對象，第二個參數為對應的 boxId
function showArticlePage(selectedNumber, pageId) {
    // 用 querySelectorAll 選擇有同樣 class 的元素 => 為 NodeList，一組集合物件，可用 forEach 跑迴圈
    const numbers = document.querySelectorAll(".page-number");
    const pages = document.querySelectorAll(".article-page");
    let selectedPage = document.querySelector(pageId);

    // forEach 迴圈：第一個參數代表陣列中單一元素 => 對陣列中每一個元素進行涵式
    // 第二個參數可為 index => 陣列編號，若不需用到則不用寫
    numbers.forEach((element) => {
        element.classList.remove("active");
    });
    pages.forEach((element) => {
        element.classList.remove("show");
    });

    selectedNumber.classList.add("active");
    selectedPage.classList.add("show");
}

// --------------前後按鈕---------------

function changePage(changeNumber) {
    const numbers = document.querySelectorAll(".page-number");
    let currentPageElement = document.querySelector(".page-number.active");
    let currentPageNumber = parseInt(currentPageElement.innerText);

    let newPageNumber = currentPageNumber + changeNumber;
    
    let totalPages = numbers.length;
    
    if (newPageNumber < 1) {
        newPageNumber = totalPages;
    } else if (newPageNumber > totalPages) {
        newPageNumber = 1;
    }

    let newPageElement = document.querySelector(`.page-number:nth-child(${newPageNumber +1})`);
    let newPageId = `#article-page${newPageNumber}`;
    
    showArticlePage(newPageElement, newPageId);
}