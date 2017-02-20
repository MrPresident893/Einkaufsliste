function ListItem(i, n, p) {
  var id = i;
  var name = n;
  var price = p;

  this.getId = function() {
    return id;
  }

  this.getName = function() {
    return name;
  }

  this.getPrice = function() {
    return price;
  }
}
