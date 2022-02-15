const Manager = require("../lib/Manager");

test("creates manager object", () => {
  const manager = new Manager("Mark", 90, "markcfleming1990@gmail.com", 4);

  expect(manager.officenumber).toEqual(expect.any(Number));
});

test("gets role of employee", () => {
  const manager = new Manager(
    "Mark",
    90,
    "markcfleming1990@gmail.com",
    "markcfleming1990"
  );

  expect(manager.getRole()).toEqual("Manager");
});
