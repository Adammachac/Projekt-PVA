window.addEventListener('scroll', function() {
    var image = document.querySelector('.about-us-image img');
    var scrollPosition = window.scrollY;

    // Kontrola pozice scrollování a aplikace efektu vypaření
    if (scrollPosition > 150) {
        image.style.opacity = '0'; // Nastaví průhlednost na 0 při scrollování
    } else {
        image.style.opacity = '1'; // Vrátí průhlednost zpět při scrollování nahoru
    }
});
