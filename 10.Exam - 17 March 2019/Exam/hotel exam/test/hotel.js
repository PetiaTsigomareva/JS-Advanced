class Hotel {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.bookings = [];
    this.currentBookingNumber = 1;

    this.roomsPricing = {
      single: 50,
      double: 90,
      maisonette: 135
    };

    this.roomCounts = {
      single: Math.floor(this.capacity * 0.5),
      double: Math.floor(this.capacity * 0.3),
      maisonette: Math.floor(this.capacity * 0.2)
    };
    this.servicesPricing = {
      food: 10,
      drink: 15,
      housekeeping: 25
    }

  }

  rentARoom(clientName, roomType, nights) {
    let result = [];
    if (this.roomCounts[roomType] > 0) {
      let bookingNumber = this.currentBookingNumber;

      let client = {clientName, roomType, nights, bookingNumber};
      this.bookings.push(client);

      this.currentBookingNumber++;
      this.roomCounts[roomType]--;

      result.push(`Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${bookingNumber}.`);

    } else {
      result.push(`No ${roomType} rooms available!`);
      let rooms = Object.keys(this.roomCounts).filter(k => this.roomCounts[k] > 0);
      for (let room of rooms) {
        result.push(`Available ${room} rooms: ${this.roomCounts[room]}`)
      }

    }

    return result.join('');

  }

  roomService(currentBookingNumber, serviceType) {
    let currentRoom = this.bookings.filter(r => r.bookingNumber === currentBookingNumber);
    if (currentRoom.length === 0) {
      return `The booking ${currentBookingNumber} is invalid.`
    }

    if (!this.servicesPricing.hasOwnProperty(serviceType)) {
      return `We do not offer ${serviceType} service.`
    }
    if (!currentRoom[0].hasOwnProperty('services')) {
      currentRoom[0]['services'] = [];
    }

    currentRoom[0]['services'].push(serviceType);


    return `Mr./Mrs. ${currentRoom[0]['clientName']}, Your order for ${serviceType} service has been successful.`;

  }

  checkOut(currentBookingNumber) {
    let rooms = this.bookings.filter(r => r.bookingNumber === currentBookingNumber);
    let currentRoom = rooms[0];
    let totalMoney = 0;
    if (rooms.length === 0) {
      return `The booking ${currentBookingNumber} is invalid.`
    }
    let type = currentRoom['roomType'];
    totalMoney += this.roomsPricing['type'] * currentRoom['nights'];
    this.roomCounts[type]++;
    this.bookings = this.bookings.filter(b => b.bookingNumber !== currentBookingNumber);

    if (!currentRoom['services']) {
      return `"We hope you enjoyed your time here, Mr./Mrs. ${currentRoom['clientName']}. The total amount of money you have to pay is ${totalMoney} BGN.`;
    } else {
      let totalServicesMoney = 0;
      for (let service of currentRoom['services']) {
        totalServicesMoney += this.servicesPricing[service];
      }
      return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom['clientName']}. The total amount of money you have to pay is ${totalMoney + totalServicesMoney} BGN. You have used additional room services, costing ${totalServicesMoney} BGN.`;
    }
  }

  report() {
    let output = [];
    output.push(`${this.name.toUpperCase()} DATABASE:`);
    output.push('--------------------');
    if (this.bookings.length === 0) {
      output.push(`There are currently no bookings.`);
      return output.join('\n');
    }
    let middleOutput = [];
    for (let booking of this.bookings) {
      let curretn = [];
      curretn.push(`bookingNumber - ${booking['bookingNumber']}`);
      curretn.push(`clientName - ${booking['clientName']}`);
      curretn.push(`roomType - ${booking['roomType']}`);
      curretn.push(`nights - ${booking['nights']}`);

      if (booking['services']) {
        curretn.push(`services: ${booking['services'].join(', ')}`);
      }

      middleOutput.push(curretn.join('\n'));
    }
  output.push(middleOutput.join('\n----------\n'));
    return output.join('\n');
  }

}
module.exports=Hotel;
//
let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());



