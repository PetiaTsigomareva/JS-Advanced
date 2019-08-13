const expect = require('chai').expect;

function isOddOrEven(string) {
  if (typeof(string) !== 'string') {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return 'even';
  }

  return 'odd';
}

describe('isOddEven', function () {
  //if the param is not string(number)
  it('test with number param, should return undefined', function () {
    let expected = isOddOrEven(100);
    expect(expected).to.be.equal(undefined, 'function did not return correct result!');

  });
  //if the param is object
  it('test whit object param,should return undefined', function () {
    let expected = isOddOrEven({name: 'Petia'});
    expect(expected).to.be.equal(undefined, 'function did not return correct result!');

  });
  //if param is even length
  it('test whit even length param,should return correct result', function () {
    let expected = isOddOrEven('Dany');
    expect(expected).to.be.equal('even', 'function return correct result!');

  });


  //if param is odd length
  it('test whit odd length param,should return correct result', function () {
    let expected = isOddOrEven('Petia');
    expect(expected).to.be.equal('odd', 'function return correct result!');

  });

  it('test whit multiple consecutive checks, should return correct result!', function () {
    expect(isOddOrEven('cat')).to.be.equal('odd', 'function return correct result!');

    expect(isOddOrEven('pet')).to.be.equal('odd', 'function return correct result!');

    expect(isOddOrEven('bird')).to.be.equal('even', 'function return correct result!');
  });

});