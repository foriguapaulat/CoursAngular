var Thing = /** @class */ (function () {
    function Thing(name) {
        this.name = name;
    }
    Thing.prototype.swim = function () {
        return ("nage comme un canard");
    };
    return Thing;
}());
var pato = new Thing("pato");
console.log(pato.swim());
