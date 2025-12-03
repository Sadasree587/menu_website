const searchBox = document.getElementById("searchBox");
const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelector(".nav-links");

openSearch.addEventListener("click", () => {
    searchBox.classList.add("open");
});

closeSearch.addEventListener("click", () => {
    searchBox.classList.remove("open");
});

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
