const { twoSum } = require("./twoSum.js");

describe("twoSum function works", () => {
  //TWO SUM EXISTS
  test("twoSum([2, 4, 1, 5], 6) => [0, 1]", () => {
    expect(twoSum([2, 4, 1, 5], 6)).toEqual([0, 1]);
  });
  test("twoSum([3, 2, 4], 6) => [1, 2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  //TWO SUM DOES NOT EXIST
  test("twoSum([5, 2, 2, 1], 8) => []", () => {
    expect(twoSum([5, 2, 2, 1], 8)).toEqual([]);
  });
});
