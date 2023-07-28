export class User {

  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  mercuryCalc() {
    return this.age / .24;
  }

  venusCalc() {
    this.venusAge = this.age / 0.62;
    return this.venusAge;
  }

  marsCalc() {
    this.marsAge = this.age / 1.88;
    return this.marsAge;
  }

  jupiterCalc() {
    this.jupiterAge = this.age / 11.86;
    return this.jupiterAge;
  }
}

export class PastAge {
  constructor(current, past, time) {
    this.current = current
    this.past = past;
    this.time = time;
  }

  earthPastAge() {
    this.time = (this.current - this.past);
    return this.time;
  }
  mercuryPastAge() {
    this.time = (this.current - this.past);
    this.time = this.time * .24
    return this.time;
  }

  venusPastAge() {
    this.time = (this.current - this.past);
    this.time = this.time * .62
    return this.time;
  }

  marsPastAge() {
    this.time = (this.current - this.past);
    this.time = this.time * 1.88
    return this.time;
  }

  jupiterPastAge() {
    this.time = (this.current - this.past);
    this.time = this.time * 11.86;
    return this.time;
  }
}
export class FutureAge {
  constructor(current, future) {
    this.current = current;
    this.future = future;
  }
  earthFuture() {
    this.time = (this.future - this.current);
    return this.time;
  }
}

