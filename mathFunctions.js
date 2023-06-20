module.exports = {
  add: (a, b) => {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a + b;
  },

  subtract: (a, b) => {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a - b;
  },

  multiply: (a, b) => {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a * b;
  },

  divide: (a, b) => {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a / b;
  },
};

//WORKS
// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
// }
