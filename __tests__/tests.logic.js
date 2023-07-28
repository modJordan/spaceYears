import { User, PastAge, FutureAge } from "../src/js/logic.js";

describe("User", () => {

  it("should create a User class with name and planet age value", () => {
    const char = new User("Jojo", 31);
    expect(char.name).toBe("Jojo");
    expect(char.age).toBe(31);
  })

  it("should display the Users current age on Mercury", () => {
    const char = new User("Jojo", 31);
    const mercuryAge = char.mercuryCalc();
    expect(mercuryAge).toBe(31 / 0.24);
  })

  it("should display the Users current age on Venus", () => {
    const char = new User("Jojo", 31);
    char.venusCalc();
    expect(char.venusAge).toBe(31 / 0.62);
  })

  it("should display the Users current age on Mars", () => {
    const char = new User("Jojo", 31);
    char.marsCalc();
    expect(char.marsAge).toBe(31 / 1.88);
  })

  it("should display the Users current age on Jupiter", () => {
    const char = new User("Jojo", 31);
    char.jupiterCalc();
    expect(char.jupiterAge).toBe(31 / 11.86);
  })
})

describe("PastAge", () => {

  it("should create a past age class with a current age and a past age", () => {
    const char = new PastAge(31, 21, 0);
    expect(char.current).toBe(31);
    expect(char.past).toBe(21);
  })

  it("should determine how many years have passed on Earth since a past birthday", () => {
    const char = new PastAge(31, 21, 0);
    char.earthPastAge();
    expect(char.time).toBe(char.current - char.past);
  })

  it("should determine how many years have passed on Mercury since a past birthday", () => {
    const char = new PastAge(31, 21, 0);
    char.mercuryPastAge();
    expect(char.time).toBe((char.current - char.past) * .24);
  })

  it("should determine how many years have passed on Venus since a past birthday", () => {
    const char = new PastAge(31, 21, 0);
    char.venusPastAge();
    expect(char.time).toBe((char.current - char.past) * .62);
  })

  it("should determine how many years have passed on Mars since a past birthday", () => {
    const char = new PastAge(31, 21, 0);
    char.marsPastAge();
    expect(char.time).toBe((char.current - char.past) * 1.88);
  })

  it("should determine how many years have passed on Jupiter since a past birthday", () => {
    const char = new PastAge(31, 21, 0);
    char.jupiterPastAge();
    expect(char.time).toBe((char.current - char.past) * 11.86);
  })
})

describe("FutureAge", () => {
  it("should create a future age class whith a current age and a future age.", () => {
    const char = new FutureAge(31, 69, 0);
    expect(char.current).toBe(31);
    expect(char.future).toBe(69);
  })

  it("should calculate the amount of time between current age and future birthday on Earth", () => {
    const char = new FutureAge(31, 69, 0);
    char.earthFuture();
    expect(char.time).toBe(38);
  })

  it("should calculate the amount of time between current age and future birthday on Mercury", () => {
    const char = new FutureAge(31, 69, 0);
    char.mercuryFuture();
    expect(char.time).toBe((char.future - char.current) * .24)
  })

  it("should calculate the amount of time between current age and future birthday on Venus", () => {
    const char = new FutureAge(31, 21, 0);
    char.venusFuture();
    expect(char.time).toBe((char.future - char.current) * .62);
  })
});
