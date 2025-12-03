const searchBox = document.getElementById("searchBox");
const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const toggleDark = document.getElementById("toggleDark");
const navLinks = document.querySelector(".nav-links");
const mobileMenu = document.getElementById("mobileMenu");

openSearch.addEventListener("click", () => {
    searchBox.classList.add("open");
});

closeSearch.addEventListener("click", () => {
    searchBox.classList.remove("open");
});

toggleDark.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

