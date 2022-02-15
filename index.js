const generateHTML = require('.src/generateHTML');

//profiles
const Manager = require('./lib/manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const fs = require('fs');
const inquirer = require('inquirer');

//array to get team members
const teamArry = [];

//manager prompts 
const addManager = () => {
  return inquirer.prompt ([
      {
          type: 'input',
          name: 'name',
          message: "Who is the team manager?", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter the manager's name!");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Please enter the manager's ID.",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ("Please enter the manager's ID!")
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email",
        validate: email => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
            return true;
          }else {
            console.log ("Please enter the manager's email")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'OfficeNumber',
        message: "Please enter the managers office number.",
        validate: nameInput => {
          if(isNaN(nameInput)) {
            console.log ("Please enter the manager's office number")
          }else {
            return true;
          }
        }
      }
    ])
    .then(managerInput => {
      const {name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    })

};


const addEmployee = () => {
  console.log(`
  =================
  Adding employees to the team
  =================
  `);

  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "Please select employee role",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the name of the employee?",
      validate: nameInput => {
        if(!nameInput) {
          return true;
        }else {
          console.error("Please enter the name of the employee")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the id of the employee?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.error("Please enter the employe ID")
          return false;
        }else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the email of the employee?",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        }else {
          console.error("Please enter the employee's email!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the GitHub username of the employee?",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.error ("Please enter the employee's GitHub username!")
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the interns school??",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.error ("Please enter the Interns School!")
        }
    }
  },
  {
    type: 'cnfirm',
    name: 'confirmAddEmployee',
    message: "Would you like to add another team member?",
    default: false
  }
  ])
  .then(employeeData => {
    let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
    let employee;

    if(role === "Engineer") {
      employee = new Engineer(name, id, email, github);

      console.log(employee);
    }else if(role === "Intern") {
      employee = new Intern(name, id, email, school,);

      console.log(employee);
    }

    teamArray.push(employee);

    if(confirmAddEmployee) {
      return addEmployee(teamArray);
    }else {
      return teamArray;
    }
  })
};


//generate HTML page file 
