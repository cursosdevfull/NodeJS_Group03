const sum = require("./sum");

test("1 + 2 equal 3", () => {
  const total = sum(1, 2);
  expect(total).toBe(3);
});

test("2 added -7, sum = -5", () => {
  const total = sum(2, -7);
  expect(total).toBe(-5);
});

test("adding positive numbers is greater than 18", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(sum(a, b)).not.toBeGreaterThan(18);
    }
  }
});

test("add property to json", () => {
  const obj = { a: 1 };
  obj.b = 10;

  expect(obj).toEqual({ a: 1, b: 10 });
});

test("testing nulls", () => {
  const nulo = null;

  expect(nulo).toBeNull();
  expect(nulo).toBeDefined();
  expect(nulo).not.toBeUndefined();
  expect(nulo).toBeFalsy();
  expect(nulo).not.toBeTruthy();
});

test("country_iso only ['PE', 'BO', 'CO', 'GT', 'US']", () => {
  const valueAllowed = ["PE", "BO", "CO", "GT", "US"];
  const parameterCountry = "EU";

  expect(valueAllowed).not.toContain(parameterCountry);
});

test("campaing starts with PE", () => {
  const campaign = "PE_202017";
  expect(campaign).toMatch(/PE/);
});

const compileWithError = () => {
  throw new Error("It is not working");
};

test("Error generated", () => {
  expect(compileWithError).toThrow();
  expect(compileWithError).toThrow(Error);
  expect(compileWithError).toThrow("It is not working");
  expect(compileWithError).toThrow(/working/);
});

test("only list", () => {
  const list = [
    "red",
    "blue",
    "purple",
    "blue",
    "orange",
    "green",
    "yellow",
    "pink",
    "purple",
    "brown",
  ];

  expect(list).toContain("green");
  expect(new Set(list)).toContain("purple");
});
