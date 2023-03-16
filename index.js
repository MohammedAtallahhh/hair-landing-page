const achievements = [
  {
    image: "assets/images/achievements-1.png",
    content: `كانت تجربة جيدة جدا, بعد ما عانيت
        من تساقط الشعر , فكرت فى تجربة
        المنتج كـاّخر خيار لدى قبل القيام
        بعملية زراعه الشعر, وكانت النتيجة
        رائعة جداً , شكرا لكم دوريس.`,
    name: "اّدم شادي",
    title: "عميل مميز",
  },
  {
    image: "assets/images/achievements-2.png",
    content: `كانت تجربة جيدة جدا, بعد ما عانيت
        من تساقط الشعر , فكرت فى تجربة
        المنتج كـاّخر خيار لدى قبل القيام
        بعملية زراعه الشعر, وكانت النتيجة
        رائعة جداً , شكرا لكم دوريس.`,
    name: "اّدم شادي",
    title: "عميل مميز",
  },
  {
    image: "assets/images/achievements-3.png",
    content: `كانت تجربة جيدة جدا, بعد ما عانيت
        من تساقط الشعر , فكرت فى تجربة
        المنتج كـاّخر خيار لدى قبل القيام
        بعملية زراعه الشعر, وكانت النتيجة
        رائعة جداً , شكرا لكم دوريس.`,
    name: "اّدم شادي",
    title: "عميل مميز",
  },
  {
    image: "assets/images/achievements-4.png",
    content: `كانت تجربة جيدة جدا, بعد ما عانيت
        من تساقط الشعر , فكرت فى تجربة
        المنتج كـاّخر خيار لدى قبل القيام
        بعملية زراعه الشعر, وكانت النتيجة
        رائعة جداً , شكرا لكم دوريس.`,
    name: "اّدم شادي",
    title: "عميل مميز",
  },
  {
    image: "assets/images/achievements-1.png",
    content: `كانت تجربة جيدة جدا, بعد ما عانيت
        من تساقط الشعر , فكرت فى تجربة
        المنتج كـاّخر خيار لدى قبل القيام
        بعملية زراعه الشعر, وكانت النتيجة
        رائعة جداً , شكرا لكم دوريس.`,
    name: "اّدم شادي",
    title: "عميل مميز",
  },
  {
    image: "assets/images/achievements-2.png",
    content: `كانت تجربة جيدة جدا, بعد ما عانيت
        من تساقط الشعر , فكرت فى تجربة
        المنتج كـاّخر خيار لدى قبل القيام
        بعملية زراعه الشعر, وكانت النتيجة
        رائعة جداً , شكرا لكم دوريس.`,
    name: "اّدم شادي",
    title: "عميل مميز",
  },
  {
    image: "assets/images/achievements-3.png",
    content: `كانت تجربة جيدة جدا, بعد ما عانيت
        من تساقط الشعر , فكرت فى تجربة
        المنتج كـاّخر خيار لدى قبل القيام
        بعملية زراعه الشعر, وكانت النتيجة
        رائعة جداً , شكرا لكم دوريس.`,
    name: "اّدم شادي",
    title: "عميل مميز",
  },
  {
    image: "assets/images/achievements-4.png",
    content: `كانت تجربة جيدة جدا, بعد ما عانيت
        من تساقط الشعر , فكرت فى تجربة
        المنتج كـاّخر خيار لدى قبل القيام
        بعملية زراعه الشعر, وكانت النتيجة
        رائعة جداً , شكرا لكم دوريس.`,
    name: "اّدم شادي",
    title: "عميل مميز",
  },
];

const navbar = document.querySelector(".header__nav");
const menuIcon = document.querySelector(".menu-icon");

const methodSlider = document.querySelector(".method__slider .slider__inner");
const methodSliderControls = document.querySelector(
  ".method__slider .slider__controls"
);

const achievementsSlider = document.querySelector(".achievements__slider");

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
        <img src="${image}" />
        <p>${content}</p>

        <div class="slide__footer">
          <h5 class='name'>${name}</h5>
          <p>${title}</p>
        </div>
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

const s = new Swiper(".achievements__slider", {
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
