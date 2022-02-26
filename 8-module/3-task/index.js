export default class Cart {
  cartItems = []; 

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product)
      return;
    let item = this.cartItems.find(item => item.product === product);

    if (item) {
      item.count += 1;
    } else {
      item = {
        product,
        count: 1
      };
      this.cartItems.push(item);
    }
    this.onProductUpdate(item);
  }

  updateProductCount(productId, amount) {
    let item = this.cartItems.find(el => el.product.id === productId);
    item.count += amount;
    if (!item.count) {
      this.cartItems.splice(this.cartItems.indexOf(item),1);
    }
    this.onProductUpdate(item);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((totalCount, item) => totalCount + item.count, 0);
  }
  getTotalPrice() {
    return this.cartItems.reduce((totalPrice, item) => totalPrice + (item.product.price * item.count), 0);
  }


  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
  }
}
