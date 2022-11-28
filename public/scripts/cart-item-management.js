const updateButtons = document.querySelectorAll('.cart-item-management')
const cartBadgeElement = document.querySelector('.nav__links .badge')
const finalTotalPrice = document.getElementById('final-price')
const buttonBuyProducts = document.getElementById('buy-products-button')

async function updateCartItem(event) {
  event.preventDefault()

  const form = event.target

  const productId = form.dataset.productid
  const csrfToken = form.dataset.csrf
  const quantity = form.firstElementChild.value

  let response

  try {
    response = await fetch('/cart/items', {
      method: 'PATCH',
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
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
    return
  }

  const responseData = await response.json()

  if (responseData.updatedCartData.updatedItemPrice === 0) {
    form.parentElement.parentElement.remove()
    
  } else {
    const totalPriceElement = form.parentElement.querySelector(
      '.cart-item-total-price'
    )
    totalPriceElement.textContent =
      responseData.updatedCartData.updatedItemPrice.toFixed(2)
  }

  cartBadgeElement.textContent = responseData.updatedCartData.newTotalQuantity
  finalTotalPrice.textContent =
    responseData.updatedCartData.newTotalPrice.toFixed(2)


  if (responseData.updatedCartData.newTotalPrice === 0) {
    buttonBuyProducts.style.display = 'none'
  }

  
}

for (const updateButton of updateButtons) {
  updateButton.addEventListener('submit', updateCartItem)
}
