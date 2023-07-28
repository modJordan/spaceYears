export class User {
  constructor(name, mercuryAge, venusAge, earthAge, marsAge, jupiterAge,) {
    this.name = name;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.earthAge = earthAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  };

  mercuryAge() {
    return this.mercuryAge / .24;
  }

  venusAge() {
    return this.venusAge / .62;
  }
}