const { lengthOfLongestSubstring } = require("./lengthOfLongestSubstring.js");

describe("lengthOfLongestSubstring works", () => {
  //REGULAR TEST FOR REPEATING CHARACTERS
  test("lengthOfLongestSubstring('abcdefghiijklmnopqrstuvwxyzzz') => 9", () => {
    expect(lengthOfLongestSubstring("abcdefghiijklmnopqrstuvwxyzzz")).toEqual(
      9
    );
  });
  test("lengthOfLongestSubstring('four-twenty') => 9", () => {
    expect(lengthOfLongestSubstring("four-twenty")).toEqual(9);
  });
  //TEST WITHOUT REPEATING CHARACTERS
  test("lengthOfLongestSubstring('912308547bB') => 11", () => {
    expect(lengthOfLongestSubstring("912308547bB")).toEqual(11);
  });
});
