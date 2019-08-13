//Task5
solution = (function vectorCalculations() {

  const add = function add(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = a[i] + b[i];
    }

    return result;
  };

  const multiply = function multiply(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = a[i] * b;
    }

    return result;
  };

  const length = function length(a) {
    let result = Math.sqrt(a[0] * a[0] + a[1] * a[1]);

    return result;
  };

  const dot = function dot(a, b) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result += a[i] * b[i];
    }
    return result;
  };

  const cross = function cross(a, b) {
    let result = a[0] * b[1] - a[1] * b[0];

    return result;
  };

  return {add: add, multiply: multiply, length: length, dot: dot, cross: cross};


})();


// solution = (() => {
//   const add = (vector1, vector2) => [vector1[0] + vector2[0], vector1[1] + vector2[1]];
//   const multiply = (vector1, scala) => [vector1[0] * scala, vector1[1] * scala];
//   const length = vector1 => Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]);
//   const dot = (vector1, vector2) => vector1[0] * vector2[0] + vector1[1] * vector2[1];
//   const cross = (vector1, vector2) => vector1[0] * vector2[1] - vector1[1] * vector2[0];
//   return {
//     add: add,
//     multiply: multiply,
//     length: length,
//     dot: dot,
//     cross: cross
//   }
//
// })();

//let solution = vectorCalculations();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
