// hamburger menu & top button
$(function () {
    $(".nav-toggle").click(function () {
        $(".line").toggleClass("active");
        $(".navbar").toggleClass("active");
    });

    $("#btn-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#btn-top").stop().fadeTo("fast", 1);
        } else {
            $("#btn-top").stop().fadeOut();
        }
    });
})

// navbar effect
const handleNavbar = () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 200) {
        navbar.classList.add("background");
    } else {
        navbar.classList.remove("background");
    }
}
window.addEventListener("scroll", handleNavbar);

// title-m effect
const handleTitleM = () => {
    const titleM = document.querySelectorAll('.title-m');

    titleM.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;

        if (titleTop < (window.innerHeight / 2)) {
            title.classList.add("active");
        } else {
            title.classList.remove("active");
        }
    });
};
handleTitleM();
window.addEventListener("scroll", handleTitleM);
window.addEventListener("resize", handleTitleM);

// booking section - circle effect
const steps = document.querySelectorAll(".step");

const handleStep = () => {
    steps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;

        if (stepTop < (window.innerHeight / 2)) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
}
handleStep();
window.addEventListener("scroll", handleStep);
window.addEventListener("resize", handleStep);