function lockedProfile() {
  let divProfileElements = document.getElementsByClassName('profile');
  for (let i = 0; i < divProfileElements.length; i++) {
    let div = divProfileElements[i];
    let button = div.lastElementChild;
    button.addEventListener('click', changeState);
  }
  function changeState(event) {
    const clickedButton = event.target;
    const unlockRadio = clickedButton.parentNode.querySelector('input[type="radio"][value="unlock"]');
    const hidenInformation = clickedButton.previousElementSibling;
    if (unlockRadio.checked) {
      if (clickedButton.textContent === 'Show more') {
        hidenInformation.style.display = 'block';
        clickedButton.textContent = 'Hide it';

      } else if (clickedButton.textContent === 'Hide it') {
        hidenInformation.style.display = 'none';
        clickedButton.textContent = 'Show more';
      } else {
        //invalided button text content
      }
    }
  }
}

