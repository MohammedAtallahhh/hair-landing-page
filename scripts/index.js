const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".header__nav");

const sliderControls = document.querySelector(".slider__controls");
const slider = document.querySelector(".slider__inner");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("header__nav--active");
});

sliderControls.addEventListener("click", (e) => {
  if (e.target.closest(".dot")) {
    const index = +e.target.dataset.index;
    const lastActive = sliderControls.querySelector(".dot--active");

    slider.style.translate = `${100 * index}%`;
    lastActive.classList.remove("dot--active");
    e.target.classList.add("dot--active");
  }
});
