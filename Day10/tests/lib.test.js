const lib = require("../lib");

/* test("Our first test", () => {
  //throw new Error("Failed");
}); */

describe("absoluteNumber", () => {
  test("should return number if number is positve", () => {
    const result = lib.absoluteNumber(1);
    expect(result).toBe(1);
  });

  test("should return postive number if number is negative", () => {
    const result = lib.absoluteNumber(-1);
    expect(result).toBe(1);
  });

  test("should return zero if number is zero", () => {
    const result = lib.absoluteNumber(0);
    expect(result).toBe(0);
  });
});

/* test("absoluteNumber: should return number if number is positve", () => {
    const result = lib.absoluteNumber(1);
    expect(result).toBe(1);
  });
  
  test("absoluteNumber: should return postive number if number is negative", () => {
    const result = lib.absoluteNumber(-1);
    expect(result).toBe(1);
  });
  
  test("absoluteNumber: should return zero if number is zero", () => {
    const result = lib.absoluteNumber(0);
    expect(result).toBe(0);
  }); */

describe("greet", () => {
  test("should return the greeting message", () => {
    const result = lib.greet("Chad");
    expect(result).toContain("Chad");
  });
});

describe("getCurrencies", () => {
  test("currencies should match the supported currencies", () => {
    const result = lib.getCurrencies();
    let supportedCurrencies = ["AUD", "EUR", "USD"];
    expect(result).toEqual(expect.arrayContaining(supportedCurrencies));
  });
});

describe("getProduct", () => {
  test("should return the id price and category about the product", () => {
    const result = lib.getProduct(1);
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  test("it should return the user object is user is valid", () => {
    const result = lib.registerUser("chad");
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("username");
  });
  test("It should throw and error if the username is false", () => {
    //const result = lib.registerUser(null);
    expect(() => {
      lib.registerUser(null);
    }).toThrow();
  });
});
