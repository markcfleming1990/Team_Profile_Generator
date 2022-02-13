//employee constructor
const Employee = require('../lib/Employee');


//employee object
test('creates employee object', () => {
  const employee = new Employee();

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

//generate id from getID