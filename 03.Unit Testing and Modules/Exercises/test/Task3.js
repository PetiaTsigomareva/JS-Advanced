const expect = require('chai').expect;

function lookupChar(string, index) {
  if (typeof(string) !== 'string' || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe('lookupChar Test', function () {
  it('test whit non-string first param, should return undefined', function () {
    let expected = lookupChar(13, 0);
    expect(expected).to.be.equal(undefined, 'The function has incorrect first param and return incorrect result!')

  });
  it('test whit obj first param, should return undefined', function () {
    let expected = lookupChar({name: 'petia'}, 0);
    expect(expected).to.be.equal(undefined, 'The function has incorrect first param and return incorrect result!')

  });

  it('test whit non-number second param, should return undefined', function () {
    let expected = lookupChar('test', 'Petia');
    expect(expected).to.be.equal(undefined, 'The function has incorrect second param and return incorrect result!')

  });

  it('test whit floating-point second param, should return undefined', function () {
    let expected = lookupChar('test', 3.20);
    expect(expected).to.be.equal(undefined, 'The function has incorrect second param and return incorrect result!')

  });

  it('test whit correct type params, but index out of range, should return Incorrect index', function () {
    let expected = lookupChar('test', 10);
    expect(expected).to.be.equal('Incorrect index', 'The function has incorrect second param and return incorrect result!')

  });

  it('test whit correct type params, but index out of range, should return Incorrect index', function () {
    let expected = lookupChar('test', -1);
    expect(expected).to.be.equal('Incorrect index', 'The function has incorrect second param and return incorrect result!')

  });

  it('test whit correct type params, but index equal to string length, should return Incorrect index', function () {
    let expected = lookupChar('test', 4);
    expect(expected).to.be.equal('Incorrect index', 'The function has incorrect second param and return incorrect result!')

  });

  it('test whit correct type params, should return correct index', function () {
    let expected = lookupChar('test', 0);
    expect(expected).to.be.equal('t', 'The function return correct index!')

  });

  it('test whit correct type params, should return correct index', function () {
    let expected = lookupChar('test', 2);
    expect(expected).to.be.equal('s', 'The function return correct index!')

  });

});