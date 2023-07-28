export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age
  };

  mercuryCalc() {
    return this.age / .24;
  }

  venusCalc() {
    this.venusAge = this.age / 0.62;
    return this.venusAge;
  }
}