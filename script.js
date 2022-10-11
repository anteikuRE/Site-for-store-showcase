// tabs

const tabs = function () {
  const allTabs = document.querySelectorAll(".tabs");
  const tabContainer = document.querySelector(".tabs__container");
  const collectionDesc = document.querySelectorAll(
    ".collection__review__description"
  );
  // console.log(tabContainer !== null);
  if (tabContainer !== null) {
    tabContainer.addEventListener("click", function (e) {
      const clicked = e.target.closest(".tabs");
      if (clicked !== null && clicked.classList.contains("tabs")) {
        allTabs.forEach((e) => {
          e.classList.remove("tab--active");
        });
        clicked.classList.add("tab--active");
        collectionDesc.forEach((e) => {
          e.classList.add("hidden");
          if (
            e.classList.contains(`description-${clicked.classList[1].slice(4)}`)
          ) {
            e.classList.remove("hidden");
          }
        });
      }
    });
  }
};
tabs();

// client words slider

const slider = function () {
  const slides = document.querySelectorAll(".clients-words__client");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = 2;
    } else {
      curSlide = curSlide - 1;
    }
    goToSlide(curSlide);
  };
  const nextSlide = function () {
    if (curSlide === 2) {
      curSlide = 0;
    } else {
      curSlide = curSlide + 1;
    }
    goToSlide(curSlide);
  };
  if (btnLeft !== null && btnRight !== null) {
    btnLeft.addEventListener("click", prevSlide);
    btnRight.addEventListener("click", nextSlide);
  }
};
slider();

// open collection arrow

//scroll func
const Scroll = function (it) {
  setTimeout(() => {
    it.scrollIntoView({ behavior: "smooth" });
  }, 20);
};

// check collection and scroll to
const collection = function () {
  let open = false;
  const continueBtn = document.querySelectorAll(".collection__continue");

  continueBtn.forEach((e) => {
    e.addEventListener("click", function () {
      const currBtn = e;
      const currBtnWrapper = currBtn.closest(".collection__continue__wrap");
      const currCollection = currBtnWrapper.parentElement.children[1];
      const hiddenElements =
        currCollection.getElementsByClassName("product--hidden");

      if (open === true) {
        for (let item of hiddenElements) {
          open = false;
          item.style.display = "none";
          currBtn.style.backgroundColor = "";
          Scroll(item);
        }
      } else if (open === false) {
        for (let item of hiddenElements) {
          open = true;
          item.style.display = "block";
          currBtn.style.backgroundColor = "#b48b31";
          Scroll(item);
        }
      }
    });
  });
};
collection();

// navbar burger menu
const burgMenu = function () {
  let open = false;
  const burger = document.querySelector(".burger");
  const bothLines = document.querySelectorAll(".line");
  const line1 = document.querySelector(".line-1");
  const line2 = document.querySelector(".line-2");
  const burgerText = document.querySelector(".burger__text");
  burger.addEventListener("click", function () {
    if (open === false) {
      line1.style.transform = "rotateZ(45deg) translateY(5px)";
      line2.style.transform = "rotateZ(-45deg) translateY(-5px)";
      line2.style.marginTop = "4px";
      burgerText.style.display = " flex";
      setTimeout(() => {
        burgerText.style.transform = "translateX(5%)";
      }, 5);
      burgerText.parentElement.style.backgroundColor = "black";
      burgerText.parentElement.style.width = "115px";
      bothLines.forEach((e) => {
        e.style.backgroundColor = "#f5edea";
      });
      open = true;
    } else if (open === true) {
      line1.style.transform = "unset";
      line2.style.transform = "unset";
      line2.style.marginTop = "8px";
      burgerText.style.display = "none";
      burgerText.parentElement.style.backgroundColor = "unset";
      burgerText.style.transform = "translateX(70%)";
      bothLines.forEach((e) => {
        e.style.backgroundColor = "black";
      });
      burgerText.parentElement.style.width = "40px";
      open = false;
    }
  });
};
burgMenu();

// scroll from about and work btns
const navbarScroll = function () {
  const navbarAbout = document.querySelectorAll(".navbar__about");
  const navbarWork = document.querySelectorAll(".navbar__work");
  const collectionReview = document.querySelector(".collection__review");
  const collections = document.querySelector(".collection");

  navbarAbout.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      Scroll(collectionReview);
    });
  });

  navbarWork.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      Scroll(collections);
    });
  });
};
navbarScroll();

// learn more scroll
const heroScroll = function () {
  const heroImgBtn = document.querySelector(".hero__btn");
  const collectionReview = document.querySelector(".collection__review");
  heroImgBtn.addEventListener("click", function () {
    console.log(12123);
    Scroll(collectionReview);
  });
};
heroScroll();

