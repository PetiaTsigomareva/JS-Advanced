class Kitchen {
  constructor(budget) {
    this.budget = budget;
    this.menu = new Map();
    this.productsInStock = new Map();
    this.actionsHistory = [];
  }

  loadProducts(productsArr) {
    let result = '';
    let message = '';
    for (let element of productsArr) {
      let [productName, productQuantity, productPrice] = element.split(' ');
      let moneyForTheBuyProduct = productQuantity * productPrice;
      //check the budget
      if (this.budget >= moneyForTheBuyProduct) {
        //check product in stock
        if (!this.productsInStock.has(productName)) {
          this.productsInStock.set(productName, productQuantity);
        } else {
          let currentQuantity = Number(this.productsInStock.get(productName));
          currentQuantity += Number(productQuantity);
          this.productsInStock.set(productName, currentQuantity);
        }
        //set message
        message = `Successfully loaded ${productQuantity} ${productName}`;
        //decrease the budget
        this.budget -= moneyForTheBuyProduct;

      } else {
        message = `There was not enough money to load ${productQuantity} ${productName}`;
      }
      this.actionsHistory.push(message);


    }

    result = this.actionsHistory.join('\n');

    return result;

  }

  addToMenu(mealKey, productsArr, price) {
    let result = '';
    //check the menu
    if (!this.menu.has(mealKey)) {
      let meal = {products: productsArr, price: price};
      this.menu.set(mealKey, meal);
      //set result message
      result = `Great idea! Now with the ${mealKey} we have ${this.menu.size} meals in the menu, other ideas?`;
    } else {
      result = `The ${mealKey} is already in our menu, try something different.`;
    }
    return result;
  }

  showTheMenu() {
    let result = '';
    // console.log(this.menu);
    if (this.menu.size === 0) {
      result = 'Our menu is not ready yet, please come later...';
    } else {
      for (let key of this.menu.keys()) {
        let price = this.menu.get(key).price;
        let meal = `${key} - $ ${price}\n`;
        result += meal
      }
    }
    return result.trim();
  }

  makeTheOrder(mealKey) {
    let result = '';
    //check meal in the menu
    if (!this.menu.has(mealKey)) {
      result = `There is not ${mealKey} yet in our menu, do you want to order something else?`
    } else {
      //check if have enough products for the meal
      let mealProducts = this.menu.get(mealKey).products;
      let price = this.menu.get(mealKey).price;
      if (this.checkMealProducts(mealProducts)) {
        result = `Your order (${mealKey}) will be completed in the next 30 minutes and will cost you ${price}."`;
      } else {
        result = `For the time being, we cannot complete your order (${mealKey}), we are very sorry...`;
      }
    }
    return result;
  }

  checkMealProducts(neededPrducts) {
    let result = true;
    for (let product of neededPrducts) {
      let [productName, productQuantity] = product.split(' ');
      if (!this.productsInStock.has(productName) || this.productsInStock.get(productName) < productQuantity) {
        result = false;
        break;
      }

    }

    return result;

  }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('Soup', ['Yogurt 1', 'Honey 1', 'Banana 1'], 5.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.makeTheOrder('Cola'));
console.log(kitchen.makeTheOrder('Soup'));