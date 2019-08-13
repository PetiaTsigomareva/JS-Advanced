const expect = require('chai').expect;

class AutoService {
  constructor(garageCapacity) {
    this.garageCapacity = garageCapacity;
    this.workInProgress = [];
    this.backlogWork = [];
  }

  get availableSpace() {
    return this.garageCapacity - this.workInProgress.length;
  }

  repairCar() {

    let workingPlace = this.workInProgress.length > 0 ? this.workInProgress : this.backlogWork;

    if (workingPlace.length > 0) {

      let keysForRepair = [];
      Object.keys(workingPlace[0].carInfo)
        .filter((k) => workingPlace[0].carInfo[k] === 'broken')
        .forEach((k) => keysForRepair.push(k));

      workingPlace.shift();
      if (keysForRepair.length > 0) {
        return `Your ${keysForRepair.join(' and ')} were repaired.`;
      } else {
        return 'Your car was fine, nothing was repaired.'
      }
    } else {
      return 'No clients, we are just chilling...'
    }
  }

  signUpForReview(clientName, plateNumber, carInfo) {
    let currentClient = {
      plateNumber,
      clientName,
      carInfo
    };

    if (this.availableSpace > 0) {
      this.workInProgress.push(currentClient);
    } else {
      this.backlogWork.push(currentClient);
    }
  }

  carInfo(plateNumber, clientName) {

    let checkCar =
      this.workInProgress.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0] ||
      this.backlogWork.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0];

    if (checkCar) {
      return checkCar;
    } else {
      return `There is no car with platenumber ${plateNumber} and owner ${clientName}.`;
    }
  }
}

describe("Tests AutoService functionality", function () {
  describe("Test instantiation of object ", function () {
    it("Test constructor with one number param, should make correct instance", function () {
      let myAutoService = new AutoService(5);
      expect(myAutoService.garageCapacity, 'The garageCapacity have not correct value!').to.be.equal(5);
    });

    it("Test constructor with one non number param, should not initialisation properly garageCapacity", function () {
      let myAutoService = new AutoService('5');
      expect(typeof myAutoService.garageCapacity, 'The garageCapacity must be number').to.not.be.equal('number', 'test fail!');
    });

    it("Test workInProgress property is empty array, should initialisation properly", function () {
      let myAutoService = new AutoService(5);
      expect(myAutoService.workInProgress.length).to.be.equal(0, 'test fail!');
    });

    it("Test backlogWork property is empty array, should initialisation properly", function () {
      let myAutoService = new AutoService(5);
      expect(myAutoService.backlogWork.length).to.be.equal(0, 'test fail!');
    });
  });
  describe("Test availableSpace", function () {
    it("Test availableSpace, should return number that represents the available space in garage", function () {
      let myAutoService = new AutoService(10);
      expect(myAutoService.availableSpace).to.be.equal(10, 'Test fail!');
    });
    it("Test non availableSpace, should return number that represents the non vailable space in garage", function () {
      let myAutoService = new AutoService(0);
      expect(myAutoService.availableSpace).to.be.equal(0, 'Test fail!');
    });
  });
  describe("Test signupForReview", function () {
    it("Test if availableSpace in the garage, the client should be register in workInProgress array", function () {
      let myAutoService = new AutoService(10);
      myAutoService.signUpForReview('Peter', 'CA1234CA', {
        'engine': 'MFRGG23',
        'transmission': 'FF4418ZZ',
        'doors': 'broken'
      });
      expect(myAutoService.workInProgress).to.have.lengthOf(1);
    });
    it("Test if non availableSpace in the garage, the client should be register in backlogWork array", function () {
      let myAutoService = new AutoService(0);
      myAutoService.signUpForReview('Peter', 'CA1234CA', {
        'engine': 'MFRGG23',
        'transmission': 'FF4418ZZ',
        'doors': 'broken'
      });
      expect(myAutoService.backlogWork).to.have.lengthOf(1);
    });
    it('Test whit not-string params, should return undefined', function () {
      let myAutoService = new AutoService(0);
      myAutoService.signUpForReview('Peter', 1112, {
        'engine': 'MFRGG23',
        'transmission': 'FF4418ZZ',
        'doors': 'broken'
      });
      expect(myAutoService.workInProgress.length).to.be.equal(0, 'test fail!')
    });

  });
  describe("Test carInfo", function () {
    it("Test if car in the garage, the car should not exists in workInProgress and backLogWork arrays", function () {
      let myAutoService = new AutoService(10);
      expect(myAutoService.carInfo('PB9999PB', 'PHILIP')).to.be.equal('There is no car with platenumber PB9999PB and owner PHILIP.', 'test fail');
    });
    it("Test if car in the garage, the car should return car object", function () {
      let myAutoService = new AutoService(10);
      myAutoService.signUpForReview('Philip', 'PB4321PB', {
        'engine': 'MFRGG23',
        'transmission': 'FF4418ZZ',
        'exaustPipe': 'REMUS'
      });
      expect(typeof myAutoService.carInfo('PB4321PB', 'Philip')).to.be.equal('object', 'test fail');
    });
  });

  describe("Test repairCar", function () {
    it("Test if no car in workInProgress and backLogWork arrays, should not repair nothing", function () {
      let myAutoService = new AutoService(10);
      expect(myAutoService.repairCar()).to.be.equal('No clients, we are just chilling...', 'test fail');
    });

    it("Test if in workInProgress have a cars, should repair first car in work in progress", function () {
      let myAutoService = new AutoService(10);
      myAutoService.signUpForReview('Peter', 'CA1234CA', {
        'engine': 'MFRGG23',
        'transmission': 'FF4418ZZ',
        'doors': 'broken'
      });

      expect(myAutoService.repairCar()).to.be.equal('Your doors were repaired.', 'test fail');
    });

    it("Test if in workInProgress have a cars without broken pair, should not repair", function () {
      let myAutoService = new AutoService(10);
      myAutoService.signUpForReview('Peter', 'CA1234CA', {
        'engine': 'MFRGG23',
        'transmission': 'FF4418ZZ',
      });
      expect(myAutoService.repairCar()).to.be.equal('Your car was fine, nothing was repaired.', 'test fail');
    });
  });
});