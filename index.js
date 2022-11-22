//Importing employees
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./template");
const stylePage = require("./css-template");
const team = [];

//begin the prompts
const startingQuestions = () => {
  inquirer
    .prompt([
      {
        name: "role",
        type: "list",
        message: "What is your role?",
        choices: ["Employee", "Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (userInput) {
      //check user input
      // console.log("user input: >>", userInput);
      if (userInput.role === "Manager") {
        addManager();
      }
      if (userInput.role === "Engineer") {
        addEngineer();
      }
      if (userInput.role === "Intern") {
        addIntern();
      }
      if (userInput.role === "Employee") {
        addEmployee();
      }
    });
};
//TODO: ask about getting the name to show up from the initial selection.
//add an additional employee
const addNewEmployee = () => {
  inquirer
    .prompt([
      {
        name: "role",
        type: "list",
        message: "What other employee would you like to add?",
        choices: ["Employee", "Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then(function (userInput) {
      //check user input
      // console.log("user input: >>", userInput);
      if (userInput.role === "Manager") {
        addManager();
      }
      if (userInput.role === "Engineer") {
        addEngineer();
      }
      if (userInput.role === "Intern") {
        addIntern();
      }
      if (userInput.role === "Employee") {
        addEmployee();
      }
      if (userInput.role === "None") {
        createHTML();
      }
    });
};

// add a manager
const addManager = () => {
  //check manager
  // console.log("I'm a manager");
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "id",
        message: "What is your id?",
        type: "input",
      },
      {
        name: "email",
        message: "What is your email?",
        type: "input",
      },
      {
        name: "office",
        message: "What is your office number?",
        type: "input",
      },
    ])
    .then(function (managerInput) {
      let newManager = new Manager(
        managerInput.name,
        managerInput.id,
        managerInput.email,
        managerInput.office
      );
      team.push(newManager);
      addNewEmployee();
    });
};

// add an engineer
const addEngineer = () => {
  //check engineer
  // console.log("I'm a engineer");
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "id",
        message: "What is your id?",
        type: "input",
      },
      {
        name: "email",
        message: "What is your email?",
        type: "input",
      },
      {
        name: "github",
        message: "What is your github profile?",
        type: "input",
      },
    ])
    .then(function (engineerInput) {
      let newEngineer = new Engineer(
        engineerInput.name,
        engineerInput.id,
        engineerInput.email,
        engineerInput.github
      );
      team.push(newEngineer);
      addNewEmployee();
    });
};

// add an intern
const addIntern = () => {
  //check intern
  // console.log("I'm an intern");
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "id",
        message: "What is your id?",
        type: "input",
      },
      {
        name: "email",
        message: "What is your email?",
        type: "input",
      },
      {
        name: "office",
        message: "What is your school?",
        type: "input",
      },
    ])
    .then(function (internInput) {
      let newIntern = new Intern(
        internInput.name,
        internInput.id,
        internInput.email,
        internInput.office
      );
      team.push(newIntern);
      addNewEmployee();
    });
};

// add an employee
const addEmployee = () => {
  //check employee
  // console.log("I'm an employee");
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "id",
        message: "What is your id?",
        type: "input",
      },
      {
        name: "email",
        message: "What is your email?",
        type: "input",
      },
    ])
    .then(function (employeeInput) {
      let newEmployee = new Employee(
        employeeInput.name,
        employeeInput.id,
        employeeInput.email
      );
      team.push(newEmployee);
      addNewEmployee();
    });
};

// creates the HTML
const createHTML = () => {
  const pageLayout = template(team);
  // console.log(pageLayout, "page layout");
  fs.writeFile("./dist/index.html", pageLayout, (err) => {
    if (err) throw new Error("Render Error", err);
  });
  stylePage();
};

startingQuestions();
//TODO: create if statements that if getRole = manager, display office number. Engineer = github. Intern = school.
//TODO: check to see if email link works.
//TODO: clicking on github link opens in new tab
