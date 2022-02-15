const Employee = require('./Employee');

class Intern extends Employee {
  constructor (name, id, email, school) {
   //call employee object 
   super(name, id, email);

   this.school = school;
  }
//return school input
getSchool() {
  return this.school;
}

//return employee role input
getRole() {
  return 'Intern';
}

}


module.exports = Intern;