function attachEventsListeners() {
  const hoursPerDay = 24;
  const minutesPerDay = 1440;
  const secondsPerDay = 86400;

  const daysPerHour = 0.041667;
  const minutesPerHour = 60;
  const secondsPerHour = 3600;

  const daysPerMinutes = 0.0006944444;
  const hoursPerMinutes = 0.0166666667;
  const secondsPerMinutes = 60;

  const daysPerSeconds = 1.15741E-5;
  const hoursPerSeconds = 0.00027777777777778;
  const minutesPerSeconds = 0.016666667;

  let daysInput = document.getElementById('days');
  let hoursInput = document.getElementById('hours');
  let minutesInput = document.getElementById('minutes');
  let secondsInput = document.getElementById('seconds');



  let convertsButtons = document.querySelectorAll('[value="Convert"]');
  for (let i = 0; i < convertsButtons.length; i++) {
    const convertsButton = convertsButtons[i];
    convertsButton.addEventListener('click', calculate);
    }


  function calculate(event) {
    let currentButtonId = event.target.id;
    let input = '';
    if (currentButtonId === 'daysBtn') {
      input = daysInput.value;
      hoursInput.value = input * hoursPerDay;
      minutesInput.value = input * minutesPerDay;
      secondsInput.value = input * secondsPerDay;
    } else if (currentButtonId === 'hoursBtn') {
      input = hoursInput.value;
      daysInput.value = input * daysPerHour;
      minutesInput.value = input * minutesPerHour;
      secondsInput.value = input * secondsPerHour;
    } else if (currentButtonId === 'minutesBtn') {
      input = minutesInput.value;
      daysInput.value = Math.round(input * daysPerMinutes);
      hoursInput.value = Math.round(input * hoursPerMinutes);
      secondsInput.value = input * secondsPerMinutes;
    } else if (currentButtonId === 'secondsBtn') {
      input = secondsInput.value;
      daysInput.value = input * daysPerSeconds;
      hoursInput.value = Math.round(input * hoursPerSeconds);
      minutesInput.value = Math.round(input * minutesPerSeconds);
    } else {
      //invalided id
    }

  }

}