// Nav Active
const navMenu = document.querySelector(".navbar");
const activePage = window.location.hash;

console.log(activePage);

navMenu.addEventListener("click", (e) => {
    document.querySelectorAll(".navbar a").forEach(item => {
        item.classList.remove("active");
    })
        
    e.target.classList.add("active");
})

// Menu
const showMenu = document.querySelector(".icon-menu");
const closeMenu = document.querySelector(".close");

showMenu.addEventListener("click", () => {
    const menu = document.querySelector(".navbar");
    menu.classList.toggle("active");
});
closeMenu.addEventListener("click", () => {
    const menu = document.querySelector(".navbar");
    menu.classList.toggle("active");
    window;
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sombra", window.scrollY > 0);
});
