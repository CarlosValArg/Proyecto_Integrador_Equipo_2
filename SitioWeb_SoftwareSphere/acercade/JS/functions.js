let currentIndex = 0;

function moveCarousel(direction) {
    const container = document.querySelector('.card-container');
    const cardWidth = 370;
    const visibleCards = 2;
    const cardSpacing = 10; // Margen entre tarjetas

    const totalWidth = (cardWidth + cardSpacing) * document.querySelectorAll('.card').length;
    const containerWidth = cardWidth * visibleCards;
    const maxIndex = Math.ceil((totalWidth - containerWidth) / (cardWidth + cardSpacing));

    currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
    
    container.style.transform = `translateX(-${currentIndex * (cardWidth + cardSpacing)}px)`;
}