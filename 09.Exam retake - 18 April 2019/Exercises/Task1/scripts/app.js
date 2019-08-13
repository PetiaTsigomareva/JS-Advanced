function addProduct() {
  let productInput = document.querySelector('[type="text"]');
  let priceInput = document.querySelector('[type="number"]');
  let tBodyElement = document.getElementById('product-list');
  let trFooter = document.querySelector('tfoot tr');
  let totalPriceElement = trFooter.children[1];
  let price = +totalPriceElement.textContent;

  if (productInput.value !== '' && +priceInput.value > 0) {
    let trElement = document.createElement('tr');

    let tdProduct = document.createElement('td');
    tdProduct.textContent = productInput.value;
    trElement.appendChild(tdProduct);

    let tdPrice = document.createElement('td');
    tdPrice.textContent = priceInput.value;
    trElement.appendChild(tdPrice);
    price += +priceInput.value;

    tBodyElement.appendChild(trElement);
    totalPriceElement.textContent = price.toString();
  }
    productInput.value = '';
    priceInput.value = '';
}