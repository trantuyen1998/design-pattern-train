/**
 * FEATURE DECORATOR
 * Attach new behaviors to objects
 * by placing these objects inside special wrapper objects that contain the behaviors.
 * 
 */

interface IMilkTea {
  cost(): number;
}

class MilkTea implements IMilkTea {
  cost(): number {
    return 5;
  }
}

/**
 * abstract class MilkTeaDecorator to subclass can override operations
 * define the wrapping interface for all
 * concrete decorators.
 */
abstract class MilkTeaDecorator implements IMilkTea {
  protected milkTea: IMilkTea;
  constructor(inner: IMilkTea) {
    this.milkTea = inner;
  }

  cost(): number {
    return this.milkTea.cost();
  }
}

/**
 * call to super of MilkTeaDecorator to calculation milkTea value of super
 * in subclass use value of super to add value of subclass to super value
 * 
 * 
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */

class Bubble extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner);
  }

  cost(): number {
    return 1 + super.cost();
  }
}

class BlackSuga extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner);
  }

  cost(): number {
    return 2 + super.cost();
  }
}

class EggPudding extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner);
  }

  cost(): number {
    return 3 + super.cost();
  }
}

const order1 = new EggPudding(new Bubble(new BlackSuga(new MilkTea())));
console.log(order1.cost());
