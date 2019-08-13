const expect = require('chai').expect;

let mathEnforcer = {
  addFive: function (num) {
    if (typeof(num) !== 'number') {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof(num) !== 'number') {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
      return undefined;
    }
    return num1 + num2;
  }
}

describe('mathEnforcer', function () {
  describe('addFive', function () {
    it('test whit non-number param, should return undefined', function () {
      let expected = mathEnforcer.addFive('not-number');
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit object param, should return undefined', function () {
      let expected = mathEnforcer.addFive({test: 'Petia'});
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit positive number param, should return result increases with 5', function () {
      let expected = mathEnforcer.addFive(5);
      expect(expected).to.be.equal(10, 'test fail!')
    });
    it('test whit negative number param, should return result increases with 5', function () {
      let expected = mathEnforcer.addFive(-5);
      expect(expected).to.be.equal(0, 'test fail!')
    });

    it('test whit negative number param, should return result increases with 5', function () {
      let expected = mathEnforcer.addFive(-4);
      expect(expected).to.be.equal(1, 'test fail!')
    });

    it('test whit negative number param, should return result increases with 5', function () {
      let expected = mathEnforcer.addFive(-10);
      let actual = -5;
      expect(expected).to.be.equal(actual, 'test fail!');
    });

    it('test whit floating-point number param, should return result increases with 5', function () {
      let expected = mathEnforcer.addFive(2.5);
      let actual = 7.5;
      expect(expected).to.be.closeTo(actual, 0.01, 'test fail!')
    });

    it('test whit floating-point number param, should return result increases with 5', function () {
      let expected = mathEnforcer.addFive(-2.5);
      let actual = 2.5;
      expect(expected).to.be.closeTo(actual, 0.01, 'test fail!')
    });
  });
  describe('subtractTen', function () {
    it('test whit non-number param, should return undefined', function () {
      let expected = mathEnforcer.subtractTen('not-number');
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit object param, should return undefined', function () {
      let expected = mathEnforcer.subtractTen({test: 'Petia'});
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit positive param, should return result subtract with 10', function () {
      let expected = mathEnforcer.subtractTen(5);
      let actual = -5;
      expect(expected).to.be.equal(actual, 'test fail!')
    });

    it('test whit positive param, should return result subtract with 10', function () {
      let expected = mathEnforcer.subtractTen(10);
      let actual = 0;
      expect(expected).to.be.equal(actual, 'test fail!')
    });

    it('test whit positive param, should return result subtract with 10', function () {
      let expected = mathEnforcer.subtractTen(25);
      let actual = 15;
      expect(expected).to.be.equal(actual, 'test fail!')
    });

    it('test whit negative param, should return result subtract with 10', function () {
      let expected = mathEnforcer.subtractTen(-5);
      let actual = -15;
      expect(expected).to.be.equal(actual, 'test fail!')
    });
    it('test whit negative param, should return result subtract with 10', function () {
      let expected = mathEnforcer.subtractTen(-10);
      let actual = -20;
      expect(expected).to.be.equal(actual, 'test fail!')
    });
    it('test whit negative param, should return result subtract with 10', function () {
      let expected = mathEnforcer.subtractTen(0);
      let actual = -10;
      expect(expected).to.be.equal(actual, 'test fail!')
    });

    it('test whit floating-point number param, should return result subtract with 10', function () {
      let expected = mathEnforcer.subtractTen(2.5);
      let actual = -7.5;
      expect(expected).to.be.closeTo(actual, 0.01, 'test fail!')
    });

    it('test whit floating-point number param, should return result subtract with 10', function () {
      let expected = mathEnforcer.subtractTen(-2.5);
      let actual = -12.5;
      expect(expected).to.be.closeTo(actual, 0.01, 'test fail!')
    });
  });
  describe('sum', function () {
    it('test whit non-number first param, should return undefined', function () {
      let expected = mathEnforcer.sum('not-number', 3);
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit object first param, should return undefined', function () {
      let expected = mathEnforcer.sum({test: 'Petia'}, 5);
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit non-number second param, should return undefined', function () {
      let expected = mathEnforcer.sum(3, 'not-number');
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit object second param, should return undefined', function () {
      let expected = mathEnforcer.sum(2, {test: 'Petia'});
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit not-number params, should return undefined', function () {
      let expected = mathEnforcer.sum('not-number', {test: 'Petia'});
      expect(expected).to.be.equal(undefined, 'test fail!')
    });

    it('test whit positive number params, should return numbers sum', function () {
      let expected = mathEnforcer.sum(5, 2);
      let actual = 7;
      expect(expected).to.be.equal(actual, 'test fail!')
    });
    it('test whit negative number params, should return numbers sum', function () {
      let expected = mathEnforcer.sum(-5, -2);
      let actual = -7;
      expect(expected).to.be.equal(actual, 'test fail!')
    });
    it('test whit negative/positive number params, should return numbers sum', function () {
      let expected = mathEnforcer.sum(-5, 2);
      let actual = -3;
      expect(expected).to.be.equal(actual, 'test fail!')
    });
    it('test whit negative/positive number params, should return numbers sum', function () {
      let expected = mathEnforcer.sum(-5, 10);
      let actual = 5;
      expect(expected).to.be.equal(actual, 'test fail!')
    });

    it('test whit floating-point positive number params, should return numbers sum', function () {
      let expected = mathEnforcer.sum(5.6, 10.3);
      let actual = 15.9;
      expect(expected).to.be.closeTo(actual, 0.01, 'test fail!')
    });
    it('test whit floating-point negative number params, should return numbers sum', function () {
      let expected = mathEnforcer.sum(-5.6, -10.3);
      let actual = -15.9;
      expect(expected).to.be.closeTo(actual, 0.01, 'test fail!')
    });
    it('test whit floating-point negative/positive number params, should return numbers sum', function () {
      let expected = mathEnforcer.sum(5.6, -10.3);
      let actual = -4.7;
      expect(expected).to.be.closeTo(actual, 0.01, 'test fail!')
    });

    it('test whit floating-point negative/positive number params, should return numbers sum', function () {
      let expected = mathEnforcer.sum(20.3, -10.3);
      let actual = 10.0;
      expect(expected).to.be.closeTo(actual, 0.01, 'test fail!')
    });
  });


});