//import {describe} from "mocha";

const expect = require('chai').expect;

class Warehouse {

  get capacity() {
    return this._capacity;
  }

  set capacity(givenSpace) {

    if (typeof givenSpace === 'number' && givenSpace > 0) {
      return this._capacity = givenSpace;
    } else {
      throw `Invalid given warehouse space`;
    }
  }

  constructor(capacity) {
    this.capacity = capacity;
    this.availableProducts = {'Food': {}, 'Drink': {}};
  }

  addProduct(type, product, quantity) {

    let addedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
    let output;

    if (addedQuantity >= 0) {

      if (this.availableProducts[type].hasOwnProperty(product) === false) {
        this.availableProducts[type][product] = 0;
      }

      this.availableProducts[type][product] += quantity;
      output = this.availableProducts[type];

    } else {
      throw `There is not enough space or the warehouse is already full`;
    }

    return output;
  }

  orderProducts(type) {

    let output;
    let sortedKeys = Object.keys(this.availableProducts[type])
      .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);

    let newObj = {};
    for (let product of sortedKeys) {

      if (newObj.hasOwnProperty(product) === false) {
        newObj[product] = 0;
      }

      newObj[product] += this.availableProducts[type][product];
    }

    this.availableProducts[type] = newObj;
    output = this.availableProducts[type];

    return output;
  }

  occupiedCapacity() {

    let output = 0;
    let productsCount = Object.keys(this.availableProducts['Food']).length +
      Object.keys(this.availableProducts['Drink']).length;

    if (productsCount > 0) {

      let quantityInStock = 0;

      for (let type of Object.keys(this.availableProducts)) {

        for (let product of Object.keys(this.availableProducts[type])) {

          quantityInStock += this.availableProducts[type][product];
        }
      }

      output = quantityInStock;
    }

    return output;
  }

  revision() {

    let output = "";

    if (this.occupiedCapacity() > 0) {

      for (let type of Object.keys(this.availableProducts)) {
        output += `Product type - [${type}]\n`;
        for (let product of Object.keys(this.availableProducts[type])) {
          output += `- ${product} ${this.availableProducts[type][product]}\n`;
        }
      }
    } else {
      output = 'The warehouse is empty';
    }

    return output.trim();
  }

  scrapeAProduct(product, quantity) {

    let type = Object.keys(this.availableProducts).find(t => Object.keys(this.availableProducts[t]).includes(product));
    let output;

    if (type !== undefined) {

      if (quantity <= this.availableProducts[type][product]) {
        this.availableProducts[type][product] -= quantity;
      } else {
        this.availableProducts[type][product] = 0;
      }

      output = this.availableProducts[type];

    } else {
      throw `${product} do not exists`;
    }

    return output;
  }
}

describe('Warehouse class test Methods', function () {

  describe('constructor initialization', function () {
    beforeEach(function () {
      let warehouseWithNegativeCapacity = new Warehouse(-2);
      let warehouseWithZeroCapacity = new Warehouse(0);
      let warehouseWithNonNumberCapacity = new Warehouse('Capacity');
      let warehouseWithPositiveCapacity = new Warehouse(10);


    });
    it('test with negative number capacity, should return Invalid given warehouse capacity!', function () {
      let expected = warehouseWithNegativeCapacity.get();
      expect(expected).to.be.equal('Invalid given warehouse space','test fail!');
    });
    it('test with Zero capacity, should return Invalid given warehouse capacity!', function () {
      let expected = new Warehouse(0);
      expect(expected).to.throw(Error).which.has.property('message', 'Invalid given warehouse space');
    });
    it('test with not-number capacity, should return Invalid given warehouse capacity!', function () {
      let expected = new Warehouse('Capacity');
      expect(expected).to.throw(Error).which.has.property('message', 'Invalid given warehouse space');
    });
    it('test with positive number capacity, should set warehouse capacity corrected!', function () {
      let expected = new Warehouse(10);
      expect(expected).to.be.equal(10, 'Incorrect capacity!')
    });

  })

});