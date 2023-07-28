import { User, PastAge } from "../src/js/logic.js";

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
})
