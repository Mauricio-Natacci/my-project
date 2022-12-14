class Cart {
  constructor(items = [], totalQuantity = 0, totalPrice = 0) {
    this.items = items
    this.totalQuantity = totalQuantity
    this.totalPrice = totalPrice
  }

  addItem(product) {
    const cartItem = {
      product: product,
      quantity: 1,
      totalPrice: product.price
    }

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (item.product.id === product.id) {
        cartItem.quantity = +item.quantity + 1
        cartItem.totalPrice = item.totalPrice + product.price
        this.items[i] = cartItem

        this.totalQuantity++
        this.totalPrice = +this.totalPrice + product.price
        return
      }
    }

    this.items.push(cartItem)
    this.totalQuantity++
    this.totalPrice = this.totalPrice + product.price
  }

  updateItem(productId, newQuantity) {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (newQuantity > 0) {
        if (item.product.id === productId) {
          const cartItem = { ...item }
          const quantityChange = newQuantity - item.quantity
          cartItem.quantity = newQuantity
          cartItem.totalPrice = newQuantity * item.product.price
          this.items[i] = cartItem

          this.totalQuantity = this.totalQuantity + quantityChange
          this.totalPrice += quantityChange * item.product.price
          return { updatedItemPrice: cartItem.totalPrice }
        }
      } else if (newQuantity <= 0) {
        if (item.product.id === productId) {
          this.items.splice(i, 1)

          this.totalQuantity = this.totalQuantity - item.quantity
          this.totalPrice = this.totalPrice - item.totalPrice

          if (this.totalPrice <= 0) {
            this.totalPrice = 0
          }
          return { updatedItemPrice: 0 }
        } 
      }
    }
  }
}

module.exports = Cart
