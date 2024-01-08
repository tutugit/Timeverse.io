window.onload = function () {
  // init swiper 1
  initSwiper1();
  // init swiper 2
  initSwiper2();
  // init swiper 3
  initSwiper3();
};

/**init swiper1 */
function initSwiper1() {
  var swiper1 = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 2000,
  });

  let preNav = document.querySelector(".nivo-prevNav");
  let nextNav = document.querySelector(".nivo-nextNav");
  preNav.addEventListener("click", function () {
    swiper1.slidePrev();
  });
  nextNav.addEventListener("click", function () {
    swiper1.slideNext();
  });
}

/**init swiper2 */
function initSwiper2() {
  let swiperList = document
    .querySelector(".swiper2")
    .getElementsByClassName("swiper-slide");

  for (let i = 0; i < swiperList.length; i++) {
    swiperList[i].addEventListener("mouseover", function () {
      for (let o = 0; o < swiperList.length; o++) {
        swiperList[o].style.opacity = "0.4";
      }
      swiperList[i].style.opacity = "1";
    });
    swiperList[i].addEventListener("mouseout", function () {
      for (let o = 0; o < swiperList.length; o++) {
        swiperList[o].style.opacity = "1";
      }
    });
  }

  let preNav = document.querySelector(".wall-prevNav");
  let nextNav = document.querySelector(".wall-nextNav");
  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    on: {
      slideChange: function () {
        if (swiper2.isBeginning) {
          preNav.classList.add("disabled");
          nextNav.classList.remove("disabled");
        } else if (swiper2.isEnd) {
          preNav.classList.remove("disabled");
          nextNav.classList.add("disabled");
        } else {
          preNav.classList.remove("disabled");
          nextNav.classList.remove("disabled");
        }
      },
    },
  });

  preNav.addEventListener("click", function () {
    swiper2.slidePrev();
  });
  nextNav.addEventListener("click", function () {
    swiper2.slideNext();
  });
}

/**init swiper3 */
var swiper3 = null;
var backImgList = null;
var textList = null;
function initSwiper3() {
  backImgList = document
    .querySelector(".swiper3-background")
    .getElementsByTagName("img");
  textList = document
    .querySelector(".text-container")
    .getElementsByTagName("div");
  let btnList = document
    .querySelector(".sm-nav")
    .getElementsByTagName("button");

  let preNav = document
    .querySelector(".s-container")
    .querySelector(".wall-prevNav");
  let nextNav = document
    .querySelector(".s-container")
    .querySelector(".wall-nextNav");
  swiper3 = new Swiper(".swiper3", {
    effect: "fade",
    speed: 800,
    on: {
      slideChange: function () {
        backImgList[this.previousIndex].style.display = "none";
        backImgList[this.activeIndex].style.display = "block";
        textList[this.previousIndex].style.display = "none";
        textList[this.activeIndex].style.display = "block";
        if (swiper3.isBeginning) {
          preNav.classList.add("disabled");
          nextNav.classList.remove("disabled");
        } else if (swiper3.isEnd) {
          preNav.classList.remove("disabled");
          nextNav.classList.add("disabled");
        } else {
          preNav.classList.remove("disabled");
          nextNav.classList.remove("disabled");
        }
      },
    },
  });

  for (let x = 0; x < btnList.length; x++) {
    btnList[x].addEventListener("click", function () {
      swiper3.slideTo(x, 800);
      for (let v = 0; v < textList.length; v++) {
        backImgList[v].style.display = "none";
        textList[v].style.display = "none";
      }
      backImgList[x].style.display = "block";
      textList[x].style.display = "block";
    });
  }

  preNav.addEventListener("click", function () {
    swiper3.slidePrev();
  });
  nextNav.addEventListener("click", function () {
    swiper3.slideNext();
  });
}

/**contraol swiper3-container */
function contraolSwiper3(index) {
  let swiper3Container = document.querySelector(".swiper3-container");
  // close swiper 3
  if (index === undefined) {
    swiper3Container.style.display = "none";
    return;
  }

  // open swiper 3
  for (let i = 0; i < textList.length; i++) {
    backImgList[i].style.display = "none";
    textList[i].style.display = "none";
  }
  backImgList[index].style.display = "block";
  textList[index].style.display = "block";
  swiper3.slideTo(index, 0);
  swiper3Container.style.display = "block";
}

/**top item scroll animation */
var top4,
  top5,
  top6,
  top7,
  top8 = 0;
window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY;
  var offset = scrollTop;
  top4 = scrollTop * 1.1;
  top5 = scrollTop * 1.1;
  top6 = scrollTop * 1.2;
  top7 = scrollTop * 1.3;
  top8 = scrollTop * 1.25;
  this.document.querySelector(
    ".bk4"
  ).style.transform = `translate3d(0px, -${top4}px, 0px)`;
  this.document.querySelector(
    ".bk5"
  ).style.transform = `translate3d(0px, -${top5}px, 0px)`;
  this.document.querySelector(
    ".bk6"
  ).style.transform = `translate3d(0px, -${top6}px, 0px)`;
  this.document.querySelector(
    ".bk7"
  ).style.transform = `translate3d(0px, -${top7}px, 0px)`;
  this.document.querySelector(
    ".bk8"
  ).style.transform = `translate3d(0px, -${top8}px, 0px)`;
  this.document.querySelector(
    ".bk9"
  ).style.transform = `translate3d(0px, -${top8}px, 0px)`;
  this.document.querySelector(
    ".bk10"
  ).style.transform = `translate3d(0px, -${top8}px, 0px)`;
});

/**active Character */
var characterActiveIndex = 0;
function onClickCharacter(index) {
  if (characterActiveIndex === index) return;
  characterActiveIndex = index;
  let buttonList = document.getElementsByClassName("home-characters--button");
  let characterCards = document.getElementsByClassName("character-card");
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("is-active");
    characterCards[i].classList.remove("is-active");
  }
  buttonList[index].classList.add("is-active");
  characterCards[index].classList.add("is-active");
}
