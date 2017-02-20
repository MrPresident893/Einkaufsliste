function ConsolePrinter(i) {
  var item = i;

  this.printShoppingList = function() {
    console.log("Your shopping list:");
    var list = item.getList();
    for (var x = 0; x < list.length; x++) {
      console.log(list[x].getName());
    }
    console.log("");
  }

  this.printCachier = function() {
    console.log("Your Cachier:");
    console.log(item.getKasse());
    console.log("");
  }

  this.printInventory = function() {
    console.log("Cachier inventory:");
    var inventory = item.getInventory();
    for (let i = 0; i < inventory.length; i++) {
      console.log("ID: " + inventory[i].getId());
      console.log("Name: " + inventory[i].getName());
      console.log("Price: " + inventory[i].getPrice());
      console.log("Amount: " + inventory[i].getAmount());
    }
    console.log();
  }
}
