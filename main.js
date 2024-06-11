const prevBtn = document.querySelector(".arrow-btn.backward");
const nextBtn = document.querySelector(".arrow-btn.forward");
const book = document.querySelector(".book");

const paperOne = document.querySelector("#p1");
const paperTwo = document.querySelector("#p2");
const paperThree = document.querySelector("#p3");

const areas = document.querySelectorAll(".area");
const areaBtns = document.querySelectorAll(".area-btn");

areaBtns.forEach((areaBtn, i) => {
  areaBtn.addEventListener("click", () => {
    areas.forEach((area, areaIndex) => {
      area.classList.remove("active");
    });

    areaBtns.forEach((areaBt) => {
      areaBt.classList.remove("active-link");
    });

    areaBtn.classList.add("active-link");

    areas[i].classList.add("active");
  });
});

let currentLoc = 1,
  numOfPapers = 3,
  maxLocation = numOfPapers + 1;

const openBook = () => {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
};

const closeBook = (beginning) => {
  if (beginning) {
    book.style.transform = "translateX(0)";
  } else {
    book.style.transform = "translateX(100%)";
  }
  prevBtn.style.transform = "translateX(0)";
  nextBtn.style.transform = "translateX(0)";
};

const goNext = () => {
  if (currentLoc < maxLocation) {
    switch (currentLoc) {
      case 1:
        openBook();
        paperOne.classList.add("flipped");
        setTimeout(() => {
          paperOne.style.zIndex = 1;
        }, 500);
        break;
      case 2:
        paperTwo.classList.add("flipped");
        paperTwo.style.zIndex = 2;
        break;
      case 3:
        paperThree.classList.add("flipped");
        paperThree.style.zIndex = 3;
        closeBook(false);
        break;
      default:
        throw new Error("unknown state");
    }
    currentLoc++;
  }
};

const goPrev = () => {
  if (currentLoc > 1) {
    switch (currentLoc) {
      case 2:
        closeBook(true);
        paperOne.classList.remove("flipped");
        paperOne.style.zIndex = 3;
        break;
      case 3:
        paperTwo.classList.remove("flipped");
        paperTwo.style.zIndex = 2;
        break;
      case 4:
        openBook();
        paperThree.classList.remove("flipped");
        setTimeout(() => {
          paperThree.style.zIndex = 1;
        }, 500);
        break;
      default:
        throw new Error("unknown state");
    }

    currentLoc--;
  }
};

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);
