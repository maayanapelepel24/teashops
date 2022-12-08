//prices varaibles
const blackTeaPrice = 12;
const greenTeaPrice = 10;
const whiteTeaPrice = 14;

//checkout variables (from the HTML)
const CheckOutButton = document.getElementById("checkOut");
const CheckOutMessage = document.getElementById("chackOutMessageId");

//items amaunt message varible (from the HTML)
const totalItemsAmauntMessage = document.getElementById("totalItemsAmauntId");

//price amaunt message varible (from the HTML)
const totalPriceAmauntMessage = document.getElementById("totalPriceAmauntId");

//button actions
CheckOutButton.addEventListener("click", () => {
  CheckOutMessage.style.display = "block";

  //input varibles
  const firstItemAmaont = document.getElementById("firstItemAmaunt");
  const secondItemAmaont = document.getElementById("secondItemAmaunt");
  const thirdItemAmaont = document.getElementById("thirdItemAmaunt");

  //convert inputs varibles to numbers
  const firstItemAmauntNumber = Number(firstItemAmaont.value);
  const secondItemAmaontNumber = Number(secondItemAmaont.value);
  const thirdItemAmaontNumber = Number(thirdItemAmaont.value);

  //custumer price calculation varaibles
  const blackTeaTotalPrice = blackTeaPrice * firstItemAmauntNumber;
  const greenTeaTotalPrice = greenTeaPrice * secondItemAmaontNumber;
  const whiteTeaTotalPrice = whiteTeaPrice * thirdItemAmaontNumber;
  const totalPrice =
    blackTeaTotalPrice + greenTeaTotalPrice + whiteTeaTotalPrice;

  //total amaunt of items message
  totalItemsAmauntMessage.innerHTML =
    firstItemAmauntNumber + secondItemAmaontNumber + thirdItemAmaontNumber;
  //total price message
  totalPriceAmauntMessage.innerHTML = totalPrice + "$";
});
