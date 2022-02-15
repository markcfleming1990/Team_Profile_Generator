//employee constructor
const Employee = require("../lib/Employee");

//employee object
test("creates employee object", () => {
  const employee = new Employee("Mark", 20, "markcfleming1990@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toStrictEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

//generate id from getID
test("gets employee ID", () => {
  const employee = new Employee("Mark", 20, "markcfleming1990@gmail.com");

  expect(employee.getId()).toStrictEqual(expect.any(Number));
});

//generate email from get email
test("gets employee Email", () => {
  const employee = new Employee("Mark", 20, "markcfleming1990@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

//get employee role
test("gets employee Role", () => {
  const employee = new Employee("Mark", 20, "markcfleming1990@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
