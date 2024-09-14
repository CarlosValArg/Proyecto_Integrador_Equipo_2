
    document.getElementById('scrollLeft').onclick = function() {
        document.getElementById('cardContainer').scrollBy({ left: -50, behavior: 'smooth' });
    };

    document.getElementById('scrollRight').onclick = function() {
        document.getElementById('cardContainer').scrollBy({ left: 50, behavior: 'smooth' });
    };
