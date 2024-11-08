// Funkce pro přidání recenze do seznamu
document.querySelector('.review-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Zabráníme odeslání formuláře

    // Získáme hodnoty z formuláře
    const name = document.querySelector('#name').value;
    const reviewText = document.querySelector('#review').value;

    // Vytvoříme nový prvek pro recenzi
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('reviews-item');

    // Vytvoříme obsah recenze
    reviewItem.innerHTML = `
        <strong>${name}</strong>
        <p>${reviewText}</p>
    `;

    // Přidáme nový prvek do seznamu recenzí
    document.querySelector('.reviews-list').appendChild(reviewItem);

    // Vyčistíme formulář po odeslání
    document.querySelector('#name').value = '';
    document.querySelector('#review').value = '';
});
