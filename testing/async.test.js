test("async values", async () => {
  const valueExpected = 100;

  const mockFind = jest.fn();
  mockFind.mockResolvedValue(valueExpected);

  const valueReturned = await mockFind();

  expect(valueReturned).toBe(valueExpected);
});

test("model", async () => {
  const users = ["User01", "User02", "User03"];

  /*   const User = jest.fn().mockReturnValue({
    find: jest.fn().mockResolvedValue(users),
  }); */

  const User = {
    find: jest.fn().mockResolvedValue(users),
  };

  const usersReturned = await User.find();

  expect(usersReturned).toEqual(users);
});

test("Probar un controlador", async () => {
  const users = ["User01", "User02", "User03"];
  const getRepository = jest.fn().mockReturnValue({
    find: jest.fn().mockResolvedValue(users),
  });

  const userRepository = getRepository("user");
  const usersReturned = await userRepository.find();

  expect(usersReturned).toEqual(users);
  expect(usersReturned.length).toBe(users.length);
});
