import { User } from "../src/js/logic.js";

describe("User", () => {

  it("should create a User class with name and age value", () => {
    const char = new User("Jojo", 31);
    expect(char.name).toBe("Jojo");
    expect(char.age).toBe(31);
  })

  it("should display the Users current age on Mercury", () => {
    const char = new User("Jojo", 31);
    char.mercuryAge();
    expect(char.age).toBe(129);
  })
})
