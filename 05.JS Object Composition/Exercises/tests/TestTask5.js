const expect = require('chai').expect;

(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    let result = this.toString();
    let index = result.search(str);
    if (index < 0) {
      result = str + result;
    }
    return result;

  };
  String.prototype.ensureEnd = function (str) {
    let result = this.toString();
    if (this.search(str) < 0) {
      result = this + str;
    }
    return result;

  };
  String.prototype.isEmpty = function () {
    let result = true;
   // console.log(this.toString());
    if (this.toString() !== '') {
      result = false;
    }
    return result;

  };
  String.prototype.truncate = function (n) {
    let result = this.toString();

  };
  String.format = function (str, ...params) {
    let regex = /{[0-9]}/g;
    let matches = str.match(regex);
    if (matches.length === params.length) {
      for (let i = 0; i < params.length; i++) {
        str = str.replace(matches[i], params[i]);

      }
    }
    return str;
  }
}());


describe('stringExtension', function () {
  let testString = 'quick brown fox jumps over the lazy dog';
  it('test str has own property', function () {
    expect(String.prototype.hasOwnProperty('ensureStart')).to.equal(true, "Couldn't find ensureStart() function");
  });
  it('test whit non exist str, should rturn correct answer', function () {
    let answer = testString.ensureStart('the ');
    expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect ensureStart() functionality');
  });

  it('test whit exist str, should return incorrect answer', function () {
    answer = answer.ensureStart('the ');
    expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Ignored existing start of string');
  });
  it('test str has own property isEmpty', function () {
    let testString = 'the quick brown fox jumps over the lazy dog';
    expect(String.prototype.hasOwnProperty('isEmpty')).to.equal(true, "Couldn't find isEmpty() function");

  });

  it('test isEmpty() whit non empty str, should return false', function () {
    let testString = 'the quick brown fox jumps over the lazy dog';
    expect(testString.isEmpty()).to.equal(false, 'Incorrect isEmpty() functionality');

  });

  it('test isEmpty() whit empty str, should return true', function () {
    let testString = '';
    expect(testString.isEmpty()).to.equal(true, 'Incorrect isEmpty() functionality');

    //''.isEmpty().should.be.true;
  });


});
