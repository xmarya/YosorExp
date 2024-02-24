import { startCounter } from "./src/scripts/counter.js";
import { startSlider } from "./src/scripts/slider.js";
import { clickTab } from "./src/scripts/tabsComponent.js";

// document.querySelector(".stats-section") && startCounter();
document.querySelector(".reviews-section") && startSlider();

const tabsContainer = document.querySelector(".tabs");

tabsContainer &&
  tabsContainer.addEventListener("click", (event) => {
    const clicked = event.target.closest(".tab");
    if (!clicked) return;
    clickTab(clicked);
  });

const allSection = document.querySelectorAll("section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  if (entry.target.className.includes("form")) return;

  entry.target.classList.remove("section-hidden");
  if (entry.target.className === "stats-section") startCounter();
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2, // 20% visible  of the section
});

allSection.forEach((section) => {
  if (!section.className.includes("form")) {
    sectionObserver.observe(section);
    section.classList.add("section-hidden");
  }
});
