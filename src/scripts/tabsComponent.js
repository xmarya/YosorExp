
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

const packageTab = document.querySelectorAll(".packages-tabs .tab");
const packageDetail = document.querySelectorAll("#tab-detail");

export const clickPackageTab = (clicked) => {
  packageTab.forEach((t) => {
    t.dataset.tab === clicked.dataset.tab ? t.classList.add("active--package-tab") : t.classList.remove("active--package-tab");
  });

  packageDetail.forEach(pd => {
    if(pd.dataset.tab === clicked.dataset.tab) {      
      pd.classList.remove("display-none");
      pd.classList.add("tab-detail--active");
    }
    else {
      pd.classList.remove("tab-detail--active");
      pd.classList.add("display-none");
    }
  });
}
