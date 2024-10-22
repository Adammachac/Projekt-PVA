// Získání formuláře
const contactForm = document.getElementById("contact-form");

// Funkce pro zobrazení formuláře při skrolování
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) { // Zobrazí formulář po 200px skrolování
        contactForm.classList.remove("hidden");
    }
});
