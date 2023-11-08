// Définition de la classe
var Product = /** @class */ (function () {
    function Product(name) {
        this._ref = 1000; // attribut protégé dans la classe actuelle et dans sa fille
        this._name = name; // le setter assigne une valeur à l'attribut _name
    }
    Object.defineProperty(Product.prototype, "name", {
        // getter : afficher une valeur dans le code courant
        get: function () {
            return this._name;
        },
        // setter
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ref", {
        // getter : afficher une valeur dans le code courant
        get: function () {
            return this._ref;
        },
        // setter
        set: function (ref) {
            this._ref = ref;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var bike = new Product('Super Bike');
console.log(bike.name); // affichera Super Bike
console.log(bike.ref);
