function sortedList() {
  let result = {};
  let list = [];
  let size = list.length;

  let add = function (element) {
    this.list.push(element);
    this.size = this.list.length;
    this.list = this.list.sort((a, b) => {
      return a - b;
    });


  };

  let remove = function (index) {
    if (index >= 0 && index < list.length) {
      this.list.splice(index, 1);
      this.size = this.list.length;
    } else {
      throw new Error('Incorrect Index!')
    }
  };

  let get = function (index) {
    if (index >= 0 && index < list.length) {
      return this.list[index];
    } else {
      throw new Error('Incorrect Index!')
    }
  };
  result = {list, size, add, remove, get};
  return result

}

let abj = sortedList();
abj.add(1);
abj.add(10);
abj.add(-1);
console.log(abj.list);
console.log(abj.size);
abj.remove(1);
console.log(abj.list);
console.log(abj.size);

//abj.remove(-1);

console.log(abj.get(1));
console.log(abj.list);
console.log(abj.size);
