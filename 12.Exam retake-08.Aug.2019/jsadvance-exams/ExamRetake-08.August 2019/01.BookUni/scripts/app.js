function solve() {
  const formInputs = document.querySelectorAll('form input');

  const titleInput = document.querySelector('[placeholder = "Add Title"]');
  const yearInput = document.querySelector('[placeholder= "Add Year"]');
  const priceInput = document.querySelector('[placeholder="Add Price"]');

  const addBtn = document.querySelector('form button');
  addBtn.addEventListener('click', addNewBook);

  const oldBookSection = document.getElementById('outputs').children[0];
  const newBookSection = document.getElementById('outputs').children[1];

  const totalStoreH1 = document.getElementsByTagName('h1')[1];

  function addNewBook(event) {
    event.preventDefault();
    if (titleInput.value !== '' && yearInput.value > 0 && priceInput.value > 0) {
      let bookDiv = document.createElement('div');
      bookDiv.setAttribute('class', 'book');
      let bookParg = document.createElement('p');
      bookParg.textContent = `${titleInput.value} [${yearInput.value}]`;
      let buyBtn = document.createElement('button');
      let price = Number.parseFloat(priceInput.value).toFixed(2);
      buyBtn.textContent = `Buy it only for ${price} BGN`;
      buyBtn.addEventListener('click', buyBook);
      bookDiv.appendChild(bookParg);
      bookDiv.appendChild(buyBtn);

      if (yearInput.value >= 2000) {
        let moveToOldSectionBtn = document.createElement('button');
        moveToOldSectionBtn.textContent = 'Move to old section';
        moveToOldSectionBtn.addEventListener('click', moveBook);
        bookDiv.appendChild(moveToOldSectionBtn);

        let bookShelf = newBookSection.children[1];
        bookShelf.appendChild(bookDiv);
        newBookSection.appendChild(bookShelf);
      } else {
        price = price - (price * 0.15);
        price = Number.parseFloat(price).toFixed(2);

        buyBtn.textContent = `Buy it only for ${price} BGN`;
        let bookShelf = oldBookSection.children[1];
        bookShelf.appendChild(bookDiv);
        oldBookSection.appendChild(bookShelf);
      }


    }

  }

  function buyBook(event) {
    let totalStoreProfit = Number(totalStoreH1.textContent.split(':')[1].split(' ')[1]);
    let bookBtnText = event.target.textContent;
    let bookPrice = Number(bookBtnText.split(' ')[4]);
    totalStoreProfit += bookPrice;
    totalStoreH1.textContent = `Total Store Profit: ${totalStoreProfit} BGN`;
    let parentDiv = event.target.parentElement;
    parentDiv.remove();
  }

  function moveBook(event) {
    let parentDiv = event.target.parentElement;
    let currentBookTitle = parentDiv.children[0].textContent;
    let currentBuyBtnText = parentDiv.children[1].textContent;
    let currentPrice = Number.parseFloat(currentBuyBtnText.split(' ')[4]);
    currentPrice = currentPrice - (currentPrice * 0.15);
    currentPrice = Number.parseFloat(currentPrice).toFixed(2);

    let bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'book');
    let bookParg = document.createElement('p');
    bookParg.textContent = currentBookTitle;
    let buyBtn = document.createElement('button');

    buyBtn.textContent = `Buy it only for ${currentPrice} BGN`;
    buyBtn.addEventListener('click', buyBook);
    bookDiv.appendChild(bookParg);
    bookDiv.appendChild(buyBtn);

    let bookShelf = oldBookSection.children[1];
    bookShelf.appendChild(bookDiv);
    oldBookSection.appendChild(bookShelf);

    parentDiv.remove();

  }


}