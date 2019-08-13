class CheckingAccount {
  constructor(clientId, email, firstName, lastName) {
    this.setClientId(clientId);
    this.setEmail(email);
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.products = [];
  }

  setClientId(id) {
    const regex = /^[0-9]{6}$/;
    let result = regex.test(id);
    if (!result) {
      throw new TypeError('Client ID must be a 6-digit number')
    }
    this.clientID = id;
  }

  setEmail(email) {
    const regex = /^[a-zA-Z0-9]+@[a-z.]+$/;
    let result = regex.test(email);
    if (!result) {
      throw new TypeError('Invalid e-mail')
    }
    this.email = email;
  }

  setFirstName(firstName) {

    this.setFirstName = this.checkName(firstName, 'First');
  }

  setLastName(lastName) {
    this.lastName = this.checkName(lastName, 'Last');
  }

  checkName(name, title) {
    const regex = /^[a-zA-z]{3,20}$/;
    if (!regex.test(name)) {
      let errorMessage = '';
      if (name.length < 3 || name.length > 20) {
        errorMessage = `${title} name must be between 3 and 20 characters long`;
      } else {
        errorMessage = `${title} name must contain only Latin characters`;
      }
      throw new TypeError(errorMessage);
    } else {
      return name;
    }
  }
}

let acc = new CheckingAccount('423414', 'petkan@another.co.uk', 'Петкан', 'Draganov');

