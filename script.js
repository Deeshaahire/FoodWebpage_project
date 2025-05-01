document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const cards = document.querySelectorAll('.food-card');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    function showPrevCard() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1;
        }
        updateCarousel();
    }

    function showNextCard() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrevCard);
    nextBtn.addEventListener('click', showNextCard);

    // Initialize
    updateCarousel();

    // Responsive behavior
    window.addEventListener('resize', updateCarousel);
});

