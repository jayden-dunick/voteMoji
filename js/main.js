var start = anime({
    targets: ['.start'],
    translateX: -800,
    duration: 800,
    loop: false,
    autoplay: false,
    easing: 'easeInOutSine'
});

document.querySelector('.go').onclick = start.play;
