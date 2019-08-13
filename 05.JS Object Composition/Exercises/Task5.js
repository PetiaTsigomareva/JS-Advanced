(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    let result = this.toString();
    if (!result.startsWith(str)) {
      result = str + result;
    }
    return result;

  };
  String.prototype.ensureEnd = function (str) {
    let result = this.toString();
    if (!result.endsWith(str)) {
      result += str;
    }
    return result;

  };
  String.prototype.isEmpty = function () {
    let result = true;
    if (this.toString() !== '') {
      result = false;
    }
    return result;

  };
  String.prototype.truncate = function (n) {
    let result = this.toString();
    const ellipsis = '...';
    if (n > 3) {
      if (result.length > n) {
        let lastSpaceIndex = result.substr(0, n - 2).lastIndexOf(" ");
        if (lastSpaceIndex < 0) {
          result = result.substring(0, n - 3);
        } else {
          result = result.substring(0, lastSpaceIndex);
        }
        result += ellipsis;
      }
    } else {
      let ellipsis = '';
      for (let i = 0; i < n; i++) {
        ellipsis += '.';
      }
      result = ellipsis;
    }
    return result;

  };
  String.format = function (str, ...params) {
    let regex = /{[0-9]}/g;
    let matches = str.match(regex);
    for (let i = 0; i < params.length; i++) {
      str = str.replace(matches[i], params[i]);

    }
    return str;
  }
})();

let str = 'my string';
str = str.ensureStart('my')
console.log(str);

str = str.ensureStart('hello ')
console.log(str);

// str = str.ensureStart('hello ')
// console.log(str);

// str = str.ensureEnd(' hello')
// console.log(str);
//
// str = str.ensureEnd(' hello')
// console.log(str);

str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);

str = String.format('The {0},dhdffj {1} sdfgsdfg {2}', 'dog', 'petia');
console.log(str);

console.log(str.isEmpty());
console.log(''.isEmpty());
