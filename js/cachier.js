/**
  KASSENMASCHINE

  - hat einen Betrag Geld in der Kasse,

  - es kann ein Betrag eingezahlt werden

  - es kann ein Betrag rausgenommen werden, NUR WENN DER BETRAG IN DER KASSE IST

  - man kann sich den Betrag in der Kasse anzeigen lassen
*/

function Cachier() {
  var kasse = 0;

  var inventory = [
    new InventoryItem(1, "Milch", 20, 100),
    new InventoryItem(2, "Käse", 30, 2000),
    new InventoryItem(3, "Wurst", 30, 2000)
  ];

  this.addCash = function (cash) {
    kasse += cash;
  }

  this.removeCash = function (cash) {

    if (kasse < cash){
      throw new Error("Kassenbetrag zu niedrig!");
    }

    kasse -= cash;
  }

  this.getInventory = function() {
    return inventory;
  }

  this.getKasse = function() {
    return kasse;
  }
}
