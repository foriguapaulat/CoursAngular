var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Music = /** @class */ (function () {
    function Music() {
    }
    Music.prototype.play = function () {
        return "play music";
    };
    return Music;
}());
// Classe étendue
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar(instrument, makeSound) {
        var _this = _super.call(this) || this;
        _this._instrument = "guitar";
        return _this;
    }
    Object.defineProperty(Guitar.prototype, "instrument", {
        get: function () {
            return this._instrument;
        },
        enumerable: false,
        configurable: true
    });
    return Guitar;
}(Music));
