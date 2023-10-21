//slider show blogs
const blogs = $('.wrapper-item');
const blogitemChild = Array.from(blogs.children);
const widthToScrollBlogs = blogs.children[0].offsetWidth;

const cardBoundingBlogs = blogs.getBoundingClientRect();
const columnBlogs = Math.floor(blogs.offsetWidth / (widthToScrollBlogs));

let currScroll = 0;
let initPos = 0;
let clicked = false;

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