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
