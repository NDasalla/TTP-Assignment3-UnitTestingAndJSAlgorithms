//------------------------TESTING------------------------
//const lengthOfLongestSubstring = (str) => {
//   let storage = new Object();
//   const arr = str.split("");
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in storage) {
//       //   storage[arr[i]]++;
//       //   console.log(`exists:`);
//       //   console.log(storage);
//       //   continue;
//       console.log(i);
//       return i;
//     }
//     storage[arr[i]] = 1;
//     // console.log(`doesn't exist:`);
//     // console.log(storage);
//   }
// };
// lengthOfLongestSubstring("a  sdflkjdll");
const lengthOfLongestSubstring = (str) => {
  let storage = new Object();
  const arr = str.split("");
  let ret = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in storage) {
      return ret;
    }
    storage[arr[i]] = 1;
    ret++;
  }
  return ret;
};
module.exports = { lengthOfLongestSubstring };
