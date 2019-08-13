const expect = require('chai').expect;
const PizzUni = require('./02. PizzUni_Ресурси');

describe('PizzUni class', () => {
  let pizzUni;
  let email;
  beforeEach(() => {
    pizzUni = new PizzUni();
    email = 'test@abv.bg';
  });

  it('test constructor initialize registeredUsers as an empty array', () => {
    expect(pizzUni.registeredUsers.length).to.be.equal(0, 'test fail!')
  });

  it('test constructor initialize orders as an empty array', () => {
    expect(pizzUni.orders.length).to.be.equal(0, 'test fail!')
  });

  it('test constructor initialize availableProducts as an object with 2 properties', () => {
    let checkAvailableProductsProperties = pizzUni.availableProducts.hasOwnProperty('pizzas') && pizzUni.availableProducts.hasOwnProperty('drinks');
    expect(checkAvailableProductsProperties).to.be.equal(true, 'test fail!')
  });

  it('test constructor initialize availableProducts pizzas property with  array with 3 strings', () => {
    let pizzasProp = pizzUni.availableProducts['pizzas'];
    expect(pizzasProp.length).to.be.equal(3, 'test fail!')
  });

  it('test constructor initialize availableProducts drinks property with  array with 3 strings', () => {
    let drinksProp = pizzUni.availableProducts['drinks'];
    expect(drinksProp.length).to.be.equal(3, 'test fail!')
  });

  it('test registerUser method with non exist email, should return current object', () => {
    const expected = {
      email,
      orderHistory: []
    };
    let actual = pizzUni.registerUser(email);
    expect(actual).to.deep.equal(expected);
  });

  it('test registerUser method with exist email, should throw error', () => {
    let err = `This email address (${email}) is already being used!`;
    let actual = function () {
      pizzUni.registerUser(email);
      pizzUni.registerUser(email);
    };
    expect(actual).to.throw(err);
  });

  it('test make a order method, should return valid order index', function () {
    let user = pizzUni.registerUser(email);
    let orderedPizza = 'Italian Style';
    let orderedDrink = 'Coca-Cola';
    let userOrder = {orderedPizza, orderedDrink};
    const currentOrder = {
      ...userOrder,
      email,
      status: 'pending'
    };
    let orderIndex = pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola');
    let actual = pizzUni.orders[orderIndex];

   // expect(actual).to.deep.include(currentOrder);
    expect(actual).to.deep.equal(currentOrder);
  });

  it('test make a order method, is index exist in to orders should return valid order index', function () {
    let user = pizzUni.registerUser(email);
    let orderedPizza = 'Italian Style';
    let orderedDrink = 'Coca-Cola';
    let userOrder = {orderedPizza, orderedDrink};
    const currentOrder = {
      ...userOrder,
      email,
      status: 'pending'
    };
    let orderIndex = pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola');
    let actual = pizzUni.orders[orderIndex];

     expect(actual).to.deep.include(currentOrder);


  });

  it('test makeAnOrder() method, is incoming email is not registered, should throw error', function () {
    let err = 'You must be registered to make orders!';
    let actual = () => {
      pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola');
    };
    expect(actual).to.throw(err);
  });

  it('test makeAnOrder() method, is orderedPizza is not exist in available products, should throw error', function () {
    let err = 'You must order at least 1 Pizza to finish the order.';
    pizzUni.registerUser(email);
    let actual = () => {
      pizzUni.makeAnOrder(email, 'Not exist Pizza', 'Coca-Cola');
    };
    expect(actual).to.throw(err);
  });

  it('test makeAnOrder() method is not order drink, should create order without drink in orders', function () {
    let user = pizzUni.registerUser(email);
    let orderedPizza = 'Italian Style';
    let userOrder = {
      orderedPizza
    };
    let order = pizzUni.makeAnOrder(email, 'Italian Style', '');
    let actual = user.orderHistory
    let expected = userOrder;
    expect(actual).to.deep.include(expected);
  });

  it('test completeOrder method, should change first obj with status pending to status completed and return obj', function () {
    let user = pizzUni.registerUser(email);
    let orderId = pizzUni.makeAnOrder(email, 'Classic Margherita', 'Coca-Cola');
    let actual = pizzUni.completeOrder();
    expect(actual.status).to.be.equal('completed');
  });

  it('test completeOrder method, should return obj', function () {
    let user = pizzUni.registerUser(email);
    let orderedPizza = 'Classic Margherita';
    let orderedDrink = 'Coca-Cola';
    let orderId = pizzUni.makeAnOrder(email, 'Classic Margherita', 'Coca-Cola');
    let actual = pizzUni.completeOrder();
    let userOrder = {orderedPizza, orderedDrink};
    let expected = {
      ...userOrder,
      email,
      status: 'completed'
    };
    expect(actual).to.deep.equal(expected);
  });

  it('test detailsAboutMyOrder({id})method, is valid {id} param, should return message with one of the order status!', function () {
    let expected = `Status of your order: pending`;
    let user = pizzUni.registerUser(email);
    let orderId = pizzUni.makeAnOrder(email, 'Classic Margherita', 'Coca-Cola');
    let actual = pizzUni.detailsAboutMyOrder(orderId);
    expect(actual).to.be.equal(expected);
  });

  it('test detailsAboutMyOrder({id})method, id  param is number, should return index of the current order!', function () {
    let user = pizzUni.registerUser(email);
    let orderId = pizzUni.makeAnOrder(email, 'Classic Margherita', 'Coca-Cola');
    pizzUni.detailsAboutMyOrder(orderId);
    expect(orderId).to.be.a('number');
  });

  it('test doesTheUserExist method, should return obj', () => {
    const expected = {
      email,
      orderHistory: []
    };
    pizzUni.registerUser(email);
    let actual = pizzUni.doesTheUserExist(email);
    expect(actual).to.deep.equal(expected);
  });

  it('test doesTheUserExist method param is of type string', () => {
    let result = pizzUni.doesTheUserExist(email);
    expect(email).to.be.a('string');
  });


});
