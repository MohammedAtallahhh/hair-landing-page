import { achievements } from "./data.js";

const navbar = document.querySelector(".header__nav");
const menuIcon = document.querySelector(".menu-icon");

const achievementsSlider = document.querySelector(".achievements__slider");

const accordion = document.querySelector(".faq .content__accordion");

// Make the header sticky on scroll
window.addEventListener("scroll", () => {
  // header.classList.toggle("scrolled");
  document.body.classList.toggle("scrolled", scrollY > 200);
});

// Navbar mobile menu
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("header__nav--active");
});

const populateAchievementsSlider = () => {
  const sliderInner = achievementsSlider.querySelector(".swiper-wrapper");

  achievements.forEach(({ image, content, name, title }, i) => {
    const slide = `
      <div class='swiper-slide slide'>
        <img src="${image}" alt='person image'/>
        <p>${content}</p>
        <h5 class='name'>${name}</h5>
        <p>${title}</p>

        <img src='/assets/images/quotes.png' class='quote'/>
      </div>
    `;

    sliderInner.insertAdjacentHTML("beforeend", slide);
  });
};

populateAchievementsSlider();

new Swiper(".method__slider", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".method__slider__controls",
  },
});

new Swiper(".achievements__slider", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  },
  autoplay: true,

  pagination: {
    el: ".achievements__slider__controls",
  },
});

// Accordion
accordion.addEventListener("click", (e) => {
  const target = e.target.closest(".content__accordion .item__btn");
  if (!target) return;

  const lastActive = accordion.querySelector(
    ".content__accordion .accordion__item.active"
  );

  lastActive &&
    lastActive !== target.parentElement &&
    lastActive.classList.remove("active");
  target.parentElement.classList.toggle("active");
});
