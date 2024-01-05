let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.carousel-slider img');

function showSlide(index) {
    const newPosition = -index * 100 + '%';
    slider.style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}


