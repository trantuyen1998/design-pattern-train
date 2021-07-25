/**
 * STRATEGY
 * implement O (open/close) principle in SOLID
 * 
 * Define a family of algorithms, 
 * encapsulate each one, and make them interchangeable.
 * 
 */

interface IPromoteStrategy {
  doDiscount(price: number): number;
}
class Ticket {

  private promoteStrategy: IPromoteStrategy;
  private price: number;
  private name: string;

  get getPromoteStrategy(): IPromoteStrategy {
    return this.promoteStrategy;
  }

  set setPromoteStrategy(value: IPromoteStrategy) {
    this.promoteStrategy = value;
  }

  get getPrice(): number {
    return this.price;
  }

  set setPrice(price: number) {
    this.price = price;
  }

  get getName(): string {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
  constructor(promoteStrategy?: IPromoteStrategy) {
    this.promoteStrategy = promoteStrategy;
  }

  getPromotedPrice(): number {
    return this.promoteStrategy.doDiscount(this.price);
  }
}

class NoDiscountStrategy implements IPromoteStrategy {
  doDiscount(price: number): number {
    return price;
  }
}
class HalfDiscountStrategy implements IPromoteStrategy {
  doDiscount(price: number): number {
    return price * 0.5;
  }
}
class QuarterDiscountStrategy implements IPromoteStrategy {
  doDiscount(price: number): number {
    return price * 0.75;
  }
}

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


// let ticket = new Ticket(new NoDiscountStrategy())
// ticket.setPrice(10)
// ticket.getPromotedPrice()