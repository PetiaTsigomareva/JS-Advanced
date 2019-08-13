//const expect = require('chai').expect;

function requestValidator(input) {
  let inputKeys = Object.keys(input);
  const method = input.method;
  const uri = input.uri;
  const version = input.version;
  const message = input.message;


  if (checkMethod(inputKeys[0], method) && checkURI(inputKeys[1], uri) && checkVersion(inputKeys[2], version) && checkMessage(inputKeys[3], message)) {
    return input;
  }


  function checkMethod(key, method) {
    let result = true;
    if (method !== 'GET' && method !== 'POST' && method !== 'DELETE' && method !== 'CONNECT' || key !== 'method') {
      throw new Error('Invalid request header: Invalid Method');
    }
    return result;
  }

  function checkURI(key, uri) {
    const regex = /^([a-z0-9\.]+)$/;
    let result = regex.test(uri);
    if (!result || key !== 'uri') {
      throw new Error('Invalid request header: Invalid URI');
    }
    return result;
  }

  function checkVersion(key, version) {
    let result = true;
    if (version !== 'HTTP/0.9' && version !== 'HTTP/1.0' && version !== 'HTTP/1.1' && version !== 'HTTP/2.0' || key !== 'version') {
      throw new Error('Invalid request header: Invalid Version');
    }
    return result;
  }

  function checkMessage(key, message) {
    const regex = /^[^<>\\&'"]+$/;
    let result = true;
    if (key !== 'message') {
      throw new Error('Invalid request header: Invalid Message');
    } else if (message !== '') {
      if (regex.test(message)) {
        result = regex.test(message);
      } else {
        throw new Error('Invalid request header: Invalid Message');
      }
    } else {
      //nothing
    }
    return result;
  }
}

// let obj = {
//   method: 'POST',
//   uri: 'home.bash',
//   version: 'HTTP/2.0'
// };
//
// expect(() => requestValidator(obj)).to.throw(Error).which.has.property('message', 'Invalid request header: Invalid Message');
// let valid = result({
//   method: 'GET',
//   uri: 'svn.public.catalog',
//   version: 'HTTP/1.1',
//   message: ''
// });
//
// let obj = {};
// expect(() => result(obj)).to.throw(Error).which.has.property('message', 'Invalid request header: Invalid Method');
// obj = {
//   method: 'GET'
// };
// expect(() => result(obj)).to.throw(Error).which.has.property('message', 'Invalid request header: Invalid URI');
// obj = {
//   method: 'GET',
//   uri: 'svn.public.catalog'
// };
// expect(() => result(obj)).to.throw(Error).which.has.property('message', 'Invalid request header: Invalid Version');
// obj = {
//   method: 'GET',
//   uri: 'svn.public.catalog',
//   version: 'HTTP/1.1'
// };

let obj = {
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
};
let obj1 = {
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
};
console.log(requestValidator(obj));
console.log(requestValidator(obj1));