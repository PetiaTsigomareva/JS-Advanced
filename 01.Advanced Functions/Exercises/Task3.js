//Task3 TODO
// let test = (function () {
//   let sum;
//   return function add(num) {
//     if (sum === undefined) {
//       sum = num;
//     } else {
//       sum += num;
//     }
//     add.toString = function () {
//       return sum;
//     };
//
//     return add;
//   }
//
// })();
//---------------------------------
let test = (function () {
  let sum = 0;

  return function add(num) {
    sum += num;
    add.toString = function () {
      return sum;
    };
    return add;
  }

})();


console.log(test(1)(6)(-3).toString());

// function add(num) {
//   let sum = num;
//
//   const calc = num2 => {
//     sum += num2;
//     return calc;
//
//   };
//
//   calc.toString = () => sum;
//   return calc;
// }
//
// console.log(add(1)(6)(-3).toString());