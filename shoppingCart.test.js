const {
  addToCart,
  removeFromCart,
  calculateTotal,
} = require("./shoppingCart.js");

describe("shoppingCart functions work", () => {
  //ADD TO CART
  test("addToCart('apple', 5) => {apple: 5}", () => {
    expect(addToCart("apple", 5)).toEqual({ apple: 5 });
  });
  //CALCULATE TOTAL NUMBER OF ITEMS
  test("calculateTotal() => 5", () => {
    expect(calculateTotal()).toEqual(5);
  });
  //ADD TO CART
  test("addToCart('banana', 90) => { apple: 5, banana: 90 }", () => {
    expect(addToCart("banana", 90)).toEqual({ apple: 5, banana: 90 });
  });
  //CALCULATE TOTAL NUMBER OF ITEMS
  test("calculateTotal() => 95", () => {
    expect(calculateTotal()).toEqual(95);
  });
  //REMOVE FROM CART
  test("removeFromCart('apple', 2) => 3", () => {
    expect(removeFromCart("apple", 2)).toEqual(3);
  });
  test("removeFromCart('banana', 95) => 0", () => {
    expect(removeFromCart("banana", 95)).toEqual(0);
  });
  //CALCULATE TOTAL NUMBER OF ITEMS
  test("calculateTotal() => 3", () => {
    expect(calculateTotal()).toEqual(3);
  });
});
