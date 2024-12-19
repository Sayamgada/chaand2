document.addEventListener('DOMContentLoaded', () => {
    const marqueeContainer = document.querySelector('.marquee-container'); 
    const marqueeTexts = document.querySelectorAll('.marquee-text'); 

    marqueeContainer.addEventListener('mouseenter', () => {
        marqueeTexts.forEach(text => text.style.animationPlayState = 'paused');
    });

    marqueeContainer.addEventListener('mouseleave', () => {
        marqueeTexts.forEach(text => text.style.animationPlayState = 'running');
    });

    // Dynamically add marquee text
    const newText = document.createElement('div');
    newText.className = 'marquee-text';
    newText.textContent = '| New Arrivals |';
    marqueeContainer.appendChild(newText);
});


const sliderItems = document.querySelectorAll('.slider-item');
const indicators = document.querySelector('.carousel-indicator');

sliderItems.forEach((item, index) => {
    const dot = document.createElement('span');
    dot.dataset.index = index;
    indicators.appendChild(dot);
});

indicators.children[0].classList.add('active');

let currentIndex = 0;
function updateActiveDot() {
    indicators.querySelectorAll('span').forEach(dot => dot.classList.remove('active'));
    indicators.children[currentIndex].classList.add('active');
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateActiveDot();
}, 3000);
