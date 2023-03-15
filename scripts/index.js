const menuIcon = document.querySelector(".menu-icon");

const navbar = document.querySelector(".header__nav");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("header__nav--active");
});
