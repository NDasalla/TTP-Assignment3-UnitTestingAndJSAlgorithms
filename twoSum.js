// const twoSum = (nums, target) => {
//   const ret = [];
//   if (nums.length <= 1) {
//     throw new Error("Array length of `nums` is less than or equal to 1");
//   }
//   for (let i = 0; i < nums.length; i++) {
//     // temp is used in for loop of j because it doesn't need to loop the entire length of
//     // the array for each iteration of j
//     let temp = nums.length;
//     for (let j = i; j < temp - 1; j++) {
//       if (nums[i] + nums[j] === target) {
//         ret.push(nums[i], nums[j]);
//         // console.log(ret);
//         return ret;
//       }
//     }
//   }
//   return false;
// };
// console.log(twoSum([2, 4, 1, 5], 6));

module.exports = {
  twoSum: (nums, target) => {
    const ret = [];
    let temp = nums.length;
    if (temp <= 1) {
      throw new Error("Array length of `nums` is less than or equal to 1");
    }
    for (let i = 0; i < temp; i++) {
      // temp is used in for loop of j because it doesn't need to loop the entire length of
      // the array for each iteration of j
      for (let j = i; j < temp - 1; j++) {
        if (nums[i] + nums[j] === target) {
          ret.push(i, j);
          //   console.log(ret);
          return ret;
        }
      }
    }
    return ret;
  },
};
