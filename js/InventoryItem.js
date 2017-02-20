function InventoryItem(i, n, p, a) {
  var id = i;
  var name = n;
  var price = p;
  var amount = a;

  this.getId = function() {
    return id;
  }

  this.getName = function() {
    return name;
  }

  this.getPrice = function() {
    return price;
  }

  this.getAmount = function() {
    return amount;
  }

  this.takeAmount = function(requested) {
    if (amount < requested) {
      throw new Error("Not enough " + name + " items!");
    }

    amount -= requested;
  }
}
