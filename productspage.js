// Original that works in default
/* const smallImg = document.querySelectorAll(".product__image");
const wrapper = document.querySelector(".images");
// console.log("loaded");
// console.log(document);
// console.log(document.querySelector(".navbar"));

const actImg = wrapper.querySelector(".actImg");
console.log(actImg);
const d = function (e) {
  const sliceClick = e.src.slice(26);
  const sliceActive = actImg.src.slice(26);

  e.src = `/img/${sliceActive}`;
  actImg.src = `/img/${sliceClick}`;
};
smallImg.forEach((e) => {
  e.addEventListener("click", function () {
    d(e);
  });
}); */

////////////////////////////////////////////////
// window.open version which require to have smallImg, wrapper, actImg selectors in html
const h = function (smallImg, wrapper, actImg, actImgMobile) {
  const d = function (e) {
    // const sliceClick = e.src.slice(26);
    const sliceClick = e.src.slice(-11);
    // const sliceActive = actImg.src.slice(26);
    const sliceActive = actImg.src.slice(-11);

    e.style.filter = "blur(15px)";
    actImg.style.filter = "blur(15px)";
    actImgMobile.style.filter = "blur(15px)";
    console.log(e);
    console.log(actImgMobile);
    console.log(sliceClick);
    console.log(sliceActive);
    setTimeout(() => {
      e.style.filter = "";
      actImg.style.filter = "";
      actImgMobile.style.filter = "";
      e.src = `./${sliceActive}`;
      actImg.src = `./${sliceClick}`;
      actImgMobile.src = `./${sliceClick}`;
    }, 150);
  };
  smallImg.forEach((e) => {
    e.addEventListener("click", function () {
      d(e);
    });
  });
};
