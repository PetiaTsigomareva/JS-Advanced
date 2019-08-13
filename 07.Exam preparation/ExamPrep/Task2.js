class Vacation {
  constructor(organizer, destination, budget) {
    this.organizer = organizer;
    this.destination = destination;
    this.budget = budget;
    this.kids = {};
  }
  registerChild(name, grade, budget) {
    let result;
    if (budget < this.budget) {
      return `${name}'s money is not enough to go on vacation to ${this.destination}.`
    }
    let kidParam = `${name}-${budget}`;
    if (this.kids.hasOwnProperty(grade)) {
      for (let kid of this.kids[grade]) {
        if (kid === kidParam) {
          return `${name} is already in the list for this ${this.destination} vacation.`;
        }
      }
      this.kids[grade].push(kidParam);
    } else {
      this.kids[grade] = [];
      this.kids[grade].push(kidParam);
    }

    return this.kids[grade];
  }
  removeChild(name, grade) {
    if (this.kids.hasOwnProperty(grade)) {
      let kidsByGrade = this.kids[grade];
      for (let kid of kidsByGrade) {
        let kidArr = kid.split('-');
        if (kidArr[0] === name) {
          let index = kidsByGrade.indexOf(kid);
          kidsByGrade.splice(index, 1);
          return kidsByGrade;
        }
      }
    }
    return `We couldn't find ${name} in ${grade} grade.`;
  }

  toString() {
    if (this.numberOfChildren === 0) {
      return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
    }
    let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
    Object.entries(this.kids).sort((a, b) => a[0] - b[0]);
    for (let grade in this.kids) {
      result += `Grade: ${grade}\n`;
      let currentNumber = 1;
      for (let kid of this.kids[grade]) {
        result += `${currentNumber}. ${kid}\n`
        currentNumber++;
      }
    }

    return result;
  }

  get numberOfChildren() {
    this._numberOfChildren = 0;
    for (let grade in this.kids) {
      this._numberOfChildren += this.kids[grade].length;
    }
    return this._numberOfChildren;
  }
}

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

console.log(vacation.registerChild('Gosho', 12, 3400));
console.log(vacation.registerChild('Pesho', 12, 400));
console.log(vacation.registerChild('Pesho', 12, 400));
console.log(vacation.registerChild('Skaro', 11, 400));
console.log(vacation.registerChild('Gosho', 11, 3444));
console.log(vacation.toString());
