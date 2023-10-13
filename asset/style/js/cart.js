const listItemCart = $('.cart-item')

const app = {
    products: [
        {   
            img:"./asset/image/draft-02.webp",
            name: "Áo Thun số 1",
            price: 100000
        },
        {   
            img:"./asset/image/draft-03.webp",
            name: "Áo Thun số 2",
            price: 200000
        },
        {
            img:"./asset/image/draft-04.webp",
            name: "Áo Thun số 3",
            price: 300000
        },
    ],
    render() {
        // "map" duyệt qua từng phần tử của mảng products rồi return về một mảng mới
        //sau đó lấy mảng mới này (htmls) chuyển thành dạng chuỗi + innerHTML vào thẻ div có class = cart-item
        const htmls = this.products.map(function (product, index) {
            return `
            <div class="item">
                <div class="left">
                    <img src="${product.img}" alt="">
                </div>
                <div class="center">
                    <p class="name">${product.name}</p>
                    <p class="price">${product.price}đ</p>
                    <input type="number" name="quantity" class="quantity" id="quantity" min="1"
                        max="999">
                </div>
                <div class="right">
                    <i class='bx bx-x remove-item'></i>
                </div>
            </div>
            `
        }).join('');
        listItemCart.innerHTML = htmls;

        const removeItemIcons = document.querySelectorAll('.remove-item');
        removeItemIcons.forEach((icon, index) => {
            icon.addEventListener('click', () => {
                this.removeItem(index);
            });
        });
    },
    removeItem(index) {
        this.products.splice(index, 1);
        this.render();
    },
    start(){
        this.render();
    }
}

app.start();