const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//slider show top header
const cardWrapper = $('.card-wrapper');
const cardWrapperChildren = Array.from(cardWrapper.children);
const widthToScroll = cardWrapper.children[0].offsetWidth;

const cardBounding = cardWrapper.getBoundingClientRect();
const column = Math.floor(cardWrapper.offsetWidth / (widthToScroll));

let currScroll = 0;
let initPos = 0;
let clicked = false;

cardWrapperChildren.slice(-column).reverse().forEach(item => {
    cardWrapper.insertAdjacentHTML('afterbegin', item.outerHTML);
});

cardWrapperChildren.slice(0, column).forEach(item => {
    cardWrapper.insertAdjacentHTML('beforeend', item.outerHTML);
});

const cardImageAndLink = cardWrapper.querySelectorAll('a');
cardImageAndLink.forEach(item => {
    item.setAttribute('draggable', false);
});

cardWrapper.classList.add('no-smooth');
cardWrapper.scrollLeft = cardWrapper.offsetWidth;
cardWrapper.classList.remove('no-smooth');


cardWrapper.onmousedown = function (e) {
    cardWrapper.classList.add('grab');
    initPos = e.clientX - cardBounding.left;
    currScroll = cardWrapper.scrollLeft;
    clicked = true;
}

cardWrapper.onmousemove = function (e) {
    if (clicked) {
        const xPos = e.clientX - cardBounding.left;
        cardWrapper.scrollLeft = currScroll + -(xPos - initPos);
    }
}


cardWrapper.onmouseup = mouseUpAndLeave;
cardWrapper.onmouseleave = mouseUpAndLeave;

function mouseUpAndLeave() {
    cardWrapper.classList.remove('grab');
    clicked = false;
}

let autoScroll;

cardWrapper.onscroll = function () {
    if (cardWrapper.scrollLeft === 0) {
        cardWrapper.classList.add('no-smooth');
        cardWrapper.scrollLeft = cardWrapper.scrollWidth - (2 * cardWrapper.offsetWidth);
        cardWrapper.classList.remove('no-smooth');
    } else if (cardWrapper.scrollLeft === cardWrapper.scrollWidth - cardWrapper.offsetWidth) {
        cardWrapper.classList.add('no-smooth');
        cardWrapper.scrollLeft = cardWrapper.offsetWidth;
        cardWrapper.classList.remove('no-smooth');
    }

    if (autoScroll) {
        clearTimeout(autoScroll);
    }

    autoScroll = setTimeout(() => {
        cardWrapper.classList.remove('no-smooth');
        cardWrapper.scrollLeft += widthToScroll;
    }, 6000);
}
//end slider show top header

//toggle
const toggleMenu = $(".bx-menu");
const toggleClose = $(".bx-x");
const menuHeaderMobile = $(".menu");

toggleMenu.addEventListener("click", () => {
    menuHeaderMobile.classList.toggle("show");
});

toggleClose.addEventListener("click", () => {
    menuHeaderMobile.classList.toggle("show");
});

// cart funtion
const cart = $(".cart");
const cartMain = $(".bx-cart");
const cartForm = $(".cart-form");
const closeForm = $(".close");

cartMain.addEventListener("click", () => {
    cart.classList.toggle("cart-menu");
});

closeForm.addEventListener("click", () => {
    cart.classList.toggle("cart-menu");
});

// banner slider page
window.onscroll = function () {
    myFunction()
};

var header = document.querySelector(".main-header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//slider show blogs
const blogs = $('.wrapper-item');
const blogitemChild = Array.from(blogs.children);
const widthToScrollBlogs = blogs.children[0].offsetWidth;

const cardBoundingBlogs = blogs.getBoundingClientRect();
const columnBlogs = Math.floor(blogs.offsetWidth / (widthToScrollBlogs));

// let currScroll = 0;
// let initPos = 0;
// let clicked = false;

blogitemChild.slice(-columnBlogs).reverse().forEach(item => {
    blogs.insertAdjacentHTML('afterbegin', item.outerHTML);
});

blogitemChild.slice(0, columnBlogs).forEach(item => {
    blogs.insertAdjacentHTML('beforeend', item.outerHTML);
});

const cardImageAndLinkBlogs = blogs.querySelectorAll('img, a');
cardImageAndLinkBlogs.forEach(item => {
    item.setAttribute('draggable', false);
});

blogs.classList.add('no-smooth');
blogs.scrollLeft = blogs.offsetWidth;
blogs.classList.remove('no-smooth');


blogs.onmousedown = function (e) {
    blogs.classList.add('grab');
    initPos = e.clientX - cardBoundingBlogs.left;
    currScroll = blogs.scrollLeft;
    clicked = true;
}

blogs.onmousemove = function (e) {
    if (clicked) {
        const xPos = e.clientX - cardBoundingBlogs.left;
        blogs.scrollLeft = currScroll + -(xPos - initPos);
    }
}


blogs.onmouseup = mouseUpAndLeave;
blogs.onmouseleave = mouseUpAndLeave;

function mouseUpAndLeave() {
    blogs.classList.remove('grab');
    clicked = false;
}

blogs.onscroll = function () {
    if (blogs.scrollLeft === 0) {
        blogs.classList.add('no-smooth');
        blogs.scrollLeft = blogs.scrollWidth - (2 * blogs.offsetWidth);
        blogs.classList.remove('no-smooth');
    } else if (blogs.scrollLeft === blogs.scrollWidth - blogs.offsetWidth) {
        blogs.classList.add('no-smooth');
        blogs.scrollLeft = blogs.offsetWidth;
        blogs.classList.remove('no-smooth');
    }

    if (autoScroll) {
        clearTimeout(autoScroll);
    }

    autoScroll = setTimeout(() => {
        blogs.classList.remove('no-smooth');
        blogs.scrollLeft += widthToScrollBlogs;
    }, 6000);
}
//end slider show top header