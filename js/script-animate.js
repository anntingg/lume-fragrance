// 設定淡入函式
const handleAnimation = () => {
    const fadeInSections = document.querySelectorAll('.animate');

    fadeInSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        // if (sectionTop < window.innerHeight - window.innerHeight / 5) {
        //     section.classList.add('animation');
        // } else {
        //     section.classList.remove('animation');
        // }

        if (sectionTop < window.innerHeight - window.innerHeight / 5) {
            section.classList.add('animation');
        } else {
            section.classList.remove('animation');
        }
    });
};

handleAnimation();
window.addEventListener("scroll", handleAnimation);
window.addEventListener("resize", handleAnimation);