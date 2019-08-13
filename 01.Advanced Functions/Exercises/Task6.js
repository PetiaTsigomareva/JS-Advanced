//Task6
function solution() {
  let ingredients = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};

  function restock(ingredient, quantity) {
    if (!ingredients[ingredient]) {
      ingredients[ingredient] = quantity;
    } else {
      ingredients[ingredient] += quantity;
    }

    return 'Success';

  }

  function getMeal(mealInput) {
    let result = {};
    switch (mealInput) {
      case 'apple':
        result = {carbohydrate: 1, flavour: 2};
        break;
      case 'lemonade':
        result = {carbohydrate: 10, flavour: 20};
        break;
      case 'burger':
        result = {carbohydrate: 5, fat: 7, flavour: 3};
        break;
      case 'eggs':
        result = {protein: 5, fat: 1, flavour: 1};
        break;
      case 'turkey':
        result = {protein: 10, carbohydrate: 10, fat: 10, flavour: 10};
        break;
      default:
        console.log('Invalided meal');
        break;
    }

    return result;

  }


  function prepare(recipe, quantity) {

    for (let key of Object.keys(recipe)) {
      if (ingredients[key] < recipe[key] * quantity) {
        return `Error: not enough ${key} in stock`;
      }
    }

    Object.keys(recipe).forEach(key => ingredients[key] -= recipe[key] * quantity);
    return 'Success';
  }

  function report() {
    return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;

  }

  return function manager(input) {
    let result = '';
    let inputParts = input.split(' ');
    let instruction = inputParts[0];
    let quantity = Number(inputParts[2]);
    switch (instruction) {
      case 'restock':
        let ingredient = inputParts[1];
        result = restock(ingredient, quantity);
        break;
      case 'prepare':
        let recipe = inputParts[1];
        result = prepare(getMeal(recipe), quantity);
        break;
      case 'report':
        result = report();
        break;
      default:
        console.log('Invalided instruction');
        break;
    }


    return result;
  }


}

let breakfastRobot = solution();
console.log(breakfastRobot('restock carbohydrate 10'));
console.log(breakfastRobot('restock flavour 10'));

console.log('-----------------------');

console.log(breakfastRobot('prepare apple 1'));
console.log(breakfastRobot('restock fat 10'));
console.log(breakfastRobot('prepare burger 1'));
console.log(breakfastRobot('report'));

console.log('-----------------------');

console.log(breakfastRobot('prepare turkey 1'));
console.log(breakfastRobot('restock protein 10'));
console.log(breakfastRobot('prepare turkey 1'));
console.log(breakfastRobot('restock carbohydrate 10'));
console.log(breakfastRobot('prepare turkey 1'));
console.log(breakfastRobot('restock fat 10'));
console.log(breakfastRobot('prepare turkey 1'));
console.log(breakfastRobot('restock flavour 10'));
console.log(breakfastRobot('prepare turkey 1'));
console.log(breakfastRobot('report'));
