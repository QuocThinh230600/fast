const arrow = document.querySelector(".bx-chevron-right");
const showItemCategory = document.querySelector(".category-item");
const showCategory = document.querySelector(".category");
const showItemNameCategory = document.querySelector(".category p");

arrow.addEventListener("click", () => {
    showItemFilter.classList.remove("show");
    setTimeout(() => {
        showItemCategory.classList.toggle("show");
        showCategory.classList.toggle("show");
    }, 200)
});

showItemNameCategory.addEventListener("click", () => {
    showItemFilter.classList.remove("show");
    setTimeout(() => {
        showItemCategory.classList.toggle("show");
        showCategory.classList.toggle("show");
    }, 200)
});

const filter = document.querySelector(".bx-filter");
const showItemFilter = document.querySelector(".filter-item");
const showItemNameFilter = document.querySelector(".main-filter p");
const showFilter = document.querySelector(".main-filter");

filter.addEventListener("click", () => {
    showItemCategory.classList.remove("show");
    showCategory.classList.remove("show");

    setTimeout(() => {
        showItemFilter.classList.toggle("show");

    }, 200);

});

showItemNameFilter.addEventListener("click", () => {
    showItemCategory.classList.remove("show");
    showCategory.classList.remove("show");
    setTimeout(() => {
        showItemFilter.classList.toggle("show");
        showFilter.classList.toggle("show");
    }, 200);

});
