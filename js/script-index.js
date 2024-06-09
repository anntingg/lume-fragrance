// temporarily disable wheel function when the animation is playing
const animationDuration = 2300;     // 2.3s

function disableScroll(event) {
    event.preventDefault();
}
window.addEventListener("wheel", disableScroll, { passive: false });

setTimeout(() => {
    window.removeEventListener("wheel", disableScroll);
}, animationDuration);