// Generator of product pages
// markup
const markupHead = function () {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="normalize.css" />
      <link rel="stylesheet" href="css/productPage.css" />
      <link rel="stylesheet" href="css/navbar.css" />
      <link rel="stylesheet" href="css/footer.css" />
      <link rel="stylesheet" href="css/main.css" />
      <script defer src="script.js"></script>
      <script src="productspage.js"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </head>
  `;
};

const markupMain = function (number) {
  return `
  <body>
  <div class="navbar">
    <img src="logos/Intersect.svg" alt="" />
    <div class="navbar__text">
      <a href="index.html">Home</a>
    </div>
    <div class="hamburger__menu__wrapper">
      <div class="burger__text" style="display: none">
        <a href="index.html">Home</a>
      </div>
      <div class="burger" style="display: none">
        <div class="lines__wrapper">
          <div class="lines">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="product__wrapper">
    <div class="showcase">
      <div class="images">
        <img src="./img/${number}-1.jpg" alt="" class="actImg" />
        <img src="./img/${number}-2.jpg" alt="" class="product__image" />
        <img src="./img/${number}-3.jpg" alt="" class="product__image" />
        <img src="./img/${number}-4.jpg" alt="" class="product__image" />
      </div>
      <div class="product__description">
        <h1>Cross Body Bag</h1>
        <h4>&#36 190</h4>
        <div class="order__info">
          <span>Order by:</span>
          <span>Email: asdo@gmail.com</span>
          <span>Phone: +380129313</span>
        </div>
      </div>
    </div>

    <div class="showcase--mobile">
        <h1>Product Name</h1>
        <div class="images--mobile">

        <img src="./img/${number}-1.jpg" alt="" class="actImg actImg--mobile" />
        <div class="small-wrapper--mobile">
          <img src="./img/${number}-2.jpg" alt="" class="product__image product__image--mobile" />
          <img src="./img/${number}-3.jpg" alt="" class="product__image product__image--mobile" />
          <img src="./img/${number}-4.jpg" alt="" class="product__image product__image--mobile" />
        </div>
      </div>
     
          <div class="order__info--mobile">
            <h4>&#36 190</h4>
            <span>Order by:</span>
            <span>Email: asdo@gmail.com</span>
            <span>Phone: +380129313</span>
          </div>
    </div>

  </div>
  <footer>
    <div class="footer__main">
      <div class="footer__rows__wrapper">
        <div class="footer__rows">
          <div class="footer__row">
            <h1>Product</h1>
            <a href="#" target="_blank">Diam orci</a>
            <a href="#" target="_blank">Diam orci</a>
            <a href="#" target="_blank">Diam orci</a>
            <a href="#" target="_blank">Diam orci</a>
            <a href="#" target="_blank">Diam orci</a>
            <a href="#" target="_blank">Diam orci</a>
          </div>
          <div class="footer__row">
            <h1>Information</h1>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
          </div>
          <div class="footer__row">
            <h1>Company</h1>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
            <a href="#">Diam orci</a>
          </div>
        </div>
      </div>
      <div class="footer__logos navbar">
      <p style="color: #fff">&#169; 2022 Artem Lykhachevskyi</p>
        <div class="footer__text navbar__text">
          <a href="http://tiktok.com" target="_blank"
            ><img src="./logos/tiktok logo.svg" alt=""
          /></a>
          <a href="http://instagram.com" target="_blank"
            ><img src="./logos/inst logo.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </footer>
  <script>
      const smallImg = document.querySelectorAll(".product__image");
const wrapper = document.querySelector(".images");
const wrapperMobile = document.querySelector(".images--mobile");
const actImg = wrapper.querySelector(".actImg");
const actImgMobile = wrapperMobile.querySelector(".actImg--mobile");
h(smallImg, wrapper, actImg, actImgMobile)
</script>
</body>
  `;
};
// set that helps to remember which products was open
let as = new Set();
const t = function (t, set) {
  const w = t;

  w.addEventListener("pagehide", function () {
    as.delete(w.name);
  });
};

// generator of page
const openProduct = function () {
  let curPage;

  let w;

  const product = document.querySelectorAll(".product");
  product.forEach((e) => {
    e.addEventListener("click", function () {
      const lengthOfSrc = e.children[0].src.split("/").length;
      const lengthOfJpg =
        e.children[0].src.split("/")[lengthOfSrc - 1].length - 1;

      curPage = e.children[0].src
        .split("/")
        [lengthOfSrc - 1].slice(0, -lengthOfJpg);

      console.log(curPage);
      w = curPage + "";

      w = window.open("", curPage);
      console.log(as.has(curPage));
      if (!as.has(curPage)) {
        w.document.write(markupHead());
        w.document.write(markupMain(curPage));
      }
      as.add(curPage + "");
      t(w, as);
    });
  });
};
openProduct();
