/* Menu Open */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("navbar-active");
};

addEventOnElements(navToggler, "click", toggleNavbar);

/* Header Stick */
const header = document.querySelector('[data-header]');
let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

const debouncedHideHeader = debounce(hideHeader, 100);

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    debouncedHideHeader();
  } else {
    header.classList.remove("active");
  }
});

/* Debounce function */
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/* Slider */
const menuSlider = document.querySelector('[data-main-slider]');
const sliderList = document.querySelectorAll('[data-slider-item]');
const prevBtn = document.querySelector('[data-prev-btn]');
const nextBtn = document.querySelector('[data-next-btn]');

if (menuSlider && sliderList && prevBtn && nextBtn) {
  let currentSlidePos = 0;
  let lastActiveSliderItem = sliderList[0];

  const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    sliderList[currentSlidePos].classList.add("active");
    lastActiveSliderItem = sliderList[currentSlidePos];
  };

  const nextFun = function () {
    if (currentSlidePos >= sliderList.length - 1) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }
    updateSliderPos();
  };

  nextBtn.addEventListener("click", nextFun);

  const prevFun = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = sliderList.length - 1;
    } else {
      currentSlidePos--;
    }
    updateSliderPos();
  };

  prevBtn.addEventListener("click", prevFun);

  /* For auto slide */
  let slideInterval;

  const startSlide = function () {
    slideInterval = setInterval(function () {
      nextFun();
    }, 7000);
  };

  window.addEventListener("load", startSlide);
}



/* Card slider swiper */
const initializeSlider = function () {
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      426: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1183: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
};

window.addEventListener("load", initializeSlider);

/* Tabs */
var tabToggleButtons = document.querySelectorAll('.TabToggleBtn');
var tabItems = document.querySelectorAll('.tab-item');

tabToggleButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    tabToggleButtons.forEach(function (btn) {
      btn.classList.remove('active-btn');
    });
    tabItems.forEach(function (tab) {
      if (tab.classList.contains('active-tab-item')) {
        tab.style.opacity = 0;
        setTimeout(function () {
          tab.classList.remove('active-tab-item');
        }, 500);
      }
    });

    button.classList.add('active-btn');
    tabItems[index].style.opacity = 0;
    tabItems[index].classList.add('active-tab-item');
    setTimeout(function () {
      tabItems[index].style.opacity = 1;
    }, 30);
  });
});




/*Testimonial */
const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    const { className } = slide;
    if (className.includes("swiper-slide-next")) {
      swiper.slideNext();
    } else if (className.includes("swiper-slide-prev")) {
      swiper.slidePrev();
    }
  });
}




/*Load High resolution image slowly */
 document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = document.querySelectorAll("[data-src]");

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(lazyImage);
      }
    });
  }, { rootMargin: "100px 0px 100px 0px" }); // Adjust the rootMargin as needed

  lazyImages.forEach(function (lazyImage) {
    observer.observe(lazyImage);
  });
}); 
/*
if using this jS use data-src instead of src in html
*/

