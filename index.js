import { achievements } from "./data.js";

const navbar = document.querySelector(".header__nav");
const menuIcon = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".nav__list .close");

const achievementsSlider = document.querySelector(".achievements__slider");

const accordion = document.querySelector(".faq .content__accordion");

// Make the header sticky on scroll
window.addEventListener("scroll", () => {
  // header.classList.toggle("scrolled");
  document.body.classList.toggle("scrolled", scrollY > 200);
});
document.body.classList.toggle("scrolled", scrollY > 200);

// Navbar mobile menu
menuIcon.addEventListener("click", () => {
  navbar.classList.add("header__nav--active");
  document.body.classList.add("no-scroll");
});

menuClose.addEventListener("click", () => {
  navbar.classList.remove("header__nav--active");
  document.body.classList.remove("no-scroll");
});

// Close navbar on clicking outside or clicking on a link
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".header__nav") &&
    !e.target.closest(".menu-icon") &&
    navbar.classList.contains("header__nav--active")
  ) {
    navbar.classList.remove("header__nav--active");
    document.body.classList.remove("no-scroll");
  }
});

navbar.addEventListener("click", (e) => {
  if (e.target.closest(".nav__link")) {
    navbar.classList.remove("header__nav--active");
    document.body.classList.remove("no-scroll");
  }
});

const populateAchievementsSlider = () => {
  const sliderInner = achievementsSlider.querySelector(".swiper-wrapper");

  achievements.forEach(({ image, content, name, title }, i) => {
    const slide = `
      <div class='swiper-slide slide'>
        <img src="${image}" alt='person image' class='image'/>
        <p>${content}</p>
        <h5 class='name'>${name}</h5>
        <span>${title}</span>

        <div class='quote'>
          <img src='./assets/images/quotes.png'/>
        </div>
      </div>
    `;

    sliderInner.insertAdjacentHTML("beforeend", slide);
  });
};

populateAchievementsSlider();

// Sliders
new Swiper(".product-components__slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".components__slider__controls",
    clickable: true,
  },
});

new Swiper(".about__slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: true,

  breakpoints: {
    541: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".about__slider__controls",
    clickable: true,
  },
});

new Swiper(".pros__slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".pros__slider__controls",
    clickable: true,
  },
});

new Swiper(".method__slider", {
  autoplay: true,
  pagination: {
    el: ".method__slider__controls",
    clickable: true,
  },
});

new Swiper(".results__slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".results__slider__controls",
    clickable: true,
  },
});

new Swiper(".achievements__slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: true,
  breakpoints: {
    541: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  // autoplay: true,

  pagination: {
    el: ".achievements__slider__controls",
    clickable: true,
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
