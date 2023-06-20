const { reverseString, isPalindrome } = require("./stringFunctions.js");

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
  //PALINDROME
  test("isPalindrome('Big Shaq') => false", () => {
    expect(isPalindrome("Big Shaq")).toEqual(false);
  });
  test("isPalindrome('bob') => true", () => {
    expect(isPalindrome("bob")).toEqual(true);
  });
  test("isPalindrome('detartrated') => true", () => {
    expect(isPalindrome("detartrated")).toEqual(true);
  });
});
