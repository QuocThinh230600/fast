const arrow = document.querySelector(".bx-chevron-right");
const showItemCategory = document.querySelector(".category-item");

arrow.addEventListener("click", () => {
    showItemCategory.classList.toggle("show");
});

const filter = document.querySelector(".bx-filter");
const showItemFilter = document.querySelector(".filter-item");

filter.addEventListener("click", () => {
    showItemFilter.classList.toggle("show");
});

if (arrow === true){
    filter.addEventListener("click", () => {
        showItemFilter.classList.toggle("show");
    });
}