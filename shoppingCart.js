let shoppingCart = new Object();
// const addToCart = (item, quantity) => {
//   console.log(shoppingCart);
//   shoppingCart[item] = quantity;
//   console.log(shoppingCart);
//   return shoppingCart[item];
// };
// console.log(addToCart("apple", 5));
// console.log(addToCart("banana", 90));
module.exports = {
  addToCart: (item, quantity) => {
    // console.log(shoppingCart);
    shoppingCart[item] = quantity;
    // console.log(shoppingCart);
    return shoppingCart;
  },

  removeFromCart: (item, quantity) => {
    for (key in shoppingCart) {
      if (key === item) {
        if (shoppingCart[key] < quantity) {
          shoppingCart[key] =
            shoppingCart[key] - quantity + (quantity - shoppingCart[key]);
          return shoppingCart[key];
          //   return 0;
        }
        shoppingCart[key] -= quantity;
        return shoppingCart[key]; //returns value of
      }
    }
    return;
  },

  calculateTotal: () => {
    let total = 0;
    for (key in shoppingCart) {
      total += shoppingCart[key];
    }
    return total;
  },
};
