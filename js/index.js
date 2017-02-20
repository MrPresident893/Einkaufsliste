var shoppingList = new ShoppingList();

var cachier = new Cachier();
cachier.addCash(200);

document.getElementById('basketCaseAmount').innerHTML = '0 Euro';

function addItemToShoppingList(htmlElement) {

  // überprüfen, ob genug cash vorhanden ist...

  // preis bereits im warenkorb = calculateTotalPrice();
  // preis der hinzugefügt werden soll == p;
// verfügbares guthaben == getKasse

  var i = htmlElement.dataset.id;
  var n = htmlElement.dataset.name;
  var p = htmlElement.dataset.price;


  var  item = new ListItem(i, n, p);

  shoppingList.addItem(item);

  document.getElementById('basketCaseAmount').innerHTML = calculateTotalPrice() + ' Euro';

  //showShoppingList();
}


function showShoppingList() {

  var listPrinter = new ConsolePrinter(shoppingList);
  listPrinter.printShoppingList();

}

function showCash() {

  var cachierPrinter = new ConsolePrinter(cachier);
  cachierPrinter.printCachier();

}


function showInventoryList() {

    var cachierPrinter = new ConsolePrinter(cachier);

    cachierPrinter.printInventory();

}


function calculateTotalPrice() {

  var shoppingItems = shoppingList.getList();
  var totalPrice = 0;

  for(i = 0; i < shoppingItems.length; i++) {

    var item = shoppingItems[i];
    var price = item.getPrice();
    totalPrice += parseInt(price);
  }

  console.log(totalPrice);

  return totalPrice;

}


function checkout() {

  //calculateprice
  // add to cashier
  // new shoppinglist


  // kasse == 200

  // 3 artikel für je 10 euro... 30 euro
  var calculatePrice = calculateTotalPrice();

  // kasse 230 euro
  cachier.addCash(calculatePrice);

  shoppingList = new ShoppingList();



}
