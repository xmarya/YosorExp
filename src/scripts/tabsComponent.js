
const tabs = document.querySelectorAll(".tabs div");
const forms = document.querySelectorAll(".signup-form form");

export const clickTab = (clicked) => {
 
  tabs.forEach((t) => {
    t.dataset.tab === clicked.dataset.tab ? t.classList.add("selected-tab") : t.classList.remove("selected-tab");
  });
  forms.forEach((f) => {
    f.id === clicked.dataset.tab ? f.classList.remove("display-none") : f.classList.add("display-none");
  });
}