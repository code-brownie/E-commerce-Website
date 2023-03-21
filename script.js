console.log("HELLO THIS IS MY E-COMMERCE WEBSITE");
var ans = 0;
var flag = 0;
// Selecting the Elements
let countplus = document.getElementById('countplus');
let countminus = document.getElementById('countminus');
let count_item = document.getElementById('count_item');
let price_total = document.getElementById('cart-price-total');
let quantity = document.getElementById('quantity');
let cart_content = document.querySelector('.cart-content');
let view_cart = document.querySelector('.view-cart');
let btn = document.querySelector('btn');
let cart_count_view = document.getElementById('cart_count_view');
let s_count = document.getElementById('s-count');
if (ans == 0) {
    cart_content.innerHTML = "Your cart is Empty";
}
// Adding Event-listner
countplus.addEventListener('click', () => {
    ans = ans + 1;
    count_item.innerHTML = ans;
})
countminus.addEventListener('click', () => {
    if (ans >= 1) {
        ans = ans - 1;
    }
    count_item.innerHTML = ans;
    quantity.innerHTML = ans;
})
// Selecting the Elements 
let cart_count = document.getElementById('cart_count');
let checkout = document.querySelector('.add-button a');
checkout.addEventListener('click', () => {
    if (ans == 0) {
        cart_content.innerHTML = "Your cart is Empty";
    }
    else {
        cart_content.innerHTML = `<img src="image-product-1-thumbnail.jpg" id="img-shoes" alt="sneakers">
       <div class="text">
           <p>Brownie Limited Editions Sneakers</p>
           <div class="price-handle">
               <span class="cart-price">$ 125.00 x</span>
               <span id="quantity">${ans}</span>
               <span id="cart-price-total">${"$" + ans * 125}</span>
           </div>
       </div>`
        flag = 1;
        Alert();
        cart_count_view.innerHTML = `${ans}`;

    }

})
cart_count.addEventListener('click', () => {
    view_cart.classList.toggle('cart-drop');
    // to view the count of the item added to the cart in small view
    s_count.classList.toggle('span-view');
})

// Alert function
function Alert() {
    alert(`${ans} Items Added To Cart`);
}


// Delete button
let img_del = document.querySelector('.delete img');
img_del.addEventListener('click', () => {
    if (flag == 1) {
        ans = 0;
        count_item.innerHTML = ans;
        cart_content.innerHTML = "Your cart is Empty";
        cart_count_view.innerHTML = `${ans}`;
    }
})
// for Hamburger menu-bars

let Hamburger = document.querySelector('.hamburger');
let nav_view = document.getElementById('nav-view');
let bg = document.getElementById('bg');
Hamburger.addEventListener('click', () => {
    nav_view.classList.toggle('nav_view');
    Hamburger.classList.toggle('toggle');
    bg.classList.toggle('body');
})
// for Body fading


