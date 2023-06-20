const { add, subtract, multiply, divide } = require("./mathFunctions.js");

describe("mathFunctions functions work", () => {
  //ADDITION
  test("add(2, 2) => 4", () => {
    expect(add(2, 2)).toEqual(4);
  });
  test("add(-4, -4) => 0", () => {
    expect(add(-4, -4)).toEqual(-8);
  });
  test("add(-4, a) => 0", () => {
    expect(add(-4, "a")).toEqual(NaN);
  });
  //SUBTRACTION
  test("subtract(2, 5) => -3", () => {
    expect(subtract(2, 5)).toEqual(-3);
  });
  test("subtract(-5, -5) => 0", () => {
    expect(subtract(-5, -5)).toEqual(0);
  });
  //MULTIPLICATION
  test("multiply(25, 25) => 625", () => {
    expect(multiply(25, 25)).toEqual(625);
  });
  test("multiply(-5, 2) => -10", () => {
    expect(multiply(-5, 2)).toEqual(-10);
  });
  //DIVISION
  test("divide(100, 5) => 20", () => {
    expect(divide(100, 5)).toEqual(20);
  });
  test("divide(-20, -5) => 4", () => {
    expect(divide(-20, -5)).toEqual(4);
  });
});
