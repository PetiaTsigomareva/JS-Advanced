function addItem() {
  let textInput = document.getElementById('newItemText');
  let valueInput = document.getElementById('newItemValue');

  let newlyOption = document.createElement('option');
  if (textInput.value !== '' && valueInput.value !== '') {

    newlyOption.textContent = textInput.value;
    newlyOption.value = valueInput.value;

    let selectMenu = document.getElementById('menu');
    selectMenu.appendChild(newlyOption);

    textInput.value = '';
    valueInput.value = '';
  }

}
