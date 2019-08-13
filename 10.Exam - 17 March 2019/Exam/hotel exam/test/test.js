const expect = require('chai').expect;
const Hotel = require('./hotel');

describe('Hotel',function () {
  it('should ', function () {
    let hotel = new Hotel('HotUni', 10);

// act
    hotel.rentARoom('Peter', 'single', 4);
    hotel.rentARoom('Robert', 'double', 4);
    hotel.rentARoom('Geroge', 'maisonette', 6);

    hotel.roomService(3, 'housekeeping');
    hotel.roomService(3, 'drink');
    hotel.roomService(2, 'room');

    let result1 = hotel.report();

// assert
    expect(result1).to.equal("HOTUNI DATABASE:\n--------------------\nbookingNumber - 1\nclientName - Peter\nroomType - single\nnights - 4\n----------\nbookingNumber - 2\nclientName - Robert\nroomType - double\nnights - 4\n----------\nbookingNumber - 3\nclientName - Geroge\nroomType - maisonette\nnights - 6\nservices: housekeeping, drink");
  });
});