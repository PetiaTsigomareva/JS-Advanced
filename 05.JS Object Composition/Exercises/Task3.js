function carFactory(car) {
  let model = car.model;

  function getEngine(powerInput) {
    let power = 0;
    let volume = 0;

    if (powerInput <= 90) {
      power = 90;
      volume = 1800;
    } else if (powerInput > 90 && powerInput <= 120) {
      power = 120;
      volume = 2400;
    } else if (powerInput > 120 && powerInput <= 200) {
      power = 200;
      volume = 3500;
    } else {
      //nothing
    }
    let result = {power, volume};

    return result;

  }

  let engine = getEngine(car.power);

  function getType(carriageInput) {
    let result = '';
    if (carriageInput === 'hatchback') {
      result = 'hatchback';
    } else if (carriageInput === 'coupe') {
      result = 'coupe';
    } else {
      //nothing
    }
    return result;
  }

  let type = getType(car.carriage);
  let color = car.color;

  let carriage = {type, color};

  function getWheels(wheelsizeInput) {
    let result = [];
    const count = 4;
    let wheelSize = 0;
    if (wheelsizeInput % 2 === 0) {
      wheelsizeInput -= 1;
    }
    for (let i = 0; i < count; i++) {
      result.push(wheelsizeInput);
    }
    return result;
  }

  let wheels = getWheels(car.wheelsize);
  car = {
    model, engine, carriage, wheels
  };

  return car;
}

console.log(carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
}));

console.log(carFactory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17
}));