class List {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  add(element) {
    this.list.push(element);
    // this.list.sort((a, b) => {
    //   return a - b;
    // });
    this.sort();
    this.size = this.list.length;
  }

  remove(index) {
    if (index >= 0 && index <= this.list.length - 1) {
      this.list.splice(index, 1);
      this.size = this.list.length;
    }
  }

  get(index) {
    if (index >= 0 && index <= this.list.length - 1) {
      return this.list[index];
    }
  }

  sort() {
    this.list.sort((a, b) => {
      return a - b;
    });
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

console.log(list);