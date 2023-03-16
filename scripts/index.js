const header = document.querySelector(".main__header");
const navbar = document.querySelector(".header__nav");
const menuIcon = document.querySelector(".menu-icon");

const sliderControls = document.querySelector(".slider__controls");
const slider = document.querySelector(".slider__inner");

window.addEventListener("scroll", () => {
  // header.classList.toggle("scrolled");
  document.body.classList.toggle("scrolled", scrollY > 200);
});

// Navbar mobile menu
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("header__nav--active");
});

// Method slider
sliderControls.addEventListener("click", (e) => {
  if (e.target.closest(".dot")) {
    const index = +e.target.dataset.index;
    const lastActive = sliderControls.querySelector(".dot--active");

    slider.style.translate = `calc(${100 * index}% + 1rem)`;
    lastActive.classList.remove("dot--active");
    e.target.classList.add("dot--active");
  }
});
