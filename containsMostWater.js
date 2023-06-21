const containsMostWater = (arr) => {
  let max = 1;
  let temp = arr.length;
  for (let i = 0; i < temp; i++) {
    for (let j = i + 1; j < temp; j++) {
      let distance = j - i;
      if (Math.min(arr[i], arr[j]) * distance > max) {
        max = Math.min(arr[i], arr[j]) * distance;
      }
    }
  }
  //   console.log(max);
  return max;
};

// const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const arr2 = [4, 3, 2, 1, 4];
// const arr3 = [1, 2, 1];
// containsMostWater(arr);
// containsMostWater(arr2);
// containsMostWater(arr3);

module.exports = { containsMostWater };
