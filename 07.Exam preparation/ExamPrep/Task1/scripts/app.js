function acceptance() {
  let companyInput = document.querySelector('[name = shippingCompany]');
  let productInput = document.querySelector('[name= productName]');
  let quantityInput = document.querySelector('[name = productQuantity]');
  let scrapeInput = document.querySelector('[name = productScrape]');
  let addBtn = document.getElementById('acceptance');
  let warehouseDiv = document.getElementById('warehouse');
  addBtn.addEventListener('click', addProduct)

  function addProduct() {
    if (companyInput.value !== '' && productInput.value !== '' && quantityInput.value !== '' && scrapeInput.value !== '') {
      let quantity = Number.parseInt(quantityInput.value);
      let scrape = Number.parseInt(scrapeInput.value);
      let productQuantity = quantity - scrape;
      if (productQuantity > 0) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let outOfStockBtn = document.createElement('button');

        outOfStockBtn.textContent = 'Out of stock';
        outOfStockBtn.addEventListener('click', () => div.remove());
        p.textContent = `[${companyInput.value}] ${productInput.value} - ${productQuantity} pieces`;

        div.appendChild(p);
        div.appendChild(outOfStockBtn);
        warehouseDiv.appendChild(div);

        resetInputFields();
      }

    }
    function resetInputFields() {
      companyInput.value = '';
      productInput.value = '';
      quantityInput.value = '';
      scrapeInput.value = '';
    }

  }
}
