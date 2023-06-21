const { containsMostWater } = require("./containsMostWater.js");

describe("containsMostWater works", () => {
  //REGULAR TEST FOR REPEATING CHARACTERS
  test("containsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]) => 49", () => {
    expect(containsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
  test("containsMostWater([4, 3, 2, 1, 4]) => 16", () => {
    expect(containsMostWater([4, 3, 2, 1, 4])).toEqual(16);
  });
  //TEST WITHOUT REPEATING CHARACTERS
  test("containsMostWater([1, 2, 1]) => 2", () => {
    expect(containsMostWater([1, 2, 1])).toEqual(2);
  });
});
