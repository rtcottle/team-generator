//Importing employees
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

//HTML framework
//TODO: take out the card section and make another variable for an employee or make one for each type of employee and append them to the end.
const htmlFile = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Team Roster</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
  </head>
  <body>
    <main>
      <section class="hero is-small is-primary is-danger">
        <div class="hero-body">
          <p class="title">My Team</p>
        </div>
      </section>
      <section class="section">
        <div class="tile is-ancestor is-vertical">
          <div class="tile is-6 is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">${name}</p>
              <p class="subtitle">${role}</p>
              <section class="is-primary">
                <p class="box">${ID}</p>
                <p class="box">${email}</p>
                <p class="box">${office}</p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>
`;

const managerQuestions = [
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
];

const engineerQuestions = [
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
    message: "What is your github?",
    type: "input",
  },
];

const internQuestions = [
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
    name: "school",
    message: "What is your school?",
    type: "input",
  },
];

//TODO: generate CSS file
//TODO: clicking on HTML link for email opens email in new window with to field as the email address
//TODO: clicking on github link opens in new tab
//TODO: start application, asked to put in Manager info

//TODO: this needs to be series of inquirer prompts.

inquirer.createPromptModule(managerQuestions).then((answers) => {
  console.log(answers);
});

//TODO: Option to add intern or engineer
//TODO: also a series of inquirer prompts depending on what type of employee they put in
//TODO: html generates at the end with team roster
