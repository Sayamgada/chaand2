// marquee
document.addEventListener('DOMContentLoaded', () => {
    const marqueeContainer = document.querySelector('.marquee-container'); 
    const marqueeTexts = document.querySelectorAll('.marquee-text'); 

    marqueeContainer.addEventListener('click', () => {
        marqueeTexts.forEach(text => {
            text.style.animationPlayState = 'paused';
        });
    });

    marqueeContainer.addEventListener('mouseleave', () => {
        marqueeTexts.forEach(text => {
            text.style.animationPlayState = 'running';
        });
    });
});



