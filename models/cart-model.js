class CartItem {
  constructor (items = []) {
    this.items = items   
  }

  addItem(product){
    this.items.push(product)      
  }
}

module.exports = CartItem;
