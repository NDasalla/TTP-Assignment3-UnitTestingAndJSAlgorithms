module.exports = {
  reverseString: (str) => {
    return str.split("").reverse().join("");
  },
  isPalindrome: (str) => {
    const temp = str.split("").reverse().join("");
    if (temp === str) return true;
    return false;
  },
};
