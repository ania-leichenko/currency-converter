import convert from "./convert";

const rates = {
  UAH: {
    USD: 0.04,
    EUR: 0.02,
  },
  USD: {
    UAH: 25,
    EUR: 0.5,
  },
  EUR: {
    UAH: 50,
    USD: 2,
  },
};

describe("convert function", () => {
  test("should correct convert same currensy", () => {
    expect(convert(rates, 25, "UAH", "UAH")).toBe(25);
    expect(convert(rates, 25, "USD", "USD")).toBe(25);
    expect(convert(rates, 25, "EUR", "EUR")).toBe(25);
  });

  test("should correct convert UAH to USD", () => {
    const result = convert(rates, 25, "UAH", "USD");
    expect(result).toBe(1);
  });

  test("should correct convert USD to UAH", () => {
    const result = convert(rates, 2, "USD", "UAH");
    expect(result).toBe(50);
  });

  test("should correct convert UAH to EUR", () => {
    const result = convert(rates, 100, "UAH", "EUR");
    expect(result).toBe(2);
  });

  test("should correct convert EUR to UAH", () => {
    const result = convert(rates, 3, "EUR", "UAH");
    expect(result).toBe(150);
  });

  test("should correct convert USD to EUR", () => {
    const result = convert(rates, 10, "USD", "EUR");
    expect(result).toBe(5);
  });

  test("should correct convert EUR to USD", () => {
    const result = convert(rates, 10, "EUR", "USD");
    expect(result).toBe(20);
  });
});
