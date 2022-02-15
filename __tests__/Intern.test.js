const Intern = require('../lib/Intern');

//Intern object 
test('creates Intern Object', () => {
  const intern = new Intern('Mark', 90, 'markcfleming1990@gmail.com', 'Butler University');

  expect(intern.school).toEqual(expect.any(String));
});


//school input 
test('gets employee school', () => {
  const intern = new Intern('Mark', 90, 'markcfleming1990@gmail.com', 'Butler University');
  
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});


//get employee role
test('gets employee role', () => {
  const intern = new Intern('Mark', 90, 'markcfleming1990@gmail.com', 'Butler University');

  expect(intern.getRole()).toEqual('Intern');
});
