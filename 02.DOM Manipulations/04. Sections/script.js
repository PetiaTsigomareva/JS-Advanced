function create(words) {
  let contentDivElement = document.getElementById('content');
  for (let word of words) {
    let divElement = document.createElement('div');
    divElement.setAttribute('id', 'content div');

    let pElement = document.createElement('p');
    pElement.textContent = word;
    pElement.style.display = 'none';
    divElement.appendChild(pElement);
    divElement.addEventListener('click', function (e) {
      let currentDiv = e.target;
      currentDiv.children[0].style.display = 'block';
    })
    contentDivElement.appendChild(divElement);

  }
}