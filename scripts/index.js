const header = document.querySelector(".main__header");
const navbar = document.querySelector(".header__nav");
const menuIcon = document.querySelector(".menu-icon");

// const sliderControls = document.querySelector(".slider__controls");
const methodSlider = document.querySelector(".method__slider .slider__inner");
const methodSliderControls = document.querySelector(
  ".method__slider .slider__controls"
);

// Make the header sticky on scroll
window.addEventListener("scroll", () => {
  // header.classList.toggle("scrolled");
  document.body.classList.toggle("scrolled", scrollY > 200);
});

// Navbar mobile menu
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("header__nav--active");
});

// Slider
const slideTo = (index, slider, controls) => {
  const lastActive = controls.querySelector(".dot--active");
  const newActive = controls.querySelector(`.dot[data-index="${index}"]`);

  slider.style.translate = `${100 * index}%`;
  lastActive.classList.remove("dot--active");
  newActive.classList.add("dot--active");
};

let i = 1;
let slidesCount = 4;
let intervalTime = 4000;

const sliderInterval = setInterval(() => {
  if (i > slidesCount - 1) {
    i = 0;
  }
  slideTo(i++, methodSlider, methodSliderControls);
}, intervalTime);

document.addEventListener("click", (e) => {
  clearInterval(sliderInterval);

  const slider = e.target.closest(".slider").querySelector(".slider__inner");
  const controls = e.target.closest(".slider__controls");
  if (!controls) return;

  const newActive = e.target.closest(".dot");
  if (!newActive) return;

  const index = +newActive.dataset.index;

  slideTo(index, slider, controls);
});

document.addEventListener("unload", () => clearInterval(sliderInterval));
