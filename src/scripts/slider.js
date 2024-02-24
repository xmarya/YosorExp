const allSlides = document.querySelectorAll(".slide");

allSlides.forEach((slide) => {    
  const contentHeight = slide.scrollHeight;
  if (contentHeight > 15 * 16) {
    // 15rem * 16px (default font-size)
    slide.style.fontSize = "16px";
  }
});



const numOfSlides = allSlides.length - 1;

let activeSlide = 0;
let loop;

export const startSlider = () => {
    
  allSlides[numOfSlides].classList.add("previous");
  allSlides[0].classList.add("active");
  allSlides[1].classList.add("next");

  // Moving to the next slide after 4s:
  loop = setInterval(setNext, 4000);
};

const setNext = () => {
  allSlides[activeSlide].classList.remove("active");
  allSlides[activeSlide].classList.add("previous");

  let next = activeSlide < numOfSlides ? activeSlide + 1 : 0;
  allSlides[next].classList.remove("previous");
  allSlides[next].classList.remove("next");
  allSlides[next].classList.add("active");

  if (next < numOfSlides) {
    allSlides[next + 1].classList.remove("previous");
    allSlides[next + 1].classList.add("next");
  } else {
    allSlides[0].classList.remove("previous");
    allSlides[0].classList.add("next");
  }

  activeSlide = next;
};

const setPrev = () => {
  allSlides[activeSlide].classList.remove("active");
  allSlides[activeSlide].classList.add("next");

  let prev = activeSlide > 0 ? activeSlide - 1 : allSlides.length - 1;
  allSlides[prev].classList.remove("next");
  allSlides[prev].classList.remove("previous");
  allSlides[prev].classList.add("active");

  if (prev > 0) {
    allSlides[prev - 1].classList.add("previous");
    allSlides[prev - 1].classList.remove("next");
  } else {
    allSlides[allSlides.length - 1].classList.remove("next");
    allSlides[allSlides.length - 1].classList.add("previous");
  }

  activeSlide = prev;
};

const goPrev = document.querySelector(".go-prev");
goPrev && goPrev.addEventListener("click", function (event) {
  event.preventDefault();
  setPrev();
});

const goNext = document.querySelector(".go-next");

goNext && goNext.addEventListener("click", function (event) {
  event.preventDefault();
  setNext();
});

document.addEventListener("keydown", function (event) {
  // stop the loop to prevent slides' conflict:
  clearInterval(loop);
  event.key === "ArrowLeft" && setPrev();
  event.key === "ArrowRight" && setNext();

  // start the loop again:
  loop = setInterval(setNext, 4000);
});
