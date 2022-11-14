const cartButtons = document.querySelectorAll('.product-item .cart');

function test(event) {
  console.log(count)
    count ++


}
let count = 1

for (const cartButton of cartButtons) {
  cartButton.addEventListener('click', test);
}
