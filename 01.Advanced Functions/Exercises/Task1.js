//Task1
function sortArrayByCriteria(array, criteria) {
  let sortedArray = [];

  if (criteria === 'asc') {
    sortedArray = array.sort((a, b) => a - b);

  } else if (criteria === 'desc') {
    sortedArray = array.sort((a, b) => b - a);
  }

  return sortedArray;

}

console.log(sortArrayByCriteria([14, 7, 17, 6, 8], 'asc'));

console.log(sortArrayByCriteria([14, 7, 17, 6, 8], 'desc'));






