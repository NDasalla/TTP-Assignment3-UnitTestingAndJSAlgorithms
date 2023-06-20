const { reverseString } = require("./reverseString.js");

describe("stringFunctions functions work", () => {
  //REVERSE STRING
  test("reverseString('Big Shaq') => 'qahS giB'", () => {
    expect(reverseString("Big Shaq")).toEqual("qahS giB");
  });
  test("reverseString('hello') => 'olleh'", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });
  test("reverseString('Alkasdi24@ 120 ;Lllkdk') => 'kdkllL; 021 @42idsaklA'", () => {
    expect(reverseString("Alkasdi24@ 120 ;Lllkdk")).toEqual(
      "kdkllL; 021 @42idsaklA"
    );
  });
});
