/**
shoppingList

Features:

- add an item to the shopping list (addItem),
- remove an item from the shopping list (removeItem),
- print the shopping list (print)

*/

function ShoppingList() {
  // PRIVATE shopping list is empty by default
  var list = [];


  // PUBLIC addItem
  this.addItem = function(item) {
    if (!item.getPrice) {
      throw new Error("Kein korrektes Item!");
    }
    list.push(item);
  }

  // PUBLIC removeItem
  this.removeItem = function(item) {
    var newList = [];

    for (var i = 0; i < list.length; i++) {
      var currentItem = list[i];

      if (currentItem.indexOf(item) === -1) {
        newList.push(currentItem);
      }
    }

    list = newList;
  }

  // PUBLIC print
  this.getList = function() {
    return list;
  }
}
