function getShortValue() {
    // 設定 cover 圓角數值 => 取得高度和寬度
    let coverRadius = document.querySelector('.banner-box');
    let coverRadiusWidth = coverRadius.offsetWidth;
    let coverRadiusHeight = coverRadius.offsetHeight;

    // 取短邊 => 設定 CSS --short-value 數值 
    var shortValue = Math.min(coverRadiusWidth, coverRadiusHeight) - 1;
    coverRadius.style.setProperty("--short-value", shortValue + "px");
}

getShortValue();
window.addEventListener("resize", getShortValue);
