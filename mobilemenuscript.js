document.getElementById("mobile-menu").addEventListener("click", function () {
    const navList = document.querySelector(".nav-list");
    navList.style.display = navList.style.display === "flex" ? "none" : "flex";
});