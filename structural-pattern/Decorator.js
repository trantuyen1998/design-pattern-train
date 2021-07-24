/**
 * FEATURE DECORATOR
 * Attach new behaviors to objects
 */
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
var MilkTea = /** @class */ (function () {
    function MilkTea() {
    }
    MilkTea.prototype.cost = function () {
        return 5;
    };
    return MilkTea;
}());
var MilkTeaDecorator = /** @class */ (function () {
    function MilkTeaDecorator(inner) {
        this.milkTea = inner;
    }
    MilkTeaDecorator.prototype.cost = function () {
        return this.milkTea.cost();
    };
    return MilkTeaDecorator;
}());
var Bubble = /** @class */ (function (_super) {
    __extends(Bubble, _super);
    function Bubble(inner) {
        return _super.call(this, inner) || this;
    }
    Bubble.prototype.cost = function () {
        return 1 + _super.prototype.cost.call(this);
    };
    return Bubble;
}(MilkTeaDecorator));
var BlackSuga = /** @class */ (function (_super) {
    __extends(BlackSuga, _super);
    function BlackSuga(inner) {
        return _super.call(this, inner) || this;
    }
    BlackSuga.prototype.cost = function () {
        return 2 + _super.prototype.cost.call(this);
    };
    return BlackSuga;
}(MilkTeaDecorator));
var EggPudding = /** @class */ (function (_super) {
    __extends(EggPudding, _super);
    function EggPudding(inner) {
        return _super.call(this, inner) || this;
    }
    EggPudding.prototype.cost = function () {
        return 3 + _super.prototype.cost.call(this);
    };
    return EggPudding;
}(MilkTeaDecorator));
var order1 = new EggPudding(new Bubble(new BlackSuga(new MilkTea())));
console.log(order1.cost());
