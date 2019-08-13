const expect = require('chai').expect;

function extensibleObject() {

  let myObj = {
    __proto__: {},
    extend: function (input) {
      for (let key of Object.keys(input)) {
        if (typeof input[key] === 'function') {
          console.log(typeof input[key]);
          Object.getPrototypeOf(this)[key] = input[key];
        } else {
          console.log(typeof input[key]);
          this[key] = input[key];
        }
      }
    }
  };


  return myObj;
}

describe('extensibleObject', function () {
  it('test with voit template method', function () {
    const template = {
      extensionMethod: function () {
        console.log("From extension method")
      }
    };

    let testObject = extensibleObject();
    testObject.extend(template);
    expect(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod')).to.equal(true, "Object's prototype was not extended");
  });
  it('test with return number template method', function () {
    const template = {
      extensionMethod: function () {
        return 5;
      }
    };

    let testObject = extensibleObject();
    testObject.extend(template);
    expect(testObject.extensionMethod()).to.equal(5, "Extension method wasn't cloned correctly.");
  });
  it('test3',function () {
    const template = {
      fight: function(target) { return `object fights with ${target}` },
      health: 100,
      mana: 50
    };

    let testObject = extensibleObject();
    testObject.extend(template);
    expect(Object.getPrototypeOf(testObject).hasOwnProperty('fight')).to.equal(true, "Object's prototype was not extended");
    expect(testObject.hasOwnProperty('health')).to.equal(true, "Template properties were not cloned correctly.");
    expect(testObject.hasOwnProperty('mana')).to.equal(true, "Template properties were not cloned correctly.");
    expect(testObject.fight('me')).to.equal('object fights with me', "Extension method wasn't cloned correctly.");
  })

});