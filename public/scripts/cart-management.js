const cartButtons = document.querySelectorAll('.product-item .cart');
const cartBadgeElement = document.querySelector('.nav__links .badge')

async function AddToCart(event) {
  const button = event.target;
  const productId = button.dataset.productid;
  const csrfToken = button.dataset.csrf;
  
  let response 

  try {
    response = await fetch('/cart/items', {
    method: 'POST',
    body: JSON.stringify({
      productId:productId,
    _csrf: csrfToken
    }), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  } catch (error) {
    alert('Something went wrong!')
    return
  }

  if (!response.ok) {
    alert('Something went wrong!')
  }

  const responseData = await response.json()

  const newTotalQuantity = responseData.newTotalItems


  cartBadgeElement.textContent = newTotalQuantity

  console.log(productId)
}

for (const cartButton of cartButtons) {
  cartButton.addEventListener('click', AddToCart);
}
