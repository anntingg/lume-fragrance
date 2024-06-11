document.addEventListener('DOMContentLoaded', function() {
    const item1 = document.querySelector('.item1');
    const item2 = document.querySelector('.item2');
    const item3 = document.querySelector('.item3');

    const showItem = (itemToShow) => {
        item1.style.display = 'none';
        item2.style.display = 'none';
        item3.style.display = 'none';

        itemToShow.style.display = 'flex';
    };

    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');

    button1.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止按鈕的預設行為
        showItem(item1);
        button1.classList.add("active")
        button2.classList.remove("active")
        button3.classList.remove("active")
        console.log(button1.style)
    });
    button2.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止按鈕的預設行為
        showItem(item2);
        button2.classList.add("active")
        button1.classList.remove("active")
        button3.classList.remove("active")
    });
    button3.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止按鈕的預設行為
        showItem(item3);
        button3.classList.add("active")
        button2.classList.remove("active")
        button1.classList.remove("active")
    });

    // 初始顯示第一個item
    showItem(item1);
});
