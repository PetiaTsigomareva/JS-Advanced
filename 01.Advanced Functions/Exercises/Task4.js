//Task4
function personalBMI(...arguments) {
  let patientChart = {};
  let name = arguments[0];
  let personalInfo = {
    age: arguments[1],
    weight: arguments[2],
    height: arguments[3]
  };

  let bmi = (a, b) => {
    return Math.round(a / (b * b));
  };

  let status = (c) => {
    let result = '';
    if (c < 18.5) {
      result = 'underweight';
    } else if (c >=18.5 && c < 25) {
      result = 'normal';
    } else if (c >=25 && c < 30) {
      result = 'overweight';
    } else if (c >= 30) {
      result = 'obese';
    }

    return result;
  };
  let currentBMI = bmi(personalInfo.weight, personalInfo.height / 100);
  let currentStatus = status(currentBMI);

  patientChart = {
    name: name,
    personalInfo: personalInfo,
    BMI: currentBMI,
    status: currentStatus
  };
  if (currentStatus === 'obese') {
    patientChart[`recommendation`]= 'admission required';
  }

  return patientChart;
}

console.log(personalBMI('Peter', 29, 75, 182));
console.log('----------------')
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));
