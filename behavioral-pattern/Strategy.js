/**
 * STRATEGY
 * implement O (open/close) principle in solid
 */
var Ticket = /** @class */ (function () {
    function Ticket(promoteStrategy) {
        this.promoteStrategy = promoteStrategy;
    }
    Object.defineProperty(Ticket.prototype, "getPromoteStrategy", {
        get: function () {
            return this.promoteStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "setPromoteStrategy", {
        set: function (value) {
            this.promoteStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "setPrice", {
        set: function (price) {
            this.price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Ticket.prototype.getPromotedPrice = function () {
        return this.promoteStrategy.doDiscount(this.price);
    };
    return Ticket;
}());
var NoDiscountStrategy = /** @class */ (function () {
    function NoDiscountStrategy() {
    }
    NoDiscountStrategy.prototype.doDiscount = function (price) {
        return price;
    };
    return NoDiscountStrategy;
}());
var HalfDiscountStrategy = /** @class */ (function () {
    function HalfDiscountStrategy() {
    }
    HalfDiscountStrategy.prototype.doDiscount = function (price) {
        return price * 0.5;
    };
    return HalfDiscountStrategy;
}());
var QuarterDiscountStrategy = /** @class */ (function () {
    function QuarterDiscountStrategy() {
    }
    QuarterDiscountStrategy.prototype.doDiscount = function (price) {
        return price * 0.75;
    };
    return QuarterDiscountStrategy;
}());
// for (let i = 0; i < 5; i++) {
//   let strategyIndex = Math.floor(Math.random() * 2);
//   let ticket = new Ticket();
//   ticket.setName("ticket: " + i);
//   ticket.getPrice(50 * i);
//   switch (strategyIndex) {
//     case 0:
//       ticket.setPromoteStrategy(new NoDiscountStrategy());
//       break;
//     case 1:
//       ticket.setPromoteStrategy(new QuarterDiscountStrategy());
//     default:
//       ticket.setPromoteStrategy(new HalfDiscountStrategy());
//       break;
//   }
//   let promotedPrice = ticket.getPromotedPrice();
// }
var ticket = new Ticket(new NoDiscountStrategy());
ticket.setPrice(10);
ticket.getPromotedPrice();
