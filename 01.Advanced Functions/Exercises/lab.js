//Task1
function aggregates(numbers) {
  let sumReducer = (a, b) => a + b;
  let minReducer = (a, b) => Math.min(a, b);
  let maxReducer = (a, b) => Math.max(a, b);
  let productReducer = (a, b) => a * b;
  let joinReducer = (a, b) => '' + a + b;

  console.log(`Sum = ${numbers.reduce(sumReducer)}`);
  console.log(`Min = ${numbers.reduce(minReducer)}`);
  console.log(`Max = ${numbers.reduce(maxReducer)}`);
  console.log(`Product = ${numbers.reduce(productReducer)}`);
  console.log(`Join = ${numbers.reduce(joinReducer)}`);


}

aggregates([2, 3, 10, 5]);
console.log('-------------------')
aggregates([5, -3, 20, 7, 0.5]);