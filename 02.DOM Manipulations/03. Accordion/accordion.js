function toggle() {
  let spanButton = document.getElementsByClassName('button')[0];
  let divElement = document.getElementById('extra');


  if (spanButton.innerHTML === 'More') {
    divElement.style.display = 'block';
    spanButton.innerHTML = 'Less';

  } else if (spanButton.innerHTML === 'Less') {
    divElement.style.display = 'none';
    spanButton.innerHTML = 'More';
  }

}