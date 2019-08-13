//Task2
function argumentInfo(...arguments) {
  let types = {};

  let countTypes = (type) => {
    if (!types[typeof type]) {
      types[typeof type] = 1;
    } else {

      types[typeof type] += 1;
    }
  };

  let printTypesPair = function (input) {
    for (let i = 0; i < input.length; i++) {
      if (typeof input[i] === 'object') {
        console.log(`${typeof input[i]}:`);
      } else {

        console.log(`${typeof input[i]}: ${input[i]}`);
      }
      countTypes(input[i]);

    }
  };

  printTypesPair(arguments);

  let sortedTypes = () => {
    return Object.entries(types).sort((a, b) => b[1] - a[1]);
  };

  let printTypesByCount = function (arr) {
    for (let t of arr) {
      console.log(`${t[0]} = ${t[1]}`);
    }
  };

  printTypesByCount(sortedTypes());
}


argumentInfo('cat', 42, 56, function () {
  console.log('Hello world!');
});

argumentInfo({name: 'bob'}, 3.333, 9.999);
