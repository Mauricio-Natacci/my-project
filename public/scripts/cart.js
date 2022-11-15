const cartButtons = document.querySelectorAll('.product-item .cart');

function test(event) {
  const button = event.target;
  const id = button.dataset.productid;
  const csrfToken = button.dataset.csrf;
  
  console.log(id)

}

for (const cartButton of cartButtons) {
  cartButton.addEventListener('click', test);
}
