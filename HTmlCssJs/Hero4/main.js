
const navbar = document.querySelector("nav")
const navbarToggle = document.querySelector(".toggle__menu")

navbarToggle.onclick = () => {
    navbarToggle.classList.toggle("-");
    navbar.classList.toggle("open");
}
