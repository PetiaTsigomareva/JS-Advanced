const expect = require('chai').expect;
const BookStore = require('./02. Book Store_Ресурси.js');

describe("Book Store Tests class", function () {
  let bookStore;
  let name;
  beforeEach(() => {
    name = 'SoftUni Store';
    bookStore = new BookStore(name);
  });
  it("test class instance, should have one string param", function () {
    expect(name).to.be.a('string');
    let actualInstance = new BookStore(name);
    expect(actualInstance.name).to.be.eql(name);
  });
  it("test is class instance have property books, should return true", function () {
    let actualInstance = bookStore;
    let isHaveBooks = actualInstance.hasOwnProperty('books');
    expect(isHaveBooks).to.be.equal(true, "The instance does not have property books");
  });

  it("test class instance is property books is empty arr, should return true", function () {
    let actualInstance = bookStore;
    expect(actualInstance.books).to.be.eql([], "The instance property books is not empty");
  });

  it("test is class instance have property workers, should return true", function () {
    let actualInstance = bookStore;
    let isHaveBooks = actualInstance.hasOwnProperty('_workers');
    expect(isHaveBooks).to.be.equal(true, "The instance does not have property workers");
  });

  it("test class instance is property workers is empty arr, should return true", function () {
    let actualInstance = bookStore;
    expect(actualInstance._workers).to.be.eql([], "The instance property workers is not empty");
  });

  it("test stockBooks class method with correct input, should return books arr with added some input books ", function () {
    let inputBooks = ['Book1', 'Book2', 'Book3']
    let actualStockedBooks = bookStore.stockBooks(inputBooks);

    expect(actualStockedBooks).to.be.eql(bookStore.books, "In the book store did not store books");
  });

  it("test hire class method with correct input, should return proper message ", function () {
    let actualProperMessage = bookStore.hire('Petia', 'seller');
    let expectedProperMessage = `Petia started work at ${bookStore.name} as seller`;

    expect(actualProperMessage).to.be.eql(expectedProperMessage, "test fail - Petia does not hire in the book store");
  });

  it("test hire class method with incorrect input, should throws error ", function () {
    let err = 'This person is our employee';
    let actual = function () {
      bookStore.hire('Petia', 'seller');
      bookStore.hire('Petia', 'seller');
    };
    expect(actual).to.throw(err);
  });

  it("test fire class method with correct input, should return proper message ", function () {
    bookStore.hire('Petia', 'seller');
    let actualProperMessage = bookStore.fire('Petia');
    let expectedProperMessage = 'Petia is fired';

    expect(actualProperMessage).to.be.eql(expectedProperMessage, "test fail - Petia does not fire in the book store");
  });

  it("test fire class method with incorrect input, should throws error ", function () {

    let err = "Petia doesn't work here";
    let actual = function () {
      bookStore.fire('Petia');
      bookStore.fire('Petia');
    };
    expect(actual).to.throw(err);
  });

  it("test sellBook class method with incorrect title, should throws error ", function () {
    let err = "This book is out of stock";
    let inputBooks = ['Book1', 'Book2', 'Book3']
    bookStore.stockBooks(inputBooks);
    let actual = function () {
      bookStore.sellBook('Book4');
    };
    expect(actual).to.throw(err);
  });

  it("test sellBook class method with incorrect worker name, should throws error ", function () {
    let err = "Ani is not working here";
    let inputBooks = ['Book1', 'Book2', 'Book3']
    bookStore.stockBooks(inputBooks);
    bookStore.hire('Petia', 'seller');
    let actual = function () {
      bookStore.sellBook('Book1', 'Ani');
    };
    expect(actual).to.throw(err);
  });

  it("test sellBook class method with correct title and worker, should increase by 1 books count of the worker", function () {
    let inputBooks = ['Book1', 'Book2', 'Book3']
    bookStore.stockBooks(inputBooks);
    bookStore.hire('Petia', 'seller');
    bookStore.sellBook('Book1', 'Petia');
    bookStore.sellBook('Book2', 'Petia');
    let actualWorkerBooks = bookStore._workers.filter((w) => w.name === 'Petia')[0].booksSold;

    expect(actualWorkerBooks).to.be.equal(2);
  });

  it("test printWorkers class method, should print all workers", function () {
    bookStore.hire('Petia', 'seller');
    bookStore.hire('George', 'seller');
    bookStore.hire('Ina', 'seller');
    bookStore.hire('Tom', 'juniorseller');
    let actualWorkers= bookStore.printWorkers();

    let expectedWorkers='Name:Petia Position:seller BooksSold:0\n' +
      'Name:George Position:seller BooksSold:0\n' +
      'Name:Ina Position:seller BooksSold:0\n' +
      'Name:Tom Position:juniorseller BooksSold:0'
    expect(actualWorkers).to.be.eql(expectedWorkers);
  });


});