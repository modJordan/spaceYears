import { User } from "../src/js/logic.js";

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
