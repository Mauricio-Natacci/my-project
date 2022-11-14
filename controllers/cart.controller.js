
function loadCartPage(req, res) {
  res.render('customer/cart/items')
}

module.exports = {
  loadCartPage: loadCartPage
}