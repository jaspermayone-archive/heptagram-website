const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const second_li = document.querySelector(".second");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

img = document.createElement("li");
img.innerHTML =
    '<img src="img/full-heptagram-logo.png" alt="Heptagram Logo" class="logo"></img>';
    img.classList.add('image-mobile')
navMenu.appendChild(img);
navMenu.insertBefore(img, second_li);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
