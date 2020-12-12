test("Testing anonymous function", () => {
  jest.mock("./anonymous.js");

  const age = require("./anonymous");

  age.mockImplementationOnce(() => 100);
  age.mockImplementationOnce(() => 200);
  age.mockImplementation(() => 10);
  age.mockImplementation(() => 50);
  age.mockImplementation(() => 1000);

  expect(age()).toBe(100);
  expect(age()).toBe(200);
  expect(age()).toBe(1000);
  expect(age()).toBe(1000);
});
