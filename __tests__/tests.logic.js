import { User } from "../src/js/logic.js";

describe("User", () => {

  it("should create a User class with name and planet age value", () => {
    const char = new User("Jojo", 31);
    expect(char.name).toBe("Jojo");
    expect(char.age).toBe(31);
  })

  it("should display the Users current age on Mercury", () => {
    const char = new User("Jojo", 31);
    let mercuryAge = char.mercuryAge();
    expect(mercuryAge).toBe(31 / .24);
  })

  it("should display the Users current age on Venus", () => {
    const char = new User("Jojo", 31);
    let venusAge = char.venusAge();
    expect(venusAge).toBe(31 / .62);
  })
})
