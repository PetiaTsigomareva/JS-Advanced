class Library {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.subscribers = [];
    this.subscriptionTypes = {
      normal: this.getSubscriptionType('normal'),
      special: this.getSubscriptionType('special'),
      vip: this.getSubscriptionType('vip')
    }
  }

  subscribe(name, type) {
    if (type !== 'normal' && type !== 'special' && type !== 'vip') {
      throw new Error(`The type ${type} is invalid`);
    } else {
      for (let currentSubscriber of this.subscribers) {
        if (currentSubscriber.name === name) {
          currentSubscriber.type = type;
          return currentSubscriber;
        }
      }
      let subscriberNew = {
        name: name,
        type: type,
        books: []
      };
      this.subscribers.push(subscriberNew);
      return subscriberNew;

    }
  }

  unsubscribe(name) {
    let subscribedPerson = this.subscribers.filter((s) => s.name === name)[0];
    if (subscribedPerson === undefined) {
      throw new Error(`There is no such subscriber as ${name}`)
    } else {
      let subscribedPersonIndex = this.subscribers.indexOf(subscribedPerson);
      this.subscribers.splice(subscribedPersonIndex, 1);
      return this.subscribers;
    }

  }

  receiveBook(subscriberName, bookTitle, bookAuthor) {
    let subscribedPerson = this.subscribers.filter((s) => s.name === subscriberName)[0];
    if (subscribedPerson === undefined) {
      throw new Error(`There is no such subscriber as ${name}`)
    }
    let subscribedPersonBooks = subscribedPerson.books.length;
    let subscribedPersonMaxBooks = 0;
    if (subscribedPerson.type === 'normal') {
      subscribedPersonMaxBooks = this.subscriptionTypes.normal;
    } else if (subscribedPerson.type === 'special') {
      subscribedPersonMaxBooks = this.subscriptionTypes.special;
    } else if (subscribedPerson.type === 'vip') {
      subscribedPersonMaxBooks = this.subscriptionTypes.vip;
    }
    if (subscribedPersonBooks <= subscribedPersonMaxBooks) {
      let book = {
        title: bookTitle,
        author: bookAuthor
      };
      subscribedPerson.books.push(book);
      return subscribedPerson;
    } else {
      throw new Error(`You have reached your subscription limit ${subscribedPersonMaxBooks}!`)
    }
  }

  showInfo() {
    let result = '';
    if (this.subscribers.length <= 0) {
      result = `${this.libraryName} has no information about any subscribers`
    } else {
      for (let subscriber of this.subscribers) {
        result += `Subscriber: ${subscriber.name}, Type: ${subscriber.type}\nReceived books: `;
        for (let i = 0; i < subscriber.books.length; i++) {
          const subscriberElement = subscriber.books[i];
          if (i === subscriber.books.length - 1) {
            result += `${subscriberElement.title} by ${subscriberElement.author}`;
          } else {
            result += `${subscriberElement.title} by ${subscriberElement.author}, `;
          }
        }

        result += '\n'
      }
    }

    return result;

  }

  getSubscriptionType(type) {
    let result = 0;
    if (type === 'normal') {
      result = this.libraryName.length;
    } else if (type === 'special') {
      result = this.libraryName.length * 2;
    } else if (type === 'vip') {
      result = Number.MAX_SAFE_INTEGER;
    } else {

    }
    return result;
  }


}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Tony', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());