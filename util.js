// //must have product.title
// function createProduct(product) {
//   //TODO: add logic to create product function;
//   //stub

//   const productHTML = document.createElement("div");
//   productHTML.innerHTML = product.title;

//   return productHTML;
// }

// function createProductList(productList) {
//   //TODO: add logic
//   //stub

//   const productListElement = document.createElement("div");
//   productListElement.innerHTML = "PRODUCTS LIST HERE";
//   return productListElement;
// }

// function createHeader(headerObject) {
//   //TODO: add logic

//   //stub
//   const headerElement = document.createElement("div");
//   headerElement.innerHTML = "HEADER HERE";
//   return headerElement;
// }

function createProduct(product) {
  const productHTML = document.createElement("div");
  productHTML.classList.add("product");

  const productTitle = document.createElement("h2");
  productTitle.innerHTML = product.name;
  productHTML.appendChild(productTitle);

  const productDataContainer = document.createElement("div");
  productDataContainer.classList.add("product-data-container");
  productHTML.appendChild(productDataContainer);

  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  productPrice.innerHTML = "Price: " + product.price;

  productDataContainer.appendChild(productPrice);

  return productHTML;
}
